import prep from './prep'

const Background = {}

Background.draw = (ctx, e) => {
	prep(ctx, e)

	// Draw a grid
	const nrow = Math.round(2 * e.size[1] / e.grid_spacing)
	const srow = 2 * e.size[1] / nrow
	const ncol = Math.round(2 * e.size[0] / e.grid_spacing)
	const scol = 2 * e.size[0] / ncol
	ctx.beginPath()
	for (let i = 0; i < nrow + 1; i++) {
		const x = (i - nrow / 2) * srow
		ctx.moveTo(-e.size[0], x)
		ctx.lineTo(e.size[0], x)
	}
	for (let i = 0; i < ncol + 1; i++) {
		const x = (i - ncol / 2) * scol
		ctx.moveTo(x, -e.size[1])
		ctx.lineTo(x, e.size[1])
	}
	ctx.stroke()
}

export default Background
