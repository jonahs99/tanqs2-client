module.exports = class TankModel {

    constructor(entity) {
        this.entity = entity
    }

    draw(context) {
        context.translate(this.entity.pos[0], this.entity.pos[1])

        context.fillStyle = "#06f"
        context.strokeStyle = "#444"
        context.lineWidth = 4

        context.beginPath()
        context.arc(0, 0, 20, 0, 2 * Math.PI)
        context.fill()
        context.stroke()
    }

}