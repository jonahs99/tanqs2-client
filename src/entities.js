import {EventEmitter} from 'eventemitter3'
import deep_copy from './util/deep-copy'
import apply_changes from './util/apply-changes'

export default class Entities extends EventEmitter {
    constructor(net) {
        super()

        this.entities = {}

        net.on('update', this._net_update.bind(this))
    }

    _net_update(data) {
        for (let entity_id in data.init) {
            this.entities[entity_id] = deep_copy(data.init[entity_id])

            const entity = this.entities[entity_id]
            this.emit('add', entity)
        }
        
        apply_changes(this.entities, data.update)
        
        for (let entity_id in data.delete) {
            const entity = this.entities[entity_id]
            this.emit('remove', entity)
            
            delete this.entities[entity_id]
        }
    }
}