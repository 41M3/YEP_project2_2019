(function() { "use strict";

  const TILE_SIZE = 16;
  const WORLD_HEIGHT = 144;
  const WORLD_WIDTH = 256;

  //// CLASSES ////

  var Animation = function(frame_set, delay) {

    this.count = 0;// Counts the number of game cycles since the last frame change.
    this.delay = delay;// The number of game cycles to wait until the next frame change.
    this.frame_value = frame_set[0];// The value in the sprite sheet of the sprite image / tile to display.
    this.frame_index = 0;// The frame's index in the current animation frame set.
    this.frame_set = frame_set;// The current animation frame set that holds sprite tile values.

  };

  Animation.prototype = {

    /* This changes the current animation frame set. For example, if the current
    set is [0, 1], and the new set is [2, 3], it changes the set to [2, 3]. It also
    sets the delay. */
    change:function(frame_set, delay = 15) {

      if (this.frame_set != frame_set) {// If the frame set is different:

        this.count = 0;// Reset the count.
        this.delay = delay;// Set the delay.
        this.frame_index = 0;// Start at the first frame in the new frame set.
        this.frame_set = frame_set;// Set the new frame set.
        this.frame_value = this.frame_set[this.frame_index];// Set the new frame value.

      }

    },

    /* Call this on each game cycle. */
    update:function() {

      this.count ++;// Keep track of how many cycles have passed since the last frame change.

      if (this.count >= this.delay) {// If enough cycles have passed, we change the frame.

        this.count = 0;// Reset the count.
        /* If the frame index is on the last value in the frame set, reset to 0.
        If the frame index is not on the last value, just add 1 to it. */
        this.frame_index = (this.frame_index == this.frame_set.length - 1) ? 0 : this.frame_index + 1;
        this.frame_value = this.frame_set[this.frame_index];// Change the current frame value.

      }

    }

  };

  /* A frame just keeps track of a physical position inside the tile sheet for blitting. */
  var Frame = function(x, y, width, height) {

    this.height = height;
    this.width  = width;
    this.x      = x;
    this.y      = y;

  };

  /* A Pool object manages objects. The objects array holds all objects that are
  currently in use, and the pool holds objects that are not in use. By storing objects
  that would otherwise be deleted, we can reuse them instead of creating totally new
  instances with the new operator. Recycling saves memory. Do it. */
  var Pool = function(object) {

    this.object = object;// The constructor of the object we are pooling.
    this.objects = [];// The array of objects in use.
    this.pool = [];// The array of objects not in use.

  };

  Pool.prototype = {

    /* Get an object from the pool or create a new object. Pool expects objects to
    have a few basic functions, like reset. */
    get:function(parameters) {

      if (this.pool.length != 0) {

        let object = this.pool.pop();
        object.reset(parameters);
        this.objects.push(object);

      } else {

        this.objects.push(new this.object(parameters.x, parameters.y));

      }

    },

    store:function(object) {

      let index = this.objects.indexOf(object);

      if (index != -1) {

        this.pool.push(this.objects.splice(index, 1)[0]);

      }

    },

    storeAll:function() {

      for (let index = this.objects.length - 1; index > -1; -- index) {

        this.pool.push(this.objects.pop());

      }

    }

  };

  var Meteor = function(x, y) {

    this.alive = true;// Meteor dies when it goes offscreen.
    this.animation = new Animation(display.tile_sheet.frame_sets[1], 8);
    this.grounded = false;
    this.smoke = false;// smoke values are used for spawning smoke particles.
    this.smoke_count = 0;
    this.smoke_delay = Math.floor(Math.random() * 10 + 5);
    this.height = Math.floor(Math.random() * 16 + 24); this.width = this.height;
    this.x = x; this.y = y - this.height * 0.5;
    let direction = Math.PI * 1.75 + Math.random() * Math.PI * 0.1;// The trajectory.
    this.x_velocity = Math.cos(direction) * 3; this.y_velocity = -Math.sin(direction) * 3;

  };

  