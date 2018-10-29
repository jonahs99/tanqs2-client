import Net from './net.js'

const net = new Net()
net.connect()

console.log(net)

net.on('open', () => {
    net.send('login', {
        name: 'jonah',
    })
})