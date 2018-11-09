import SceneNode from '../scene'

export default class PlayFieldModel extends SceneNode {

    constructor(entity) {
        super()
        this.entity = entity
    }

    _draw(context) {
        const size = this.entity.size

        context.fillStyle = '#222'

        context.beginPath()
        context.rect(-size[0] / 2, -size[1] / 2, size[0], size[1])
        context.fill()

        context.strokeStyle = '#333'
        context.lineWidth = 5
        context.lineCap = 'round'

        const grid_size = 100

        context.beginPath()
        for (let x = -size[0]/2; x <= size[0]/2; x += grid_size) {
            context.moveTo(x, -size[1]/2)
            context.lineTo(x, size[1]/2)
        }
        for (let y = -size[1]/2; y <= size[1]/2; y += grid_size) {
            context.moveTo(-size[0]/2, y)
            context.lineTo(size[0]/2, y)
        }
        context.stroke()
    }
}