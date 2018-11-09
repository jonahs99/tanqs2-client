import SceneNode from './scene'
import Models from './models'

export default class Graphics extends SceneNode {

    constructor() {
        super()

        this.world_node = new SceneNode()

        this.add_child(this.world_node)
    }

    add_model(entity) {
        const model = new Models[entity.model](entity)
        entity._model = model
        
        this.world_node.add_child(model)
    }

    remove_model(entity) {
        this.world_node.remove_child(entity._model)
    }

    _draw(context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.width)

        context.translate(context.canvas.width / 2, context.canvas.height / 2)
    }

}