import SceneNode from "./scene";

export default class CameraNode extends SceneNode {
    constructor(entities) {
        super()

        this.view = null
        this.entities = entities
    }

    _draw(context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.width)
        context.translate(context.canvas.width / 2, context.canvas.height / 2)

        if (!this.view) return

        if (this.view.tracking !== -1) {
            const entity = this.entities.entities[this.view.tracking]

            context.translate(-entity.pos[0], -entity.pos[1])
        }
    }
}