import Net from './net.js'

const net = new Net()
net.connect()

console.log(net)

net.on('open', () => {
    net.send('login', 'a quick test message!')
    net.send('login', 'should see this!')
})