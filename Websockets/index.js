const webSocket = require("ws")

const webSocketServer = new webSocket.Server({
    port : 3000
})

webSocketServer.on("connection", socket => {
    console.log("connected")

    socket.on("message", message => {
        console.log(message.toString())


        webSocketServer.clients.forEach(client => {
            client.send(message.toString())   
        })
    })

})