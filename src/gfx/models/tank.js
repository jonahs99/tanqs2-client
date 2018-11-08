module.exports = class TankModel {

    constructor(entity) {
        this.entity = entity
    }

    draw(context) {
        const e = this.entity

        context.translate(e.pos[0], e.pos[1])
        context.rotate(e.rot)

        context.fillStyle = "#06f"
        context.strokeStyle = "#444"
        context.lineWidth = 3

        context.beginPath()
        context.arc(0, 0, e.rad, 0, 2 * Math.PI)
        context.fill()
        context.stroke()

        context.beginPath()
        context.rect(0, -3, e.rad * 1.5, 6)
        context.fill()
        context.stroke()
    }

}