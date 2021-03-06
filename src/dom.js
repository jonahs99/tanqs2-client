const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.style.background = '#222'

function resize() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
}

window.addEventListener('load', resize)
window.addEventListener('resize', resize)

export default { canvas, ctx }
