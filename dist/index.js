"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 5000 });
//event handler
wss.on("connection", function (socket) {
    console.log("user here");
    socket.send("Hello");
});
