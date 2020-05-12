const
    arrow = document.getElementById('arrow');
    socket = io();
//    right = arrow.getElementsByClassName('arrow-right');
//   up = arrow.getElementsByClassName('arrow-up');
//    down = arrow.getElementsByClassName('arrow-down');
    

socket.on('message', message => {
    console.log(message);
});

socket.on('left', () => {
    arrow.getElementsByClassName('arrow-left')[0].click();
});

socket.on('right', () => {
    arrow.getElementsByClassName('arrow-right')[0].click();
});

socket.on('up', () => {
    arrow.getElementsByClassName('arrow-up')[0].click();
});

socket.on('down', () => {
    console.log('click down');
    arrow.getElementsByClassName('arrow-down')[0].click();
});

socket.emit('disconnected');