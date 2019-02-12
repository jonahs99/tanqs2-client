import Net from './net/net'
import State from './state'
import Renderer from './render'
import Input from './input'
import UI from './ui'
import dom from './dom'

const net = new Net()
const state = new State(net)
const renderer = new Renderer(dom)

net.on('open', () => {
	net.send('subscribe', {})

	new Input(net)
})

net.on('init', (msg) => {
	console.log('init event received:')

	UI.client = state._state.client
	UI.$on('join', () => { net.send('join', {}) })

	requestAnimationFrame(render)
})

net.on('close', () => {
	console.log('close event received.')
})

net.on('init', console.log)
net.once('diff', console.log)

net.connect()

function render() {
	const frame = state.get_state()
	if (frame) renderer.render(frame)
	requestAnimationFrame(render)
}
