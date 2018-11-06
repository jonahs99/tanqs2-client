import apply_changes from "./util/apply-changes"

import init_canvas from './gfx/canvas'
import Graphics from './gfx/gfx'
import draw_scene from './gfx/scene'

export default class Game {
    constructor(net) {
        this.entities = {}

        this.main_scene = new Graphics()
        this.context = init_canvas()

        net.on('update', this.update.bind(this))

        requestAnimationFrame(this.render_loop.bind(this))
    }

    update(data) {

        for (let entity_id in data.init) {
            this.entities[entity_id] = data.init[entity_id]

            const entity = this.entities[entity_id]
            if (entity.model) {
                this.main_scene.add_model(entity)
            }
        }
        
        for (let entity_id in data.delete) {
            delete this.entities[entity_id]
        }
        
        apply_changes(this.entities, data.update)

        console.log(this.entities)
    }

    render_loop() {
        requestAnimationFrame(this.render_loop.bind(this))

        draw_scene(this.main_scene, this.context)
    }
}