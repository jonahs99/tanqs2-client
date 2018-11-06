import Models from './models'

// Top level scene

export default class MainScene {

    constructor() {
        this.children = []
    }

    add_model(entity) {
        this.children.push(new Models[entity.model](entity))
    }

    draw(context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.width)

        context.translate(context.canvas.width / 2, context.canvas.height / 2)
    }

}