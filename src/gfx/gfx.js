import SceneNode from './scene'
import CameraNode from './camera'
import Models from './models'

export default class Graphics {

    constructor(entities) {
        this.main_scene = new CameraNode(entities)

        this.scene_layers = {
            'world': this.main_scene
        }

        this.register(entities)
    }

    register(entities) {
        entities.on('add', entity => {
            if (entity.tracking) {
                this.main_scene.view = entity
                console.log(entity)
                return
            }

            if (entity.model) this.add_model(entity)
        })

        entities.on('remove', entity => {
            if (entity.model) this.remove_model(entity)
        })
    }

    add_model(entity) {
        const model = new Models[entity.model.type](entity)
        entity._model = model
        
        this.scene_layers[entity.model.layer].add_child(model)
    }

    remove_model(entity) {
        this.main_scene.remove_child(entity._model)
    }

    draw(context) {
        this.main_scene.draw(context)
    }

}