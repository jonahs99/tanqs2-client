const TAU = 2 * Math.PI

export default {
	background: prep((ctx, e) => {
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
	}),
	
	tank: prep((ctx, e) => {
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
	})
}

const styles = {
	'grid': {strokeStyle: '#333', lineWidth: 5},
	'blue':		{fillStyle: '#518ecf', strokeStyle: '#2c639e', lineWidth: 4, lineJoin: 'round'},
	'red':		{fillStyle: '#da7b79', strokeStyle: '#ad3230', lineWidth: 4, lineJoin: 'round'},
	'green':	{fillStyle: '#79daac', strokeStyle: '#30ad72', lineWidth: 4, lineJoin: 'round'},
	'yellow':	{fillStyle: '#daac79', strokeStyle: '#ad7230', lineWidth: 4, lineJoin: 'round'},
}

function prep(draw_func) {
	return (ctx, e) => {
		ctx.save()
		if (e.pos) ctx.translate(e.pos[0], e.pos[1])
		if (e.rot) ctx.rotate(e.rot)
		if (e.style) Object.assign(ctx, styles[e.style])
		draw_func(ctx, e)
		ctx.restore()
	}
}
