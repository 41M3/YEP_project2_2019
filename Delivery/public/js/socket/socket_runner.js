const
    arrow = document.getElementById('arrow');
    socket = io();
    

socket.on('message', message => {
    console.log(message);
});

socket.on('jump', () => {
    console.log("Jump click")
    arrow.getElementsByClassName('jump')[0].click();
});

socket.on('start', () => {
    arrow.getElementsByClassName('start')[0].click();
});

socket.emit('disconnected');