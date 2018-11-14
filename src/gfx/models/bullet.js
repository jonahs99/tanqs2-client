import SceneNode from '../scene'

export default class BulletModel extends SceneNode {

    constructor(entity) {
        super()
        this.entity = entity

        console.log('create', entity)
    }

    _draw(context) {
        const e = this.entity

        context.translate(e.pos[0], e.pos[1])

        context.fillStyle = e.clr
        context.strokeStyle = "#444"
        context.lineWidth = 3

        context.beginPath()
        context.arc(0, 0, e.rad, 0, Math.PI * 2)
        context.fill()
        context.stroke()
    }
}