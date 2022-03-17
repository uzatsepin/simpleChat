const express = require('express');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const rooms = new Map();

app.get('/users', (req, res) => {
    rooms.set(console.log('Hello World'))
    res.set(rooms )
});

io.on('connection', socket => {
    console.log('socket connected', socket.id)
})

server.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Сервер запущен');
});