
import prep from './prep'

const Wall = {}

Wall.draw = (ctx, e) => {
	prep(ctx, e)

	const poly = e.shape.vertices

	ctx.beginPath()
	
	ctx.moveTo(poly[0][0], poly[0][1])
	for (let i = 1; i < poly.length; i++) {
		ctx.lineTo(poly[i][0], poly[i][1])
	}

	ctx.closePath()

	ctx.fill()
	ctx.stroke()
}

export default Wall
