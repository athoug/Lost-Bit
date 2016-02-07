pixel.Boss = function(game){

    //build the boss world
    this.theBackground = null;
    this.bossPillarWorld = null;
    this.circleMovingBoss = null;

    //pillar coordinaates
    this.circleBossCoordinatesX = [109, 875, 875, 470, 41, 41];
    this.circleBossCoordinatesY = [575, 203, 168, 99, 58, 22];

    this.MovingcircleBossCoordinatesX = [342, 593, 165, 774.4];
    this.MovingcircleBossCoordinatesY = [525 + 70, 525 + 70, 321 + 70, 321 + 70];
    
    this.detailedBrickCoordinateX =[271, 579];
    this.detailedBrickCoordinateY =[179, 179];

    this.brickDetailedCoordinatesX = [211, 697];
    this.brickDetailedCoordinatesY = [246, 246];

    this.blackBrickCoordinatesX = [25, 740, 384];
    this.blackBrickCoordinatesY = [98, 98, 518];

    this.blackPillarCoordinateX = [726, 219, 668.5];
    this.blackPillarCoordinateY = [568, 99.7, 99.7];

    this.squareBoxCoordinateX = [262.6, 663];
    this.squareBoxCoordinateY = [503, 503];

    this.SideBrickLeftCoordinateX = [5, -81];
    this.SideBrickLeftCoordinateY = [475, 426];

    this.SideBrickRightCoordinateX = [717, 822];
    this.SideBrickRightCoordinateY = [475, 426];

    //this.glitchButtonCoordinateBossX = [854.8, 41];
   // this.glitchButtonCoordinateBossY = [89.4, 630.6];


    //The glitch buttons
    this.thebuttonsforGlitch = null;
    this.glitchButtonCoordinateBossX = [854.8, 41,60,80];
    this.glitchButtonCoordinateBossY = [630.6, 630.6, 630.6,630.6];
    this.GlitchTrigger = null;
    this.GlitchScreen = null;
    this.enteredTheglitchFunction = null;
    this.outOfGlitchFunction = null;

    //boss variables
    this.NPCboss = null;
    this.BossEmmeter = null;
    this.theemitterisOn = null;
    this.bossHealth = null;
	this.bossHealthMax=100;
    this.canthebosshitplayer = null;
    this.isthebossalive = null;
    this.theBlastKill = null;

    //player Charachter
    this.TheHero = null;
    this.HeroHealth = null;
    this.canPlayerMove = null;
    this.move = null;
    this.jump = null;
    this.playerFacing = null;
    this.AlivePlayer = null;
    this.playerEnergyBar = null;

    //pause Button
    this.thePauseButton = null;
    this.thePausePannel = null;
    this.thecontinuebossbutton = null;
    this.TheMainMenuBossButton = null;

    //the pasue trigger
    this.isPaused = null;
    this.TweenPause = null;

    //timeboard variable
    this.timeBossLevel = null;
    this.bosslevelFont = null;
    this.bosstimecounter = null;
    this.bosstimer = null;
    this.timeisup = null;
    this.intimeState = null;

    //the Gameover pannel
    this.GameOverPannel = null;
    this.backtomenugameoverbutton = null;
    this.restartTheGame = null;
    this.youwinPannelScreen = null;


    //bullets variabls
    this.bullet = null;
    this.nextShotAt = 0;
    this.bulletDellay = 600;
    this.bulletTrigger= null;

    //boss level Audio
    this.BossMainMusic = null;
    this.HeroJumpAudio = null;
    this.HeroLazerFire = null;
    this.TheGlitchMusicBoss = null;
    this.glitchSoundEffect = null;
    this.TheGameOverMusic = null;
    this.TheBossHitsAudio = null;
    this.bosshitAudio = null;
    this.playerhitBytheBossMusic = null;
    this.finalexplosionAudio = null;

	//HealthBar
	this.healthBar;
	this.initialHealthBarWidth;
    
	//Shake Screen
	this.shakeWorld = 0;
	this.shakeWorldMax = 20;
	this.shakeWorldTime = 0;
	this.shakeWorldTimeMax = 40;
};


