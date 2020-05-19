var canvas = document.getElementById("canvas"),
    g = canvas.getContext("2d");

var width = window.innerWidth,
    height = window.innerHeight,
    ratio = window.devicePixelRatio;

canvas.width  = width  * ratio;
canvas.height = height * ratio;
canvas.style.width  = width  + "px";
canvas.style.height = height + "px";
g.scale(ratio, ratio);
g.imageSmoothingEnabled = false;
g.fillStyle = "rgba(255, 255, 255, 0.25)";

var x = width / 2,
    r = 35,
    stepRight = 0,
    vx = r * 0.2;

var spriteGuyRight = new Image();
spriteGuyRight.onload = animate;
spriteGuyRight.src = "guy-right.png";

function animate() {
    draw();
    update();
    requestAnimationFrame(animate);
}

function draw() {
    g.fillRect(0, 0, width, height);

    // Affichage
    runningRight(x, height, r, Math.floor(stepRight));
}

function runningRight(x, y, r, stepRight) {
    var s = r/9;

    // params : source, sx, sy, sw, sh, dx, dy, dw, dh
    g.drawImage(spriteGuyRight, 32*stepRight, 0, 30, 55, x - 16*s, y - 65*s, 30*s, 55*s);
}


function update() {
    // Mise à jour des variables
    x += vx;
    
    // if (x < r || x > width - r) { rebondissement
    //     vx *= -1;
    // }
    
    stepRight += 0.3;
    if (stepRight >= 9)
        stepRight -= 9;
}