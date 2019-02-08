import Net from './net/net'
import State from './state'
import dom from './dom'
import Renderer from './render'

const net = new Net()
const state = new State(net)
const renderer = new Renderer(dom)

net.on('open', () => {
	net.send('subscribe', {})
})

net.on('init', (msg) => {
	console.log('init event received:')
	
	//requestAnimationFrame(render)

	setTimeout(() => {
		net.send('join', {})
	}, 4000)
})

net.on('init', console.log)
net.on('diff', console.log)
net.on('diff', msg => console.log(JSON.stringify(state.get_state().entities, null, 2)))

net.on('close', () => {
	console.log('close event received.')
})

net.connect()

function render() {
	const frame = state.get_state()
	if (frame) renderer.render(frame)
	requestAnimationFrame(render)
}
