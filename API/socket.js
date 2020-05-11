const
    path = require('path')
    express = require('express');
    app = express();
    port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Server running on port ' + port));






/*
io.on('connection', (socket) => {
    const serverId = socket.handshake.query.id;
    console.info('Client connected [id=$(socker.id)]');
    
    io.emit('this', { will: 'be received by everyone'});

    socket.on('private message', (from, msg,) => {
        console.log('I received a privade message by' , from, ' saying', msg);
    });

    socket.on('disconnect', () => {
        io.emit('user disconnected');
    });
});
*/