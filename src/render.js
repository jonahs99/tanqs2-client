import models from './models/all'

const modelz = {
	'background': 0,
	'tank': 1,
}

let COUNT = 0

export default class Renderer {
	constructor (dom) {
		this.ctx = dom.ctx	
	}

	render(state) {
		const ctx = this.ctx

		ctx.setTransform(1, 0, 0, 1, 0, 0)
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

		ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)

		this.transform(state)

		const entities = Object.values(state.entities).sort(
			(a, b) => modelz[a.model] > modelz[b.model] ||
				(modelz[a.model] == modelz[b.model] && a.style > b.style))

		for (let entity of entities) {
			if (!models[entity.model]) console.error(`No model '${entity.model}'`)

			ctx.save()
			models[entity.model].draw(ctx, entity)
			ctx.restore()
		}
	}

	transform(state) {
		const ctx = this.ctx

		const view_width = 1550
		const scl = Math.max(ctx.canvas.width/view_width, ctx.canvas.height/view_width)
		ctx.scale(scl, scl)

		const view = state.client.view

		if (view.mode == 'spectate') {
			ctx.translate(0, 0)
			return
		}

		if (view.mode == 'control' || view.mode == 'follow') {
			const entity = state.entities[view.entity]
			ctx.translate(-entity.pos[0], -entity.pos[1])
			return
		}
	}
}
