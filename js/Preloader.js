pixel.Preloader = function() {
this.ready = false;
this.splash = null;
};

pixel.Preloader.prototype = {

preload: function() {
    //load the image sprites for the loadig screen
    this.splash = this.add.sprite(0, 0, 'splash');
    //this.splash.anchor.setTo(0.5, 0.5);

    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 70, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.preloadBar);

    //load the level 1 games assets
    this.load.image('background', 'assets/images/backgroung.png');
    this.load.image('Particle', 'assets/images/PixelParticl.png');
    this.load.image('1tile', 'assets/images/pillar.png');
    this.load.image('circle', 'assets/images/circle.png');
    this.load.image('longpillar', 'assets/images/longpillar.png');
    this.load.image('verticalPillars', 'assets/images/vertical-sharp-edge.png');
    this.load.image('shortSharp', 'assets/images/shirt-sharp-horozontal.png');
    this.load.image('smallSmoothVertical', 'assets/images/small-smooth-vertical.png');
    this.load.image('blackWholedChip', 'assets/images/blac-vertical-pillar.png');
    this.load.image('computerChipcard', 'assets/images/computer-card.png');
    this.load.image('chipflip', 'assets/images/flipchip.png');
    this.load.image('block8', 'assets/images/8.png');
    this.load.image('block9', 'assets/images/9.png');
    this.load.image('block11', 'assets/images/11.png');
    this.load.image('verticalcip', 'assets/images/15.png');
    this.load.image('whiteVerticalChipcard', 'assets/images/white-chip-v.png');
    this.load.image('15', 'assets/images/109.png');
    this.load.image('16', 'assets/images/long-comb.png');
    this.load.image('17', 'assets/images/combbrush.png');
    this.load.image('18', 'assets/images/comb-combo-2.png');
    this.load.image('19', 'assets/images/comb-3.png');
    this.load.image('20', 'assets/images/small-squarechip.png');
    this.load.image('21', 'assets/images/long-simple-chip.png');
    this.load.image('22', 'assets/images/square.png');
    
    this.load.image('23', 'assets/images/129.png');
    this.load.image('24', 'assets/images/107-108.png');
    this.load.image('25', 'assets/images/23-24.png');
    this.load.image('26', 'assets/images/down-facinf.png');
    this.load.image('27', 'assets/images/flied-side-chip.png');
    this.load.image('28', 'assets/images/chip-alot.png');
    this.load.image('29', 'assets/images/microchipflip.png');
    this.load.image('30', 'assets/images/microchip.png');
    this.load.image('31', 'assets/images/another-chip.png');
    this.load.image('32', 'assets/images/small-detailed-chip.png');
    this.load.image('33', 'assets/images/detailedShip-horozontal.png');
    this.load.image('34', 'assets/images/detail-long-chip.png');
    this.load.image('35', 'assets/images/longhorozontalchip.png');
    this.load.image('36', 'assets/images/comb-1.png');
    this.load.image('37', 'assets/images/long-sharp.png');
    this.load.image('38', 'assets/images/black-chip.png');
    this.load.image('39', 'assets/images/blackchip.png');
    this.load.image('40', 'assets/images/vertmicrochip.png');
    this.load.image('41', 'assets/images/microhor.png');
    this.load.image('42', 'assets/images/part2-of-broken-log.png');
    this.load.image('43', 'assets/images/broken-log.png');
    this.load.image('44', 'assets/images/chip-vertical.png');
    this.load.image('45', 'assets/images/comb-non-collied.png');
    this.load.image('46', 'assets/images/horozontal-chip.png');
    this.load.image('47', 'assets/images/long-smooth-vertical.png');
    this.load.image('48', 'assets/images/comb-2.png');
    this.load.image('49', 'assets/images/brokenlog-vertical.png');
    this.load.image('50', 'assets/images/part2-ofbrokenlog-vertical.png');
    this.load.image('51', 'assets/images/fan-2outer.png');
    this.load.image('52', 'assets/images/wheel-shadow.png');
    this.load.image('53', 'assets/images/fan-2-inner.png');
    this.load.image('54', 'assets/images/wheel2.png');
    this.load.image('55', 'assets/images/brick.png');
    
    this.load.image('56', 'assets/images/pipe.png');
    this.load.image('57', 'assets/images/pipe2.png');
    this.load.image('58', 'assets/images/pipe3.png');
    this.load.image('59', 'assets/images/adjusted-small-squarechip.png');
    this.load.image('60', 'assets/images/adjusted-small-detailed-chip.png');
    this.load.image('61', 'assets/images/adjusted-detail-long-chip.png');
    this.load.image('62', 'assets/images/adjusted-long-simple-chip.png');
    this.load.image('63', 'assets/images/adjusted-longhorozontalchip.png');
    this.load.image('64', 'assets/images/adjusted-detailedShip-horozontal.png');
    this.load.image('65', 'assets/images/adjusted-microchip.png');
    
    this.load.image('66', 'assets/images/adjusted-microchipflip.png');
    this.load.image('67', 'assets/images/adjusted-another-chip.png');
    this.load.image('68', 'assets/images/comb2-pipe.png');
    this.load.image('69', 'assets/images/comb-2-pipe2.png');
    this.load.image('70', 'assets/images/comb-3-pipe.png');
    this.load.image('71', 'assets/images/comb3-pipe2.png');
    this.load.image('72', 'assets/images/comb3-pipe3.png');
    this.load.image('73', 'assets/images/final-pipe.png');
    this.load.image('74', 'assets/images/corner-pipe.png');
    this.load.image('75', 'assets/images/computercardhorozontal.png');
    this.load.image('76', 'assets/images/exit-pillar.png');
    this.load.image('77', 'assets/images/USB.png');
    this.load.image('timeBoard', 'assets/images/time-board.png');
    this.load.image('exit', 'assets/images/the-door.png');
    this.load.image('pixelWithFlash', 'assets/images/PixelwithFlash.png');
    this.load.image('ghost', 'assets/images/ghost.png');
    this.load.image('havescript', 'assets/images/Youhavethescript.png');
    this.load.image('instuctionbuuble', 'assets/images/instructions-1.png');
    this.load.image('box', 'assets/images/box.png');

    //boss level assets
    this.load.image('bossBackground', 'assets/images/background-boss.png');
    this.load.image('boss1', 'assets/images/side-brick-right.png');
    this.load.image('boss2', 'assets/images/side-brick-left.png');
    this.load.image('boss3', 'assets/images/square-box.png');
    this.load.image('boss4', 'assets/images/small-broken-horozontal.png');
    this.load.image('boss5', 'assets/images/smoth-horozontal-boss.png');
    this.load.image('boss6', 'assets/images/computer-chip-boss.png');
    this.load.image('boss7', 'assets/images/black-pillar-boss.png');
    this.load.image('boss8', 'assets/images/black-brick-boss.png');
    this.load.image('boss9', 'assets/images/bricked-detailed-boss.png');
    this.load.image('boss10', 'assets/images/detailed-brick.png');
    this.load.image('boss11', 'assets/images/circle-boss.png');
    this.load.image('electricBall', 'assets/images/Electickball.png');


    //scean images
    this.load.image('mainMenuScreen', 'assets/images/main menu (new).png');
    this.load.image('instructionspage', 'assets/images/instructions.png');
    this.load.image('story1', 'assets/images/1 (IMAGE).png');
    this.load.image('story2', 'assets/images/2(image).png');
    this.load.image('story3', 'assets/images/3 (image).png');
    this.load.image('story4', 'assets/images/4 (IMAGE).png');
    this.load.image('story5', 'assets/images/5 (IMAGE).png');
    this.load.image('story6', 'assets/images/6 (IMAGE).png');
    
    

    //story Text and assets
    this.load.image('Text1', 'assets/images/1 (TEXT).png');
    this.load.image('Text2', 'assets/images/2 (text).png');
    this.load.image('Text3', 'assets/images/3 (text).png');
    this.load.image('Text4', 'assets/images/4 (TEXT).png');
    this.load.image('Text5', 'assets/images/5 (TEXT).png');
    this.load.image('Text6', 'assets/images/6 (TEXT).png');

    
    //sprite sheets
    this.load.spritesheet('boss', 'assets/images/bossthenewmovmenrt1.png', 228.75, 356,7);
    this.load.spritesheet('glitch-button', 'assets/images/Glitch-button.png', 32, 10, 2);
    this.load.spritesheet('player2', 'assets/images/Pixel movments(left&right)smiling.png',64, 64, 7);
    this.load.spritesheet('player', 'assets/images/pixel.png',64, 64, 7);
    this.load.spritesheet('enimie', 'assets/images/virus.png',49, 64, 6);
    this.load.spritesheet('flyingEnimie', 'assets/images/flying-virus.png', 48, 53, 6);
    this.load.spritesheet('theGlitch', 'assets/images/screen-glitch.png', 960, 640, 3);
    this.load.spritesheet('blastKill', 'assets/images/explosion.png',70, 65, 9);
    this.load.spritesheet('flyingPixel', 'assets/images/flying Pixel.png',56, 61, 2);


    this.load.image('bullet', 'assets/images/bullet.png');
    this.load.image('lifeBoard', 'assets/images/Score+life.png');
    

    //buttons asstest
    this.load.spritesheet('start', 'assets/images/startbutton.png',202, 31,3);
    this.load.spritesheet('pause', 'assets/images/button-pause.png',80, 80 ,3);
    this.load.spritesheet('restart', 'assets/images/repeat.png',80, 80 ,3);
    this.load.spritesheet('previous', 'assets/images/Previous.png',80, 80 ,3);
    this.load.spritesheet('backtoMainTheMenu', 'assets/images/home.png',80, 80 ,3);
    this.load.spritesheet('skip', 'assets/images/skip.png',330, 80 ,3);
    this.load.spritesheet('NextSlide', 'assets/images/next.png',80, 80 ,3);
    this.load.spritesheet('back', 'assets/images/backtomenu.png',330, 80,3);
    this.load.spritesheet('continue', 'assets/images/Continue.png',330, 80,3);
    this.load.spritesheet('instructions', 'assets/images/instructions button.png',80, 80,3);
    
    
    //screen assets
    this.load.image('pauseScreen', 'assets/images/pause-Screen.png');
    this.load.image('gameoverplayer', 'assets/images/GAME OVER (without buttons) BOSS.png');
    this.load.image('YouJustWonTheGame', 'assets/images/winningthegame.png');
    this.load.image('YouLoseLevel1', 'assets/images/GAMEOVERLevel1.png');
    
    //wining the game
    this.load.image('winbg', 'assets/images/WIN-2-1.png');
    this.load.image('BrowserviruseFree', 'assets/images/WIN-2-2.png');
    this.load.image('pixellahSpeechBubble', 'assets/images/WIN-3-2.png');
    this.load.image('pixelfindspixellah', 'assets/images/WIN-3-1.png');
    this.load.image('reunitendAndItfeelsSogood', 'assets/images/WIN-4.png');

    //level one story 
    this.load.image('pixelspeak1', 'assets/images/p1.png');
    this.load.image('pixelspeak2', 'assets/images/p2.png');
    this.load.image('pixelspeak3', 'assets/images/p3.png');
    this.load.image('pixelspeak4', 'assets/images/p4.png');
    this.load.image('WoriorSpeek1', 'assets/images/w1.png');
    this.load.image('WoriorSpeek2', 'assets/images/w2.png');
    this.load.image('WoriorSpeek3', 'assets/images/w3.png');
    this.load.image('WoriorSpeek4', 'assets/images/w4.png');
    this.load.image('WoriorSpeek5', 'assets/images/w5.png');
    this.load.image('WoriorSpeek6', 'assets/images/w6.png');
    this.load.image('WoriorSpeek7', 'assets/images/w7.png');
    this.load.image('WoriorSpeek8', 'assets/images/w8.png');

    //Boss Level Story
    this.load.image('pixelboss1', 'assets/images/BP1.png');
    this.load.image('pixelboss2', 'assets/images/BP2.png');
    this.load.image('pixelboss3', 'assets/images/BP3.png');
    this.load.image('bossWoeeior1', 'assets/images/BW1.png');
    this.load.image('bossWoeeior2', 'assets/images/BW2.png');
    this.load.image('bossWoeeior3', 'assets/images/BW3.png');
    this.load.image('bossWoeeior4', 'assets/images/BW4.png');
    this.load.image('bossWoeeior5', 'assets/images/BW5.png');

    this.load.image('oneBGScroll', 'assets/images/oneBg.png');

    //audio assets    
    this.load.audio('gameMusic','assets/audio/mainGame.wav');
    this.load.audio('enemiykill','assets/audio/NFF-magic-drop.wav');
    this.load.audio('getUSB','assets/audio/NFF-bravo.wav');
    this.load.audio('select','assets/audio/select.wav');
    this.load.audio('lel2','assets/audio/next-lvl.wav');
    this.load.audio('error','assets/audio/NFF-no-go.wav');
    this.load.audio('glitchSound','assets/audio/NFF-glittering.wav');
    this.load.audio('rocket','assets/audio/rocket.wav');
    this.load.audio('jump','assets/audio/jump.wav');
    this.load.audio('coin','assets/audio/coin.wav');
    this.load.audio('playerDeath','assets/audio/NFF-lose.wav');
    this.load.audio('fireLzer','assets/audio/NFF-throw-02.wav');
    this.load.audio('PlayerGetsHit','assets/audio/NFF-throw-02.wav');
    this.load.audio('BossHitting','assets/audio/NFF-ninja-run.wav');
    this.load.audio('BossHitSoundEffect','assets/audio/NFF-springy-hit.wav');
    this.load.audio('bosslevelMusic','assets/audio/POL-evil-throne-short.wav');
    this.load.audio('PlayerHitByBossAudio','assets/audio/NFF-drop.wav');
    this.load.audio('death','assets/audio/death.wav');
    this.load.audio('explosionSoundEffect','assets/audio/battleexplosion.wav');
    this.load.audio('GameCompleteMusic','assets/audio/POL-spiritual-path-short.wav');
    this.load.audio('levelonestorymusic','assets/audio/POL-catch-them-all-short.wav');
    this.load.audio('thefinalstorymusic','assets/audio/POL-graveyard-lord-short.wav');
    this.load.audio('leveloneflingpixelmusic','assets/audio/POL-time-travel-short.wav');
	//Health Bar//
	this.game.load.image('healthbar', 'assets/images/healthBarFront.png');
	this.game.load.image('healthBarBack', 'assets/images/healthBarBack.png');


},

create: function() {
    this.preloadBar.cropEnabled = false;
},

update: function() {
    if(this.cache.isSoundDecoded('gameMusic') && this.ready === false){
        this.ready = true;
        this.state.start('MainMenu');
    }
}


};
