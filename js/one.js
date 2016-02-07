pixel.one = function(game){

    //the world variables
   this.backgroundone = null;

   //the player variables
   this.theprotaginest = null;
   this.cursor;
   this.playerMinAngle = -20;
   this.playerMaxAngle = 20;
   this.playerAlive = true;
   this.enemycanhit = true;


    //the Gameover pannel
    this.GameOverPannel = null;
    this.backtomenugameoverbutton = null;
    this.restartTheGame = null;
    this.youwinPannelScreen = null;

    //enemy variables
    this.enemyRate = 500;
    this.enemyTimer = 0;

    //audio
    this.jetSound = null ;
    this.gameMusic = null;
}

pixel.one.prototype = {

    create: function() {

        
        //build the world assetc
        this.buildWorldOne();

         //Set the games physics
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 400;


        //add the player
        this.theprotaginest = this.add.sprite(200, this.game.height/2, 'flyingPixel');
        this.theprotaginest.anchor.setTo(0.5);
        this.theprotaginest.scale.setTo(0.6);

        this.theprotaginest.animations.add('fly', [0,1]);
        this.theprotaginest.animations.play('fly', 8, true);

        this.game.physics.arcade.enableBody(this.theprotaginest);
        this.theprotaginest.body.collideWorldBounds = true;
        this.theprotaginest.body.bounce.set(0.25);

        //add enemy assets
        this.enemies = this.game.add.group();

        //add player input
         this.cursor = this.input.keyboard.createCursorKeys();

         //add level audio
         this.jetSound = this.game.add.audio('rocket');
         this.gameMusic = this.game.add.audio('leveloneflingpixelmusic');
         this.gameMusic.play('', 0, true);
         this.gameMusic.volume = 0.2;

         //trigger time event
         this.game.time.events.add(4000, this.Movetonextlevel, this);
        
    },

Movetonextlevel: function(){
    if(this.playerAlive === true){
        this.enemycanhit = false;
        this.theprotaginest.body.velocity.x += 200;
        this.theprotaginest.body.allowGravity = false;
        this.theprotaginest.y = this.game.height/2;
        this.enemies.destroy();
        this.resettheonevariables();
        this.game.time.events.add(4000, this.level2, this);
        
       
    }
},

level2: function(){
    this.state.start('LevelOneStory');
},

    
buildWorldOne: function(){
    //add the scrolling background
        this.backgroundone =  this.game.add.tileSprite(0, 0, this.game.width, 640, 'oneBGScroll');
        this.backgroundone.autoScroll(-120, 0);
        

        //the pause button variable
        this.thePauseButton = this.game.add.button(920, 45, 'pause', this.pauseone, this, 1, 2,  0);
        this.thePauseButton.frame = 0;
        this.thePauseButton.anchor.setTo(0.5, 0.5);
        this.thePauseButton.scale.setTo(0.5);

},





resettheonevariables: function(){

    //the world variables
   this.backgroundone = null;

  //the player variables
   this.theprotaginest = null;
   this.cursor;
   this.playerMinAngle = -20;
   this.playerMaxAngle = 20;
   this.playerAlive = true;
   this.enemycanhit = true;

   //pause Button
    this.thePauseButton = null;
    this.thePausePannel = null;
    this.thecontinuebossbutton = null;
    this.TheMainMenuBossButton = null;

    //the pasue trigger
    this.isPaused = false;
    this.TweenPause = null;

    //the Gameover pannel
    this.GameOverPannel = null;
    this.backtomenugameoverbutton = null;
    this.restartTheGame = null;
    this.youwinPannelScreen = null;

    //enemy variables
    this.enemyRate = 500;
    this.enemyTimer = 0;

    this.enemyTimer = 0;
    this.playerEnergyTimer = 0;

    //audio
    this.jetSound = null ;
    this.gameMusic = null;

},

createEnemy: function() {
    var x = this.game.width;
    var y = this.game.rnd.integerInRange(50, this.game.world.height);

    var enemy = this.enemies.getFirstExists(false);
    if(!enemy) {
      enemy = new Enemy(this.game, 0, 0);
      this.enemies.add(enemy);
    }
    enemy.reset(x, y);
    enemy.revive();
  },

enemyHit: function(player, enemy) {

    if(this.enemycanhit === true){
    player.kill();
    enemy.kill();
    this.playerAlive = false;
    //this.deathSound.play();
    //this.gameMusic.stop();
    this.backgroundone.stopScroll();
    this.enemies.setAll('body.velocity.x', 0);

    this.enemyTimer = Number.MAX_VALUE;}
    
 ;

  },


update: function(){


            //player movment chacks
   
        if(this.cursor.up.isDown) {
          this.theprotaginest.body.velocity.y -= 25;
          if(!this.jetSound.isPlaying) {
                this.jetSound.play('', 0, true, 0.5);
                this.jetSound.volume = 0.3;}
        }else {
            this.jetSound.stop();}

        if( this.theprotaginest.body.velocity.y < 0 || this.cursor.up.isDown) {
          if(this.theprotaginest.angle > 0) {
            this.theprotaginest.angle = 0;
          }

            if(this.theprotaginest.angle > this.playerMinAngle) {
                this.theprotaginest.angle -= 0.5;
              }
        } else if(this.theprotaginest.body.velocity.y >=0 && !this.cursor.up.isDown) {
          if(this.theprotaginest.angle < this.playerMaxAngle) {
            this.theprotaginest.angle += 0.5;

                }
            }


            if(this.enemyTimer < this.game.time.now) {
          this.createEnemy();
          this.enemyTimer = this.game.time.now + this.enemyRate;
        }

        this.game.physics.arcade.overlap(this.theprotaginest, this.enemies, this.enemyHit, null, this);
    }

    

};
