import Net from './net/net'
import Game from './game'

const net = new Net()
const game = new Game(net)

net.on('open', () => {
    setTimeout(() => {
        net.send('login', {
            name: 'jonah',
        })
    }, 1000)
})

net.connect()