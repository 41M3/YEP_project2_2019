const
    socket = io();

function clickLeft() {
    socket.emit('left');
};

function clickRight() {
    socket.emit('right');
};

function clickUp() {
    socket.emit('up');
};

function clickDown() {
    socket.emit('down');
};

function clickStart() {
    console.log('start');
    socket.emit('start');
};

socket.on('message', message => {
    console.log(message);
});

socket.emit('disconnected');