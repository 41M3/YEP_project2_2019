const
    arrow = document.getElementById('arrow');
    socket = io();

socket.on('message', message => {
    console.log(message);
});