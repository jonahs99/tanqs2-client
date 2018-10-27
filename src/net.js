"use strict";

import EventEmitter from "eventemitter3"

export default class Net extends EventEmitter {
    constructor() {
        super()

        this.ws = null
    }

    connect() {
        const port = 3000

        this.ws = new WebSocket(`ws://${window.location.hostname}:${port}`)

        this.ws.addEventListener('open', (event) => {
            console.log('connected on port' + port)

            this.emit('open')
        })

        this.ws.addEventListener('message', (event) => {
            const message = JSON.parse(event.data)

            if (Array.isArray(message) && message.length == 2) {
                this.emit(message[0], message[1])
            }
        })
    }

    send(type, data) {
        const message = JSON.stringify([type , data])

        this.ws.send(message)
    }
}
