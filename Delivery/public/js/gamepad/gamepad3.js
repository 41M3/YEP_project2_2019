/* global Phaser */

(function (Phaser) {
    'use strict';

    var sprite;
    var game = new Phaser.Game(1000, 250, Phaser.AUTO, 'phaser-example', {
//290, 115
        preload: function preload() {
            game.load.image('vjoy_base', 'js/gamepad/assets/base.png');
            game.load.image('vjoy_body', 'js/gamepad/assets/body.png');
            game.load.image('vjoy_cap', 'js/gamepad/assets/cap.png');
        },

        create: function create() {
            game.stage.backgroundColor = 'black';
            game.vjoy = game.plugins.add(Phaser.Plugin.VJoy);
            game.vjoy.inputEnable();
        },

        update: function update() {
            var cursors = game.vjoy.cursors;

            if (cursors.left) {
                clickLeft();
            } else if (cursors.right) {
                clickRight();
            }

            if (cursors.up) {
                clickUp();
            } else if (cursors.down) {
                clickDown();
            }
        }
    });

}.call(this, Phaser));
