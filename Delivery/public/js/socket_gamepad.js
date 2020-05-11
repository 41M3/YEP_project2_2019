const
    arrow = document.getElementById('arrow');
    left = arrow.getElementsByClassName('arrow-left');
    right = arrow.getElementsByClassName('arrow-right');
    up = arrow.getElementsByClassName('arrow-up');
    down = arrow.getElementsByClassName('arrow-down');
    socket = io();

socket.on('message', message => {
    console.log(message);
});