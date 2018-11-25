import SceneNode from '../scene'

export default class WallModel extends SceneNode {

    constructor(entity) {
        super()
        this.entity = entity

        console.log('create', entity)
    }

    _draw(context) {
        const e = this.entity
        const poly = e.poly

        context.fillStyle = e.clr
        context.strokeStyle = '#bbb'
        context.lineWidth = 5
        context.lineJoin = 'round'

        context.beginPath()

        context.moveTo(poly.v[0][0], poly.v[0][1])
        for (let i = 1; i < poly.v.length; i++) {
            context.lineTo(poly.v[i][0], poly.v[i][1])
        }
        
        context.closePath()
        context.fill()
        context.stroke()
    }
}