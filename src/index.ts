import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 5000 });


//event handler
wss.on("connection" , function(socket){
    console.log("user here");
    socket.send("Hello");
})