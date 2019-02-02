export default function init_context() {
    const canvas = document.getElementById('canvas')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

	canvas.style.background = '#222'

    const context = canvas.getContext('2d')

    return context
}
