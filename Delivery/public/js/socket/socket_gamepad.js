const
    socket = io();

function clickLeft() {
    socket.emit('left');
    socket.emit('jump');
};

function clickRight() {
    socket.emit('right');
    socket.emit('jump');
};

function clickUp() {
    socket.emit('up');
    socket.emit('jump');
};

function clickDown() {
    socket.emit('down');
    socket.emit('jump');
};

function clickJump() {
    socket.emit('jump');
};

function clickStart() {
    console.log('start');
    socket.emit('start');
};

socket.on('message', message => {
    console.log(message);
});

socket.emit('disconnected');