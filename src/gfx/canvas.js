export default function init_context() {
    const canvas = document.getElementById('canvas')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const context = canvas.getContext('2d')

    return context
}