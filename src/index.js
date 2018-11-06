import Net from './net'
import Game from './game'

const net = new Net()
const game = new Game(net)

net.on('open', () => {
    net.send('login', {
        name: 'jonah',
    })
})

net.connect()