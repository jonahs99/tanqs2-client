import apply_changes from "./util/apply-changes"
import deep_copy from "./util/deep-copy"

import init_canvas from './gfx/canvas'
import Graphics from './gfx/gfx'
import Input from './input'
import Entities from "./entities";

export default class Game {
    constructor(net) {
        this.context = init_canvas()

        this.net = net
        this.entities = new Entities(net)
        this.input = new Input(this.context.canvas)
        
        this.graphics = new Graphics(this.entities)

        this._last_frame = Date.now()

        net.on('open', this.start.bind(this))
    }

    start() {
        const input_interval = 50

        requestAnimationFrame(this.render_loop.bind(this))
        setInterval(this.send_input.bind(this), input_interval)
    }

    render_loop() {
        requestAnimationFrame(this.render_loop.bind(this))

        const now = Date.now()
        this.ellapsed = now - this._last_frame
        this._last_frame = now

        this.entities.interpolate()
        this.graphics.draw(this.context)
    }

    send_input() {
        const input_data = this.input.data

        if (Object.keys(input_data).length) {
            this.net.send('input', input_data)
        }
    }
}