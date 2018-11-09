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
    }
}