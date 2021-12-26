const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');
    socket.emit('mensaje', 'Bienvenido')
});

setInterval(() => {
    io.emit('mensaje', 'Hola mundo');
}, 3000);

server.listen(8080, () => {
    console.log('Servidor corriendo en http://localhost:8080');
});
