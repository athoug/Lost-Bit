var pixel = {};

pixel.Boot = function(game) {};

pixel.Boot.prototype = {
    preload: function() {
        //loading the image assets
        this.load.image('splash', 'assets/images/SPLASHSCREEN.png');
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    },

    create: function() {

        this.stage.backgroundColor = '#cfcecc';
        //sets the maximum number of cursors/touch to one
        this.input.maxPointers = 1;
        //pasus the game is another windo opens whilst we're mid playing
		this.stage.disableVisibilityChange = false;
        //scales the stage to fit the screen makes sure nothing is croped out
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //sets the minimum width and height of prowser resize
		this.scale.minWidth = 480;
		this.scale.minHeight = 270;
        //centers the stage
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
        //forces Portrate mode in mobile devices
		this.stage.forceLandscape = true;
		this.scale.setScreenSize(true);

		this.input.addPointer();
        //invoking the preload state
        this.state.start('Preloader');
    }
};


