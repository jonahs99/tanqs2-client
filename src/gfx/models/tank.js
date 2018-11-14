import SceneNode from '../scene'

export default class TankModel extends SceneNode {

    constructor(entity) {
        super()
        this.entity = entity

        console.log('create', entity)
    }

    _draw(context) {
        const e = this.entity

        context.translate(e.pos[0], e.pos[1])
        context.rotate(e.rot)

        context.fillStyle = e.clr
        context.strokeStyle = "#444"
        context.lineWidth = 3
        context.lineJoin = 'round'

        const tread_wid = 6

        // Body
        context.beginPath()
        context.rect(-e.rad, -e.rad, 2 * e.rad, 2 * e.rad)
        context.fill()
        context.stroke()

        // Treads
        context.beginPath()
        context.rect(-e.rad - tread_wid/2, -e.rad - tread_wid, 2 * (e.rad + tread_wid/2), 2 * tread_wid)
        context.rect(-e.rad - tread_wid/2, e.rad - tread_wid, 2 * (e.rad + tread_wid/2), 2 * tread_wid)
        context.fill()
        context.stroke()

        const gun_wid = 4

        //Gun
        context.beginPath()
        context.rect(0, -gun_wid, 2 * e.rad, 2 * gun_wid)
        context.fill()
        context.stroke()
    }

}