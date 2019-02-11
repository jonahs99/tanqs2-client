import Styles from './styles'

function prep(ctx, e) {
	if (e.pos) ctx.translate(e.pos[0], e.pos[1])
	if (e.rot) ctx.rotate(e.rot)
	if (e.style) Object.assign(ctx, Styles[e.style])
}

export default prep
