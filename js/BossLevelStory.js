pixel.BossLevelStory = function(game){
	this.BossBG = null;
	this.Bosssean2 = null;
	this.Bosssean3 = null;
	this.Bosssean4 = null;
	this.Bosssean5 = null;
	this.Bosssean6 = null;
	this.Bosssean7 = null;
	this.Bosssean8 = null;
	this.finalstorysound = null;
	this.skip = null;
},

pixel.BossLevelStory.prototype = {

	create: function(){

		this.finalstorysound = this.game.add.audio('thefinalstorymusic', 0 , true);
        this.finalstorysound.play('', 0, true);
        this.finalstorysound.volume = 0.1;

		this.BossBG = this.add.image(0, 0, 'winbg');
        this.BossBG.inputEnabled = true;

        this.Bosssean2 = this.add.image(970, 0, 'pixelboss1');
        this.Bosssean3 = this.add.image(-960, 0, 'bossWoeeior2');
        this.Bosssean4 = this.add.image(0, 0, 'bossWoeeior3');
		this.Bosssean4.alpha = 0;
		this.Bosssean5 = this.add.image(0, 0, 'bossWoeeior4');
		this.Bosssean5.alpha = 0;
		this.Bosssean6 = this.add.image(970, 0, 'pixelboss2');
       	this.Bosssean7 = this.add.image(-960, 0, 'bossWoeeior5');
       	this.Bosssean8 = this.add.image(970, 0, 'pixelboss3');


        this.Bosssean1 = this.add.image(-960, 0, 'bossWoeeior1');
		this.game.add.tween(this.Bosssean1).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		 //Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', function(){ this.finalstorysound.stop(); this.state.start('Boss');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 7000, this.two, this);
	},

	two: function(){
		this.game.add.tween(this.Bosssean1).to({x:-960}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.Bosssean2).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		 //Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', function(){ this.finalstorysound.stop(); this.state.start('Boss');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 5000, this.three, this);

	},

	three: function(){
		this.game.add.tween(this.Bosssean2).to({x:970}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.Bosssean3).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', function(){ this.finalstorysound.stop(); this.state.start('Boss');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 10000, this.four, this);
	},

	four: function(){
		this.game.add.tween(this.Bosssean4).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', function(){ this.finalstorysound.stop(); this.state.start('Boss');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 10000, this.five, this);
	},

	five: function(){
		this.game.add.tween(this.Bosssean5).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', function(){ this.finalstorysound.stop(); this.state.start('Boss');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 10000, this.six, this);
	},
	
	six: function(){
		this.game.add.tween(this.Bosssean5).to({x:-960}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.Bosssean6).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', function(){ this.finalstorysound.stop(); this.state.start('Boss');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 5000, this.seven, this);
	},

	seven: function(){
		this.game.add.tween(this.Bosssean6).to({x:970}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.Bosssean7).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', function(){ this.finalstorysound.stop(); this.state.start('Boss');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 5000, this.eight, this);
	},

	eight: function(){
		this.game.add.tween(this.Bosssean7).to({x:-960}, 800, Phaser.Easing.Linear.None, true);
		this.game.add.tween(this.Bosssean8).to({x:0}, 800, Phaser.Easing.Linear.None, true);

		//Instructions Page
         this.skip = this.add.button( 50, 24 , 'skip', function(){ 
         	this.finalstorysound.stop();
         	this.state.start('Boss');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

		this.game.time.events.add( 4000, this.finalLevelStart, this);

	},

	finalLevelStart: function(){
		this.finalstorysound.stop();
		this.game.state.start('Boss');
	}
};