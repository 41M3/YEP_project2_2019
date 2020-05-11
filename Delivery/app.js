const
    express = require('express');
    app = express();
    cors = require('cors')
    bodyParser = require('body-parser')
    port = process.env.PORT || 8080;
    http = require('http');
    server = http.createServer(app);
    socketio = require('socket.io');
    io = socketio(server);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors())

app.use('/', require('./routes/routes'));
app.use(express.static('public'));

io.on('connection', (socket) => {
    socket.emit('message', 'welcome');

    socket.on('disconnected', () => {
        io.emit('message', 'Client disconnected');
    });
});

server.listen(port);
console.log('Server running on port: ' + port);