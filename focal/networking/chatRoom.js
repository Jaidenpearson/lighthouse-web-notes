//TCP Chat server

//net -> package is build into NODE.JS
const anArrayOfConnections = []
const net = require("net")

//Have a way to know when a connection is made to the server
const server = net.createServer((connection) => {
  //Translate/ set an encoding method
  connection.setEncoding("utf-8")
  //notify that a connection has been made
  console.log("A new user has joined")
  anArrayOfConnections.push(connection)
  //We haven't created anything to handle the data coming in
  connection.on('data', (data) => {
    console.log(data)
    //Upon receiving information
    //Send information back
    //We want to loop through all the connection and send data back to them. Broadcast the message sent.
    anArrayOfConnections.forEach(singleConnection => {
      //Check if the user sent the message, we don't want to broadcast it back to them.

      // We are comparing two references of an object together
      if(singleConnection !== connection)
      singleConnection.write(data)
    })
    //connection.write(data)
  })


  //notify that a connection has ended
  connection.on("end", () => {
    console.log("A user has disconnected")
  })
})


//We want something to happen once our server is running

server.listen(3000, () => 
    console.log("I'm listening!!"))

//Created a server that any client can connect to and send data to.