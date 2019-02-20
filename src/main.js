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
	net.once('diff', console.log)


	requestAnimationFrame(render)
})

net.on('close', () => {
	console.log('close event received.')
})

net.on('init', console.log)

UI.$on('join', (msg) => { net.send('join', msg) })

net.connect()

function render() {
	const frame = state.get_state()
	if (frame) {
		UI.state = frame.client.state
		UI.entity = frame.client.view.mode == 'control' ?
			frame.entities[frame.client.view.entity] : null

		renderer.render(frame)
	}
	requestAnimationFrame(render)
}
