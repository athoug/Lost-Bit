pixel.Levelone=function(e){this.backgroundone=null,this.theprotaginest=null,this.cursor,this.playerMinAngle=-20,this.playerMaxAngle=20,this.playerAlive=!0,this.enemycanhit=!0,this.pauseButtonLevel=null,this.pauseScreen=null,this.continuelevelbtn=null,this.returntomainbtn=null,this.isTheLevelPaused=!1,this.TweenPauseElement=null,this.GameOverPannel=null,this.backtomenugameoverbutton=null,this.restartTheGame=null,this.youwinPannelScreen=null,this.enemyRate=500,this.enemyTimer=0,this.TheEnemies=null,this.didwinlevel=!1,this.LeveloneUSB=null,this.theLevelTime=60,this.Thetimeboard=null,this.ThetimeText=null,this.ThefontStyle={font:"14px Arial",fill:"#fff",stroke:"#575957",strokeThickness:3,align:"center"},this.timefinished=!1,this.protagenisthealth=4,this.theemptyHeart=null,this.theFullhealth=null,this.thecountHealth=3,this.levelOneInstructions=null,this.closelvl1btn=null,this.jetSound=null,this.gameMusic=null,this.iwon=null,this.theplayerHitSound=null,this.playcount=1},pixel.Levelone.prototype={create:function(){this.protagenisthealth=4,this.thecountHealth=3,this.buildWorldOne(),this.game.physics.startSystem(Phaser.Physics.ARCADE),this.game.physics.arcade.gravity.y=400,this.theprotaginest=this.add.sprite(240,this.game.height/2,"flyingPixel"),this.theprotaginest.anchor.setTo(.5),this.theprotaginest.scale.setTo(.6),this.theprotaginest.animations.add("fly",[0,1]),this.theprotaginest.animations.play("fly",8,!0),this.game.physics.enable(this.theprotaginest,Phaser.Physics.ARCADE),this.theprotaginest.body.collideWorldBounds=!0,this.theprotaginest.body.bounce.set(.25),this.thePauseButton=this.game.add.button(920,45,"pause",this.pauseone,this,1,2,0),this.thePauseButton.frame=0,this.thePauseButton.anchor.setTo(.5,.5),this.thePauseButton.scale.setTo(.5),this.cursor=this.input.keyboard.createCursorKeys(),this.LeveloneUSB=this.add.sprite(800,this.game.height/2,"OneUsb"),this.game.physics.arcade.enable(this.LeveloneUSB),this.LeveloneUSB.anchor.setTo(.5,.5),this.LeveloneUSB.scale.setTo(.3),this.LeveloneUSB.body.gravity=!1,this.LeveloneUSB.alpha=0,this.jetSound=this.game.add.audio("rocket"),this.theplayerHitSound=this.game.add.audio("PlayerHitByBossAudio"),this.gameMusic=this.game.add.audio("leveloneflingpixelmusic",0,!0),this.gameMusic.play("",0,!0),this.gameMusic.volume=.25,this.playerDeathSound=this.game.add.audio("playerDeath"),this.iwon=this.game.add.audio("getUSB"),this.iwon.loop=!1,this.enemycanhit=!1,this.game.time.events.add(500,this.levelOneGameInstruction,this),this.game.time.events.loop(Phaser.Timer.SECOND,this.updateLevelTimer,this)},levelOneGameInstruction:function(){this.levelOneInstructions=this.game.add.sprite(80,50,"levelOneInstructions"),this.closelvl1btn=this.game.add.button(110,80,"close",this.startLevelOneGame,this,2,1,0),this.closelvl1btn.anchor.setTo(.5,.5),this.closelvl1btn.scale.setTo(.5),this.isTheLevelPaused=!0},startLevelOneGame:function(){this.enemycanhit=!0,this.levelOneInstructions.kill(),this.closelvl1btn.kill(),this.isTheLevelPaused=!1},updateLevelTimer:function(){this.isTheLevelPaused===!1&&this.theLevelTime>0&&(this.theLevelTime-=1,playerScore+=1,this.ThetimeText.text=this.theLevelTime),0===this.theLevelTime&&(this.LeveloneUSB.y=this.theprotaginest.y,this.LeveloneUSB.alpha=1,this.ThetimeText.text=0,this.timefinished=!0,this.didwinlevel=!0,this.enemycanhit=!1,this.TheEnemies.destroy(),this.gameMusic.stop(),1===this.playcount&&this.iwon.play(),this.playcount++,this.theprotaginest.body.velocity.x=250,this.theprotaginest.body.allowGravity=!1,this.theprotaginest.body.collideWorldBounds=!1,this.game.add.tween(this.theprotaginest).from({y:this.theprotaginest.y},2e3,Phaser.Easing.Bounce.Out,!0),this.game.time.events.add(2800,this.Movetonextlevel,this))},Movetonextlevel:function(){this.playerAlive===!0&&(this.didwinlevel=!0,this.ResetTheGame(),console.log("score "+playerScore),this.level2())},level2:function(){this.ResetTheGame(),this.state.start("LevelOneStory")},buildWorldOne:function(){this.backgroundone=this.game.add.tileSprite(0,0,this.game.width,640,"oneBGScroll"),this.backgroundone.autoScroll(-120,0),this.TheEnemies=this.game.add.group(),this.Thetimeboard=this.add.sprite(100,50,"timeBoard"),this.Thetimeboard.anchor.setTo(.5,.5),this.Thetimeboard.scale.setTo(.6),this.ThetimeText=this.add.text(95,40,this.theLevelTime,this.ThefontStyle);var e=0,t=0;this.theemptyHeart=this.game.add.group();for(var i=0;4>i;i++){var s=this.add.sprite(200+e,40,"emptyHeart",0,this.theemptyHeart);s.scale.setTo(.4),e+=30}this.theFullhealth=this.game.add.group();for(var i=0;4>i;i++){var s=this.add.sprite(200+t,40,"fullHeart",0,this.theFullhealth);s.scale.setTo(.4),t+=30}},createEnemy:function(){var e=this.game.width,t=this.game.rnd.integerInRange(50,this.game.world.height),i=this.TheEnemies.getFirstExists(!1);i||(i=new Enemy(this.game,0,0),this.TheEnemies.add(i)),i.reset(e,t),i.revive()},enemyHit:function(e,t){this.enemycanhit===!0&&(this.protagenisthealth--,t.kill(),this.protagenisthealth<=0&&(this.theprotaginest.kill(),this.playerAlive=!1,this.backgroundone.stopScroll(),this.TheEnemies.setAll("body.velocity.x",0),this.enemyTimer=Number.MAX_VALUE,this.EndlevelOne()),this.protagenisthealth>0&&(this.theplayerHitSound.play(),this.theplayerHitSound.volume=.2,this.theFullhealth.getAt(this.thecountHealth).alpha=0,this.thecountHealth--))},EndlevelOne:function(){this.gameMusic.stop(),this.playerDeathSound.play("",0,1,!1,!1),this.playerDeathSound.volume=.4,this.loseScreen=this.add.sprite(0,640,"YouLoseLevel1"),this.loseScreen.fixedToCamera=!0,this.loseScreen.cameraOffset.setTo(0,640),this.restartthislevelbtn=this.game.add.button(500,1e3,"restart",function(){this.restarttheGame=!0,this.ResetTheGame(),this.world.setBounds(0,0,6784,1e3),this.game.state.start("Levelone")},this,2,1,0),this.restartthislevelbtn.fixedToCamera=!0,this.restartthislevelbtn.scale.setTo(.5),this.restartthislevelbtn.cameraOffset.setTo(500,640),this.bacttothemainscreenBtn=this.game.add.button(420,1e3,"backtoMainTheMenu",function(){this.ResetTheGame(),this.game.state.start("MainMenu")},this,2,1,0),this.bacttothemainscreenBtn.fixedToCamera=!0,this.bacttothemainscreenBtn.scale.setTo(.5),this.bacttothemainscreenBtn.cameraOffset.setTo(420,640),this.game.add.tween(this.loseScreen.cameraOffset).to({y:0},500,Phaser.Easing.Bounce.Out,!0),this.game.add.tween(this.restartthislevelbtn.cameraOffset).to({y:400},1e3,Phaser.Easing.Bounce.Out,!0),this.game.add.tween(this.bacttothemainscreenBtn.cameraOffset).to({y:400},1e3,Phaser.Easing.Bounce.Out,!0)},ResetTheGame:function(){this.backgroundone=null,this.theprotaginest=null,this.cursor,this.playerMinAngle=-20,this.playerMaxAngle=20,this.playerAlive=!0,this.enemycanhit=!0,this.pauseButtonLevel=null,this.pauseScreen=null,this.continuelevelbtn=null,this.returntomainbtn=null,this.isTheLevelPaused=!1,this.TweenPauseElement=null,this.GameOverPannel=null,this.backtomenugameoverbutton=null,this.restartTheGame=null,this.youwinPannelScreen=null,this.enemyRate=500,this.enemyTimer=0,this.didwinlevel=!1,this.theLevelTime=60,this.Thetimeboard=null,this.ThetimeText=null,this.ThefontStyle={font:"14px Arial",fill:"#fff",stroke:"#575957",strokeThickness:3,align:"center"},this.timefinished=!1,this.jetSound=null,this.gameMusic=null,this.iwon=null,this.protagenisthealth=4,this.thecountHealth=3},pauseone:function(e){this.isTheLevelPaused===!1&&(this.isTheLevelPaused=!0,this.gameMusic.stop(),this.TheEnemies.callAll("animations.stop","animations"),this.TheEnemies.setAll("body.velocity.x",0),this.enemycanhit=!1,this.showPausePannel(),this.game.physics.arcade.gravity.y=0,this.theprotagonist.body.allowGravity=!1,this.theprotagonist.body.gravity.y=0,this.theprotagonist.body.velocity.y=0,this.theprotagonist.body.velocity.x=0,this.theprotagonist.body.gravity.x=0,this.theprotaginest.animations.stop())},playerGetUSB:function(){this.LeveloneUSB.kill()},PlayGame:function(){this.hidethepausePaneel(),this.game.physics.arcade.gravity.y=400,this.TheEnemies.callAll("animations.play","animations","fly"),this.TheEnemies.setAll("body.velocity.x",-400),this.enemycanhit=!0,this.theprotaginest.animations.play("fly"),this.gameMusic.play("",0,!0),this.gameMusic.volume=.2},showPausePannel:function(){this.pauseScreen=this.add.sprite(1e3,0,"pauseScreen"),this.pauseScreen.fixedToCamera=!0,this.pauseScreen.cameraOffset.setTo(1e3,0),this.continuelevelbtn=this.game.add.button(1e3,385,"continue",function(){this.isTheLevelPaused=!1,this.PlayGame()},this,2,0,1),this.continuelevelbtn.fixedToCamera=!0,this.continuelevelbtn.scale.setTo(.6),this.continuelevelbtn.cameraOffset.setTo(1e3,385),this.returntomainbtn=this.game.add.button(1e3,450,"back",function(){this.ResetTheGame(),this.game.state.start("MainMenu")},this,2,0,1),this.returntomainbtn.fixedToCamera=!0,this.returntomainbtn.scale.setTo(.6),this.returntomainbtn.cameraOffset.setTo(1e3,450),this.game.add.tween(this.pauseScreen.cameraOffset).to({x:447},1e3,Phaser.Easing.Bounce.Out,!0),this.game.add.tween(this.continuelevelbtn.cameraOffset).to({x:690},1e3,Phaser.Easing.Bounce.Out,!0),this.game.add.tween(this.returntomainbtn.cameraOffset).to({x:690},1e3,Phaser.Easing.Bounce.Out,!0)},hidethepausePaneel:function(){this.game.add.tween(this.pauseScreen.cameraOffset).to({x:1e3},500,Phaser.Easing.Linear.NONE,!0),this.game.add.tween(this.continuelevelbtn.cameraOffset).to({x:1e3},500,Phaser.Easing.Linear.NONE,!0),this.game.add.tween(this.returntomainbtn.cameraOffset).to({x:1e3},500,Phaser.Easing.Linear.NONE,!0)},update:function(){this.isTheLevelPaused===!1?(this.cursor.up.isDown?(this.theprotaginest.body.velocity.y-=25,this.jetSound.isPlaying||(this.jetSound.play("",0,!0,.5),this.jetSound.volume=.3)):this.jetSound.stop(),this.theprotaginest.body.velocity.y<0||this.cursor.up.isDown?(this.theprotaginest.angle>0&&(this.theprotaginest.angle=0),this.theprotaginest.angle>this.playerMinAngle&&(this.theprotaginest.angle-=.5)):this.theprotaginest.body.velocity.y>=0&&!this.cursor.up.isDown&&this.theprotaginest.angle<this.playerMaxAngle&&(this.theprotaginest.angle+=.5)):this.isTheLevelPaused===!0&&(this.theprotaginest.body.velocity.y=0),this.isTheLevelPaused===!1&&this.enemyTimer<this.game.time.now&&(this.createEnemy(),this.enemyTimer=this.game.time.now+this.enemyRate),this.game.physics.arcade.overlap(this.theprotaginest,this.TheEnemies,this.enemyHit,null,this),this.game.physics.arcade.overlap(this.theprotaginest,this.LeveloneUSB,this.playerGetUSB,null,this),this.restarttheGame===!0&&(this.restarttheGame=!1)}};