pixel.Boss.prototype = {

create: function() {

        this.isPaused = false;
        this.bosstimer = 200;
        this.canPlayerMove = true;
        this.playerFacing = 'left';
        this.GlitchTrigger = false;
        this.timeisup = false;
        this.AlivePlayer = true;
        this.canthebosshitplayer = true;
        this.bulletTrigger = false;
        this.intimeState = false;
        this.isthebossalive = true;
        this.outOfGlitchFunction = true;
        this.enteredTheglitchFunction = false;


        //health bar for NPC and Hero
        this.bossHealth = 100;
        this.HeroHealth = 100;
		this.bossHealthMax=100;
        this.bosslevelFont = {font: "12px Arial", fill: "#fff", stroke: "#575957", strokeThickness: 2, align: "center"};
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.buildBossLevel();


        //adding time feature in game
        this.game.time.events.loop(Phaser.Timer.SECOND, this.updateBossTimer, this);


        //create Boss emmeter bulletes
        this.theemitterisOn = true;
        this.BossEmmeter = this.game.add.emitter(450, 160, 20);
        this.BossEmmeter.makeParticles('electricBall'/*, [0,1,2]*/);
        this.BossEmmeter.minParticleSpeed.setTo(-300, -300);
        this.BossEmmeter.maxParticleSpeed.setTo(300, 300);
        

        if (this.theemitterisOn === true && this.isthebossalive === true && this.isPaused === false){
        this.game.time.events.loop(4000, this.PlayemitterSound, this);}
        this.BossEmmeter.start(false, 4000, 15);

       

        //create boss Charachter NPC 
        this.NPCboss = this.add.sprite(480, 193, 'boss');
        console.log(this.NPCboss.position.x);
        this.NPCboss.enableBody = true;
        this.game.physics.arcade.enable(this.NPCboss);

        
        //this.NPCboss.body.bounce.y = 0.2;
        //this.NPCboss.body.gravity.y = 300;
        this.NPCboss.body.collideWorldBounds = true;
        this.NPCboss.body.immovable = true;
        this.NPCboss.anchor.setTo(0.5, 0.5);
        this.NPCboss.scale.setTo(0.9);

        this.NPCboss.animations.add('moving', [0,1,2,3,3,2,2,3,3,2,2,1,0, 1,2,3,4,5,6,6,5,5,6,6,5,5,4,4,3,2,1], 5, true);
        this.NPCboss.animations.play('moving');



        //create the hero 
        this.TheHero = this.add.sprite(0, 470, 'player');
        console.log(this.TheHero.x);
        this.TheHero.enableBody = true;
        this.game.physics.arcade.enable(this.TheHero);

        this.TheHero.body.bounce.y = 0.2;
        this.TheHero.body.gravity.y = 300;
        this.TheHero.body.collideWorldBounds = true;

        this.TheHero.anchor.setTo(0.5, 0.5);
        this.TheHero.scale.setTo(0.4);

        this.TheHero.animations.add('Theleft', [0,1,2], 10, true);
        this.TheHero.animations.add('Theright', [4,5,6], 10, true);

        
        //add time text and energy level
        this.bosstimecounter = this.add.text(110, 35, this.bosstimer, this.bosslevelFont);
        this.playerEnergyBar = this.add.text(110, 48, this.HeroHealth, this.bosslevelFont);


        //adding the buttons for glitch
        this.thebuttonsforGlitch = this.game.add.group();
        this.thebuttonsforGlitch.enableBody = true;
        this.thebuttonsforGlitch.physicsBodyType = Phaser.Physics.ARCADE;
        
        for (var i =0; i <2; i++){
            var button = this.add.sprite(this.glitchButtonCoordinateBossX[i], this.glitchButtonCoordinateBossY[i], 'glitch-button' , 0, this.thebuttonsforGlitch);

            }


         //adding the builet variables
         this.bullet = this.add.group();
         this.bullet.enableBody = true;
         this.bullet.physicsBodyType = Phaser.Physics.ARCADE;

         this.bullet.createMultiple(5, 'bullet');

        this.bullet.setAll('anchor.x', 0.5);
        this.bullet.setAll('anchor.y', 0.5);
       
        this.bullet.setAll('outOfBoundsKill', true);
        this.bullet.setAll('checkWorldBounds', true);

        //adding the game audio
         this.BossMainMusic = this.game.add.audio('bosslevelMusic', 0 , true);
         this.TheGlitchMusicBoss = this.game.add.audio('select');
         this.HeroJumpAudio = this.game.add.audio('jump');
         this.HeroLazerFire = this.game.add.audio('fireLzer');
         this.glitchSoundEffect = this.game.add.audio('glitchSound');
         this.TheGameOverMusic = this.game.add.audio('playerDeath');
         this.TheBossHitsAudio = this.game.add.audio('BossHitting');
         this.bosshitAudio = this.game.add.audio('BossHitSoundEffect');
         this.finalexplosionAudio = this.game.add.audio('explosionSoundEffect');
         this.playerhitBytheBossMusic = this.game.add.audio('PlayerHitByBossAudio');
         this.BossMainMusic.play('', 0, true);
         this.BossMainMusic.volume = 0.2;


		//HealthBar Image add
		 var healthBarBack = this.game.add.sprite(230,0,'healthBarBack');
		 this.healthBar = this.game.add.sprite(230,0,'healthbar');
		 this.initialHealthBarWidth=this.healthBar.width;
         
         this.move = this.input.keyboard.createCursorKeys();
         this.jump = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
},

buildBossLevel: function(){

        this.theBackground = this.add.sprite(0, 0, 'bossBackground');
        this.buildBossWorld();

        //the pause button variable
        this.thePauseButton = this.game.add.button(920, 45, 'pause', this.pauseBossGame, this, 2, 1, 0);
        this.thePauseButton.frame = 0;
        this.thePauseButton.anchor.setTo(0.5, 0.5);
        this.thePauseButton.scale.setTo(0.5);

        //timeboard variable creation
        this.timeBossLevel = this.add.sprite( 100 , 50, 'lifeBoard');
        this.timeBossLevel.anchor.setTo(0.5, 0.5);
        this.timeBossLevel.scale.setTo(0.7); 

},

buildBossWorld: function(){

       this.bossPillarWorld  = this.game.add.group();
       this.bossPillarWorld.enableBody = true;
       this.bossPillarWorld.physicsBodyType = Phaser.Physics.ARCADE;

        this.add.sprite( 164.7, 567.8,'boss6', 0, this.bossPillarWorld);
        this.add.sprite( 241.4, 348.4,'boss5', 0, this.bossPillarWorld);
        this.add.sprite( 205, 375,'boss4', 0, this.bossPillarWorld);

        for(var i =0; i < 6; i++){

             this.add.sprite( this.circleBossCoordinatesX[i], this.circleBossCoordinatesY[i],'boss11', 0, this.bossPillarWorld);
        }

        

        for(var i =0; i < 2; i++){

             this.add.sprite( this.detailedBrickCoordinateX[i], this.detailedBrickCoordinateY[i],'boss10', 0, this.bossPillarWorld);
        }

        for(var i =0; i < 2; i++){

             this.add.sprite( this.brickDetailedCoordinatesX[i], this.brickDetailedCoordinatesY[i],'boss9', 0, this.bossPillarWorld);
        }

        for(var i =0; i < 3; i++){

             this.add.sprite( this.blackBrickCoordinatesX[i], this.blackBrickCoordinatesY[i],'boss8', 0, this.bossPillarWorld);
        }

        for(var i =0; i < 3; i++){

             this.add.sprite( this.blackPillarCoordinateX[i], this.blackPillarCoordinateY[i],'boss7', 0, this.bossPillarWorld);
        }

        for(var i =0; i < 2; i++){

             this.add.sprite( this.squareBoxCoordinateX[i], this.squareBoxCoordinateY[i],'boss3', 0, this.bossPillarWorld);
        }

        for(var i =0; i < 2; i++){

             this.add.sprite( this.SideBrickLeftCoordinateX[i], this.SideBrickLeftCoordinateY[i],'boss2', 0, this.bossPillarWorld);
        }

        for(var i =0; i < 2; i++){

             this.add.sprite( this.SideBrickRightCoordinateX[i], this.SideBrickRightCoordinateY[i],'boss1', 0, this.bossPillarWorld);
        }
        
        
       this.bossPillarWorld.setAll('body.immovable', true);


       this.circleMovingBoss  = this.game.add.group();
       this.circleMovingBoss.enableBody = true;
       this.circleMovingBoss.physicsBodyType = Phaser.Physics.ARCADE;

       for(var i =0; i < 4 ; i++){

             this.add.sprite( this.MovingcircleBossCoordinatesX[i], this.MovingcircleBossCoordinatesY[i],'boss11', 0, this.circleMovingBoss);
        }

        this.TweenPause = this.game.add.tween(this.circleMovingBoss).to({y: this.circleMovingBoss.y - 100 }, 1500 + Math.random() * 3000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true); 
        this.circleMovingBoss.setAll('body.immovable', true);
},



pauseBossGame: function(){

        if(this.isPaused === false){

            this.isPaused = true;
            this.NPCboss.animations.stop();
            this.TweenPause.pause();
            this.BossMainMusic.stop();
            this.BossEmmeter.on = false;
            this.canthebosshitplayer = false;
            this.BossEmmeter.alpha = 0;
            this.theemitterisOn = false;
            this.TheHero.allowGravity = false;
            this.TheHero.body.gravity.y = 0;
            this.TheHero.body.gravity.x = 0;
            this.TheHero.body.velocity.y = 0;
            this.TheHero.body.velocity.x = 0;
            this.TheHero.animations.stop();
            
            this.show();
        }
},


playBossGame: function(){

        this.hide();
        this.NPCboss.animations.play('moving');
        this.TweenPause.resume();
        this.BossEmmeter.alpha = 1;
        this.BossEmmeter.on = true;
        this.theemitterisOn = true;
        this.canthebosshitplayer = true;
        this.TheHero.allowGravity = true;
        this.TheHero.body.gravity.y = 300;
        this.BossMainMusic.play();
},

PlayemitterSound: function(){
        if(this.isthebossalive === true && this.bossHealth > 0 && this.AlivePlayer === true && this.isPaused === false){
        this.TheBossHitsAudio.play();
        this.TheBossHitsAudio.volume = 0.2;}
},


show: function(){

        //Add the Buttons
        this.thePausePannel = this.add.sprite(1000, 0, 'pauseScreen');


        this.thecontinuebossbutton = this.game.add.button(1000, 385, 'continue', function(){
           
            this.isPaused = false;  
            this.playBossGame();

            }, this,2,0,1);
        this.thecontinuebossbutton.scale.setTo(0.6);


        this.TheMainMenuBossButton = this.game.add.button(1000, 450, 'back', function(){

            this.restetEverything();
            this.game.state.start('MainMenu');

        }, this,2,0,1 );
        this.TheMainMenuBossButton.scale.setTo(0.6);

        //Add the Tween
        this.game.add.tween(this.thePausePannel).to({x:447}, 1000, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.thecontinuebossbutton).to({x:690}, 1000, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.TheMainMenuBossButton).to({x:690}, 1000, Phaser.Easing.Bounce.Out, true);

},


hide: function(){

        this.game.add.tween(this.thePausePannel).to({x: 1000}, 500, Phaser.Easing.Linear.NONE, true);
        this.game.add.tween(this.thecontinuebossbutton).to({x: 1000}, 500, Phaser.Easing.Linear.NONE, true);
        this.game.add.tween(this.TheMainMenuBossButton).to({x: 1000}, 500, Phaser.Easing.Linear.NONE, true);

},


updateBossTimer: function(){

        if(this.AlivePlayer === true){

            if(this.isPaused === false){

                if(this.bosstimer > 0){

                    this.bosstimer -= 1;
                    this.bosstimecounter.text = this.bosstimer;
                }

            
                if( this.bosstimer === 0 && this.intimeState === false){
                    this.timeisup = true;
                        
                }

                if(this.timeisup === true){
                    this.timeisup = false;
                    this.intimeState = true;
                    this.YouLose();
                }
            }
        }
},

collidewiththeboss: function(player, enemy){

        if(this.isPaused === false) {
            enemy.kill();
            if(this.canthebosshitplayer === true){

                this.playerhitBytheBossMusic.play();
                this.playerhitBytheBossMusic.volume = 0.2;

				this.shakeWorldTime = this.shakeWorldTimeMax;
				
                if(this.HeroHealth > 0){
                    this.HeroHealth -= 5;
                    this.playerEnergyBar.text = this.HeroHealth;
                    console.log(this.HeroHealth);
                    
                }

                if(this.HeroHealth < 0 || this.HeroHealth == 0){
                    this.canthebosshitplayer = false;
                    this.AlivePlayer = false;
                    this.YouLose();
                }
				
            }
        }

},
ShakeScreen: function(){
	if (this.shakeWorldTime > 0) {
	    var magnitude = ( this.shakeWorldTime / this.shakeWorldTimeMax ) * this.shakeWorldMax;
	    var rand1 = this.game.rnd.integerInRange(-magnitude,magnitude);
	    var rand2 = this.game.rnd.integerInRange(-magnitude,magnitude);
		this.game.world.setBounds(rand1, rand2, this.game.width + rand1, this.game.height + rand2);
		this.shakeWorldTime--;
		if (this.shakeWorldTime == 0) {
			this.game.world.setBounds(0, 0, this.game.width, this.game.height); // normalize after shake?
		}
	}
},
CheckIfHeroAlive: function(){

        if(this.HeroHealth < 1){
            this.AlivePlayer = false;
            this.YouLose();
            
            }

        if (this.isthebossalive == true){

          if(this.bossHealth < 1 || this.bossHealth == 0){
            this.isthebossalive = false;
            this.YouKilledTheBoss();
          }
        }
},

YouKilledTheBoss: function(){
        this.BossMainMusic.stop();

        //create the kiler blast
        this.theBlastKill = this.add.sprite(480, 300, 'blastKill');
        this.theBlastKill.anchor.setTo(0.5, 0.5);
        this.theBlastKill.scale.setTo(3);
        this.theBlastKill.animations.add('theBigBlast');

        this.theBlastKill.animations.play('theBigBlast', 6, false, true);
        this.finalexplosionAudio.play();
        this.TheHero.animations.stop();
        this.NPCboss.kill();
        this.BossEmmeter.on = false;
        this.BossEmmeter.alpha = 0;
        this.theemitterisOn = false;
        this.TweenPause.pause();
        this.canPlayerMove = false;
        this.isthebossalive = false;

        //add explosion 

        this.time.events.add( 3000, this.YouWin, this);
        
},


YouLose: function(){

        //add the audio for losing and stop main
        this.TheGameOverMusic.play();
        this.TheGameOverMusic.volume = 0.2;
        this.BossMainMusic.stop();

        //add the tween and screen of game over page
        this.GameOverPannel = this.add.sprite(0, 1000, 'gameoverplayer');


        this.restartTheGame = this.game.add.button(500, 1000, 'restart', function(){

            this.restetEverything();

            this.game.state.start('Boss');

        }, this, 2,1,0 );
        this.restartTheGame.scale.setTo(0.5);

        this.backtomenugameoverbutton = this.game.add.button(420, 1000, 'backtoMainTheMenu', function(){

            this.restetEverything();

            this.game.state.start('MainMenu');

        }, this,2,1,0 );
        this.backtomenugameoverbutton.scale.setTo(0.5);

        //add their tween 
        this.game.add.tween(this.GameOverPannel).to({y:0}, 1000, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.restartTheGame).to({y:400}, 1000, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.backtomenugameoverbutton).to({y:400}, 1000, Phaser.Easing.Bounce.Out, true);
},


YouWin: function(){

        // this.game.state.start('GameWin');
        
        this.youwinPannelScreen = this.add.sprite(0, 1000, 'YouJustWonTheGame');
        this.game.add.tween(this.youwinPannelScreen).to({y:0}, 1000, Phaser.Easing.Bounce.Out, true);
},


CreateTheGlitch: function(player, button){

        if(this.GlitchTrigger === false && this.outOfGlitchFunction === true){

            this.BossMainMusic.stop();
            this.TheGlitchMusicBoss.play();
            this.TheGlitchMusicBoss.volume = 0.1;

            //set triggers
            this.GlitchTrigger = true;
            this.bulletTrigger = true;
            this.outOfGlitchFunction = false;
            this.enteredTheglitchFunction = true;
            this.canthebosshitplayer = false;
            button.frame = 1;
            this.NPCboss.animations.stop();
            this.BossEmmeter.on = false;
            this.BossEmmeter.alpha = 0;
            this.TweenPause.pause();
            this.canPlayerMove = false;

            this.playtheGlitchFunction();

            player.paused = true;

            this.time.events.add( 2000, this.updateTheGlitchScreen, this);
        }

         button.frame = 0
},


playtheGlitchFunction: function(){

        //add the sound of teh glitch
        this.glitchSoundEffect.play();
        this.glitchSoundEffect.volume = 0.1;
        this.GlitchScreen = this.add.sprite( 0 , 0, 'theGlitch');
        this.GlitchScreen.animations.alpha = 0.1;
        this.GlitchScreen.animations.add('Glitchenis', [0,1,2], 6, true);
        this.GlitchScreen.play('Glitchenis');   
},


updateTheGlitchScreen: function(){

            
            this.GlitchScreen.alpha = 0;
            this.GlitchScreen.animations.stop();
            this.TweenPause.resume();
            this.NPCboss.animations.play('moving');
            this.BossEmmeter.on = true;
            this.BossEmmeter.alpha = 1;
            this.BossMainMusic.play();
            this.BossMainMusic.volume = 0.2;
            this.canPlayerMove = true;
            this.canthebosshitplayer = true;
            this.outOfGlitchFunction = true;

},

fireBullet: function(){

    if(this.nextShotAt < this.time.now){
      
            // Find the first dead bullet in the pool
            var bullet = this.bullet.getFirstExists(false);

            if(bullet){
            // Reset (revive) the sprite and place it in a new location
            this.HeroLazerFire.play();
            this.HeroLazerFire.volume = 0.1;
            bullet.reset( this.TheHero.x , this.TheHero.y);

            if(this.playerFacing === "right"){
                bullet.body.velocity.x = +300;
            }

            if(this.playerFacing === "left"){
                bullet.body.velocity.x = -300;
            }

            this.nextShotAt = this.time.now + this.bulletDellay;
            }  
    }

},

killingTheBoss: function(boss, bullet){

        this.bosshitAudio.play();
        this.bosshitAudio.volume = 0.3;
        bullet.kill();
		
		
        if(this.bossHealth > 0){
			
            this.bossHealth -= 2;
			this.healthBar.width=(this.bossHealth / this.bossHealthMax) * this.initialHealthBarWidth;
            console.log(this.bossHealth);
        }

},

updatefireBullet: function(){

            this.GlitchTrigger = false;
            this.bulletTrigger = false;

},


restetEverything: function(){

            //The glitch buttons
            this.thebuttonsforGlitch = null;
            this.GlitchTrigger = false;
            this.GlitchScreen = null;
            this.enteredTheglitchFunction = false;
            this.outOfGlitchFunction = true;

            //boss variables
            this.NPCboss = null;
            this.BossEmmeter = null;
            this.theemitterisOn = null;
            this.bossHealth = 250;
            this.canthebosshitplayer = true;
            this.isthebossalive = true;
            this.theBlastKill = null;

            //player Charachter
            this.TheHero = null;
            this.HeroHealth = 100;
            this.canPlayerMove = true;
            this.move = null;
            this.jump = null;
            this.playerFacing = 'left';
            this.AlivePlayer = true;
            this.playerEnergyBar = null;

            //pause Button
            this.thePauseButton = null;
            this.thePausePannel = null;
            this.thecontinuebossbutton = null;
            this.TheMainMenuBossButton = null;

            //the pasue trigger
            this.isPaused = false;
            this.TweenPause = null;

            //timeboard variable
            this.timeBossLevel = null;
            this.bosslevelFont = null;
            this.bosstimecounter = null;
            this.bosstimer = 180;
            this.timeisup = false;
            this.intimeState = false;

            //the Gameover pannel
            this.GameOverPannel = null;
            this.backtomenugameoverbutton = null;
            this.restartTheGame = null;
            this.youwinPannelScreen = null;


            //bullets variabls
            this.bullet = null;
            this.nextShotAt = 0;
            this.bulletDellay = 450;
            this.bulletTrigger = false;

            //boss level Audio
            this.BossMainMusic = null;
            this.HeroJumpAudio = null;
            this.HeroLazerFire = null;
            this.TheGlitchMusicBoss = null;
            this.glitchSoundEffect = null;
            this.TheGameOverMusic = null;
            this.TheBossHitsAudio = null;
            this.bosshitAudio = null;
            this.playerhitBytheBossMusic = null;
            this.finalexplosionAudio = null;
        
        
 },


update: function(){
		this.ShakeScreen();
        if(this.NPCboss.x > 480 || this.NPCboss.x < 480){
            this.NPCboss.x = 480;
        }

        if(this.NPCboss.y > 193 || this.NPCboss.y < 193){
            this.NPCboss.y = 193;
        }

        if (this.timeisup === false){
            this.game.physics.arcade.collide(this.NPCboss, this.bossPillarWorld);
            this.game.physics.arcade.collide(this.TheHero, this.bossPillarWorld);
            this.game.physics.arcade.collide(this.TheHero, this.circleMovingBoss);
            this.game.physics.arcade.collide(this.TheHero, this.NPCboss);

            
            if(this.AlivePlayer === true){
                this.CheckIfHeroAlive();
            }


            if (this.isPaused === false){

                //move the hero
                this.TheHero.body.velocity.x = 0;

                if(this.canPlayerMove === true && this.AlivePlayer === true){

                        if(this.move.left.isDown){
                        this.TheHero.body.velocity.x = -100;
                        this.TheHero.animations.play('Theleft');
                        this.playerFacing = "left";
                    }

                    else if(this.move.right.isDown){
                        this.TheHero.body.velocity.x = 100;
                        this.TheHero.animations.play('Theright');
                        this.playerFacing = "right";
                    }

                    else{
                        this.TheHero.animations.stop();
                        if(this.playerFacing === "right"){
                             this.TheHero.frame = 4;
                        }

                        if(this.playerFacing === "left"){
                             this.TheHero.frame = 2;
                        }
                    }

                    if(this.move.down.isDown){

                        if(this.bulletTrigger === true){
                            this.fireBullet();

                            //start key timer
                            if(this.enteredTheglitchFunction === true ){
                                this.enteredTheglitchFunction = false;
                              this.time.events.add( 10000, this.updatefireBullet, this); }
                        }
                        
                    }

                    if(this.jump.isDown && (this.TheHero.body.onFloor() || this.TheHero.body.touching.down)){
                        this.HeroJumpAudio.play();
                        this.HeroJumpAudio.volume = 0.1;
                        this.TheHero.animations.stop();
                        this.TheHero.body.velocity.y = -250;
                    }
                }

                //collison detection
                this.game.physics.arcade.collide(this.TheHero, this.BossEmmeter, this.collidewiththeboss, null, this);
                this.game.physics.arcade.collide(this.NPCboss, this.bullet, this.killingTheBoss, null, this);
                this.game.physics.arcade.overlap(this.TheHero, this.thebuttonsforGlitch, this.CreateTheGlitch, null, this); 
            }
        }   

}


};