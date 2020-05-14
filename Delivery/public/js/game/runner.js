buffer = document.createElement("canvas").getContext("2d");
display = document.querySelector("canvas").getContext("2d");

//billy fait du 16*16px
var BILLY_SIZE = 16;

function Animation(frame_set, delay) {  
  	this.count = 0;
  	this.delay = delay;
  	this.frame = 0;
  	this.frame_index = 0;
  	this.frame_set = frame_set;
};

Animation.prototype = {
	change:function(frame_set, delay = 15) {
    	if (this.frame_set != frame_set) {
      		this.count = 0;
      		this.delay = delay;
      		this.frame_index = 0;
      		this.frame_set = frame_set;
      		this.frame = this.frame_set[this.frame_index];
    	}
	},

  	update:function() {
    	this.count ++;
    	if (this.count >= this.delay) {
    	  	this.count = 0;
    	  	this.frame_index = (this.frame_index == this.frame_set.length - 1) ? 0 : this.frame_index + 1;
    	  	this.frame = this.frame_set[this.frame_index];
    	}
  	}
};

controller = {
	left: { active:false, state:false },
	right: { active:false, state:false },
	up: { active:false, state:false },
	
	keyUpDown:function(event) {
	  // Get the physical state of the key being pressed. true = down false = up
		var key_state = (event.type == "keydown") ? true : false;
	  	switch(event.keyCode) {
			case 37:// gauche
		  		if (controller.left.state != key_state) controller.left.active = key_state;
		  			controller.left.state  = key_state;
				break;
			case 32: //up
		  		if (controller.up.state != key_state) controller.up.active = key_state;
		  			controller.up.state  = key_state;
				break;
			case 39:// droite
		  		if (controller.right.state != key_state) 
					controller.right.active = key_state;
					controller.right.state  = key_state;
			break;
	  	}
	}
};

player = { //Juste un rectangle avec un objet Animation
	animation:new Animation(),
	jumping:true,
	height:16,    
	width:16,
	x:0,          
	y:40 - 18,
	x_velocity:0, 
	y_velocity:0
};

//Sprite sheet
billy = {
	frame_sets:[[0, 1], [2, 3], [4, 5]],// immobile, gauche, droite
	image:new Image()
};

function loop (time_stamp) {
	if (controller.up.active && !player.jumping) {
	  	controller.up.active = false;
	  	player.jumping = true;
	  	player.y_velocity -= 2.5;
	}
	if (controller.left.active) {
	  	/* To change the animation, all you have to do is call animation.change. */
	  	player.animation.change(billy.frame_sets[2], 15);
	  	player.x_velocity -= 0.05;
	}
	if (controller.right.active) {
	  	player.animation.change(billy.frame_sets[1], 15);
	  	player.x_velocity += 0.05;
	}
	/* If you're just standing still, change the animation to standing still. */
	if (!controller.left.active && !controller.right.active) {
	  	player.animation.change(billy.frame_sets[0], 20);
	}
	player.y_velocity += 0.25;
	player.x += player.x_velocity;
	player.y += player.y_velocity;
	player.x_velocity *= 0.9;
	player.y_velocity *= 0.9;
	if (player.y + player.height > buffer.canvas.height - 2) {
	  	player.jumping = false;
	  	player.y = buffer.canvas.height - 2 - player.height;
	  	player.y_velocity = 0;
	}
	if (player.x + player.width < 0) {
	  	player.x = buffer.canvas.width;
	} else if (player.x > buffer.canvas.width) {
	  	player.x = - player.width;
	}
	player.animation.update();
	render();
	window.requestAnimationFrame(loop);
};

function render() {
	buffer.fillRect(0, 0, buffer.canvas.width, buffer.canvas.height);
	buffer.fillStyle = "#009900";
	
	buffer.drawImage(billy.image, player.animation.frame * BILLY_SIZE, 0, BILLY_SIZE, BILLY_SIZE, Math.floor(player.x), Math.floor(player.y), BILLY_SIZE, BILLY_SIZE);
	display.drawImage(buffer.canvas, 0, 0, buffer.canvas.width, buffer.canvas.height, 0, 0, display.canvas.width, display.canvas.height);
};

function resize() {
    display.canvas.width = document.documentElement.clientWidth - 32;
  	if (display.canvas.width > document.documentElement.clientHeight) {
    	display.canvas.width = document.documentElement.clientHeight;
  	}
  	display.canvas.height = display.canvas.width * 0.5;
  	display.imageSmoothingEnabled = false;
}

buffer.canvas.width = 160;
buffer.canvas.height = 80;
window.addEventListener("resize", resize);
window.addEventListener("keydown", controller.keyUpDown);
window.addEventListener("keyup", controller.keyUpDown);

resize();

window.requestAnimationFrame(loop);// game loop 
billy.image.src = "img/guy.png";
