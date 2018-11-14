export default class SmoothTicker {
    constructor(net) {
        this._offset = null
        this._delta = 0.05

        net.on('update', this._on_update.bind(this))
    }

    get_server_time() {
        const now = Date.now()
        return now + this._offset
    }

    _on_update(data) {
        const now = Date.now()
        const server_time = data.time
        const offset = server_time - now

        if (this._offset !== null) {
            this._offset = lerp(this._offset, offset, this._delta)
        } else {
            this._offset = offset
        }
    }
}

function lerp(a, b, delta) {
    return a * (1 - delta) + b * delta
}