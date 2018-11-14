import {EventEmitter} from 'eventemitter3'
import deep_copy from './util/deep-copy'
import apply_changes from './util/apply-changes'
import SmoothTicker from './net/smooth-ticker'

export default class Entities extends EventEmitter {
    constructor(net) {
        super()

        this.delay = 1000 / 10 * 1.5

        this._update_buffer = []
        this._last_update = null
        this._next_update = null
        this._last_time = null

        this.entities = {}

        this.smooth_ticker = new SmoothTicker(net)

        net.on('update', this._on_update.bind(this))
    }

    interpolate() {
        const target_time = this.smooth_ticker.get_server_time() - this.delay

        while(this._update_buffer.length > 1 && this._next_update.time <= target_time) {
            this._advance()
        }

        if (!this._last_update) return
        if (!this._next_update) return

        const delta = (target_time - this._last_time) / (this._next_update.time - this._last_time)

        this._last_time = target_time

        const update = this._next_update.update
        for (let id in update) {
            const entity = this.entities[id]
            if (entity.model) {
                lerp_changes(entity, update[id], delta)
            }
        }
    }

    _on_update(data) {
        this._update_buffer.push(data)
        this._next_update = this._update_buffer[0]
    }

    _advance() {
        const update = this._update_buffer.shift()

        this._apply_update(update)

        this._last_update = update
        this._next_update = this._update_buffer[0]

        this._last_time = update.time
    }

    _apply_update(data) {
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

function lerp(a, b, delta) {
    return a * (1 - delta) + b * delta
}

function lerp_changes(obj, changes, delta) {
    for (let key of Object.keys(changes)) {
        if (typeof changes[key] === 'object') {
            if (!obj.hasOwnProperty(key)) console.log(key)
            lerp_changes(obj[key], changes[key], delta)
        } else if (typeof changes[key] === 'number') {
            obj[key] = lerp(obj[key], changes[key], delta)
        }
    }
}