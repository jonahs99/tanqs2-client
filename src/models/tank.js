import prep from './prep'

const Tank = {}

Tank.draw = (ctx, e) => {
	prep(ctx, e)

	const rad = e.shape.radius

	ctx.beginPath()
	//ctx.arc(0, 0, e.shape.radius, 0, TAU)
	ctx.rect(-rad, -rad, 2 * rad, 2 * rad)
	ctx.fill()
	ctx.stroke()

	ctx.beginPath()
	ctx.rect(0, -rad / 4, rad * 2, rad / 4 * 2)
	ctx.rect(-1.2 * rad, -1.2 * rad, 2.4 * rad, 0.65 * rad)
	ctx.rect(-1.2 * rad, (1.2-0.65) * rad, 2.4 * rad, 0.65 * rad)
	ctx.fill()
	ctx.stroke()
}

export default Tank
