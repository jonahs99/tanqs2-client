export default class SceneNode {
    static compare(a, b) {
        return 0//(a.data.z || 0) - (b.data.z || 0)
    }

    constructor() {
        this._children = []
    }

    _draw(context) { }

    draw(context) {
        context.save()

        this._draw(context)

        for (let child of this._children) {
            child.draw(context)
        }
        
        context.restore()
    }

    add_child(node) {
        this._children.push(node)
        this._children.sort(SceneNode.compare)
    }

    remove_child(node) {
        const i = this._children.indexOf(node)
        if (i === -1) return
        this._children.splice(i, 1)
    }
}