import prep from './prep'

const TAU = 2 * Math.PI

const Blast = {}

Blast.draw = (ctx, e) => {
	prep(ctx, e)

	const rad = e.shape.radius		

	ctx.beginPath()
	ctx.arc(0, 0, e.shape.radius, 0, TAU)
	ctx.fill()
	ctx.stroke()
}

export default Blast
