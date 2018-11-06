export default function draw_scene(node, context) {
    context.save()

    node.draw(context)

    if (node.children) {
        for (let child of node.children) draw_scene(child, context)
    }

    context.restore()
}