import express from "express";
import { Server as SocketIOServer } from "socket.io";
import http from 'http'


const app = express()
const server = http.createServer(app)
const io = new SocketIOServer(server, {cors: {
    origin : "http://localhost:5173"
}})

io.on('connection', socket => {
    console.log("cliente conectado")

    socket.on('message', (data)=> {
        console.log(data)
        socket.broadcast.emit('message', data)
    })
});

const port = 3000;
  
server.listen(port, () => {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
  });