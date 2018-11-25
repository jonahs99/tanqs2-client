import SceneNode from '../scene'

export default class FlagModel extends SceneNode {

    constructor(entity) {
        super()
        this.entity = entity

        console.log('create', entity)
    }

    _draw(context) {
        const e = this.entity

        context.translate(e.pos[0], e.pos[1])

        context.fillStyle = "#ccc"
        context.strokeStyle = "#ccc"
        context.lineWidth = 5
        context.lineJoin = 'round'

        // Body
        context.beginPath()
        context.rect(-e.rad, -e.rad, 2 * e.rad, 2 * e.rad)
        context.fill()
        context.stroke()
    }

}