import dom from './dom'

export default class Input {
	constructor(net) {
		let changes = {}
		
		const debounce_ms = 50

		const throttled_send = throttle(() => {
			net.send('input', changes)
			changes = {}
		}, debounce_ms)

		const send_change = (change) => {
			Object.assign(changes, change)
			throttled_send()
		}

		document.addEventListener('mousemove', (evt) => {
			const rect = dom.canvas.getBoundingClientRect()
			const x = evt.clientX - rect.left - canvas.width / 2
			const y = evt.clientY - rect.top - canvas.height / 2
		
			const scale = Math.min(canvas.width/2, canvas.height/2)

			send_change({'+pointer': [x / scale, y / scale]})
		})

		document.addEventListener('mousedown', (evt) => {
			switch (evt.button) {
				case 0:
					send_change({'+main_button': true})
					break
				case 1:
					send_change({'+mid_button': true})
					break
				case 2:
					send_change({'+alt_button': true})
					break
			}
		})
	}
}

function throttle(func, wait) {
	let timeout // While timeout is running, don't run func!
	let waiting = false
	let context, args

	function later() {
		timeout = null
		if (waiting) go()
	}

	function go() {
		func()
		waiting = false
		timeout = setTimeout(later, wait)
	}

	return function() {
		if (!timeout) go()
		else waiting = true
	}
}
