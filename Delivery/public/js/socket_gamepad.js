const
    arrow = document.getElementById('arrow');
    left = arrow.getElementsByClassName('arrow-left');
    right = arrow.getElementsByClassName('arrow-right');
    up = arrow.getElementsByClassName('arrow-up');
    down = arrow.getElementsByClassName('arrow-down');
    socket = io();

function clickLeft() {
    console.log('click left');
    socket.emit('left');
};

function clickRight() {
    console.log('click right');
    socket.emit('right');
};

function clickUp() {
    console.log('click up');
    socket.emit('up');
};

function clickDown() {
    console.log('click down');
    socket.emit('down');
};

socket.on('message', message => {
    console.log(message);
});

socket.emit('disconnected');
