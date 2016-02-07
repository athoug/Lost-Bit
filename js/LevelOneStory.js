pixel.LevelOneStory = function(game){
this.BG == null;

this.sean1 = null;
this.sean2 = null;
this.sean3 = null;
this.sean4 = null;
this.sean5 = null;
this.sean6 = null;
this.sean7 = null;
this.sean8 = null;
this.sean9 = null;
this.sean10 = null;
this.sean11 = null;
this.levelonestorymusic = null;
this.skip = null;

};

pixel.LevelOneStory.prototype = {

	create: function(){

		//music asset
		this.levelonestorymusic = this.game.add.audio('levelonestorymusic', 0 , true);
        this.levelonestorymusic.play('', 0, true);
        this.levelonestorymusic.volume = 0.05;

		this.BG = this.add.image(0, 0, 'winbg');
        this.BG.inputEnabled = true;

        this.sean2 = this.add.image(970, 0, 'pixelspeak1');
        this.sean3 = this.add.image(-960, 0, 'WoriorSpeek2');
		this.sean4 = this.add.image(0, 0, 'WoriorSpeek3');
		this.sean4.alpha = 0;
		this.sean5 = this.add.image(0, 0, 'WoriorSpeek4');
		this.sean5.alpha = 0;
		this.sean6 = this.add.image(970, 0, 'pixelspeak2');
		this.sean7 = this.add.image(-960, 0, 'WoriorSpeek5');
		this.sean8 = this.add.image(0, 0, 'WoriorSpeek6');
		this.sean8.alpha = 0;
		this.sean9 = this.add.image(0, 0, 'WoriorSpeek7');
		this.sean9.alpha = 0;
		this.sean10 = this.add.image(970, 0, 'pixelspeak3');
		this.sean11 = this.add.image(-960, 0, 'WoriorSpeek8');


		this.sean1 = this.add.image(-960, 0, 'WoriorSpeek1');
		this.game.add.tween(this.sean1).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		 //Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel ,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 5000, this.seantwo, this);


	},

	seantwo: function(){

		this.game.add.tween(this.sean1).to({x:-960}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.sean2).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel ,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 5000, this.seanThree, this);

	},

	seanThree: function(){
		this.game.add.tween(this.sean2).to({x:970}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.sean3).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel ,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 7000, this.seanFour, this);
	},

	seanFour: function(){
		
		this.game.add.tween(this.sean4).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel ,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 10000, this.seanFive, this);
	},

	seanFive: function(){

		this.game.add.tween(this.sean5).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 10000, this.seanSix, this);
	},

	seanSix: function(){
		this.game.add.tween(this.sean5).to({x:-960}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.sean6).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 7000, this.seanSeven, this);
		
	},

	seanSeven: function(){
		this.game.add.tween(this.sean6).to({x:970}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.sean7).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 7000, this.seanEight, this);
		
	},

	seanEight: function(){
		this.game.add.tween(this.sean8).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);
		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel ,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 10000, this.seanNine, this);
		
	},

	seanNine: function(){
		this.game.add.tween(this.sean9).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel ,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 10000, this.seanTen, this);
		
	},

	seanTen: function(){
		this.game.add.tween(this.sean9).to({x:-960}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.sean10).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', this.StartLevel ,this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 5000, this.seanEleven, this);
		
	},

	seanEleven: function(){
		this.game.add.tween(this.sean10).to({x:970}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.sean11).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip',  this.StartLevel, this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 6000, this.StartLevel, this);
		
	},



	StartLevel: function(){
		this.levelonestorymusic.stop();
		this.game.state.start('LevelOne');
	}
};