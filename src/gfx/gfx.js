import Models from './models'

// Top level scene

export default class MainScene {

    constructor() {
        this.children = []
    }

    add_model(entity) {
        const model = new Models[entity.model](entity)
        entity._model = model
        this.children.push(model)
    }

    remove_model(entity) {
        this.children.splice(this.children.indexOf(entity._model), 1)
    }

    draw(context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.width)

        context.translate(context.canvas.width / 2, context.canvas.height / 2)
    }

}