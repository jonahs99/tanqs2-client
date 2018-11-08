import deep_copy from './util/deep-copy'

export default class Input {
    constructor(canvas) {
        this._changes = {}

        this.register_events(canvas)
    }

    get data() {
        const changes = deep_copy(this._changes)
        this._changes = {}

        return changes
    }

    register_events(canvas) {
        document.addEventListener('mousemove', ev => {
            const rect = canvas.getBoundingClientRect()
            this._changes.mouse = [
                ev.clientX - rect.left - canvas.width/2,
                ev.clientY - rect.top - canvas.height/2
            ]
        })
    }
}