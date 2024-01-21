import express from "express";
import { Server as SocketIOServer } from "socket.io";
import http from 'http'


const app = express()
const server = http.createServer(app)
const io = new SocketIOServer(server)

io.on('connection', socket => {
    console.log("cleinet coenctado")
});

const port = 3000;
  
server.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });