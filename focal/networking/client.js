const net = require("net")

const client = net.createConnection({host: "localhost", port: 3000}, () => {
  client.setEncoding("utf-8")
  //once the client is connected we can send data to the server
  client.write("Hey I'm definitely not a bot")
})

client.on('data', () => console.log(data))

//created a client that can connect to any server. Essentially a bot