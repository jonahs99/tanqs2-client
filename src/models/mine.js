import prep from './prep'

const TAU = 2 * Math.PI

const Mine = {}

Mine.draw = (ctx, e) => {
	prep(ctx, e)
	ctx.rotate(Math.sin((Date.now() / 1000 * 2)) * 0.1)

	const rad = e.shape.radius		
	const n_spikes = 12

	ctx.lineJoin = 'miter'
	ctx.lineWidth = 5

	ctx.beginPath()
	ctx.moveTo(rad, 0)
	for (let i = 1; i < 2 * n_spikes; i++) {
		const r = i % 2 ? rad * 1.3 : rad
		const t = TAU * i / (2 * n_spikes)
		ctx.lineTo(r * Math.cos(t), r * Math.sin(t))
	}
	ctx.closePath()
	ctx.fill()
	ctx.stroke()

	const blink = Date.now() % 500 > 250
	ctx.fillStyle = blink ? '#f06' : ctx.strokeStyle
	ctx.beginPath()
	ctx.arc(0, 0, blink ? rad * 0.55 : rad * 0.5, 0, TAU)
	ctx.fill()
}

export default Mine
