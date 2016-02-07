pixel.GameWin = function(game){
   this.WinBG
   this.virusefreebroser;
   this.Pixillah;
   this.pixellSpeech;
   this.reunited;
   this.completionMusic;
   this.backtomainpage;
}

pixel.GameWin.prototype = {

    create: function() {

        //add background image
        this.WinBG = this.add.image(0, 0, 'winbg');
        this.WinBG.inputEnabled = true;

        this.completionMusic = this.game.add.audio('GameCompleteMusic', 0 , true);
        this.completionMusic.play('', 0, true);
        this.completionMusic.volume = 0.3;

        this.virusefreebroser = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'BrowserviruseFree');
        this.virusefreebroser.anchor.setTo(0.5, 0.5);
        this.virusefreebroser.alpha = 0;

        
        this.game.add.tween(this.virusefreebroser).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true);

        this.game.time.events.add( 5000, this.NextStory, this);
    },

    

    NextStory: function(){
       this.game.add.tween(this.virusefreebroser).to( { alpha: 0}, 2000, Phaser.Easing.Linear.None, true);

       
         this.Pixillah = this.add.image(0, 0, 'pixellahSpeechBubble');
         this.Pixillah.alpha = 0;
         this.game.add.tween(this.Pixillah).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true);
         this.game.time.events.add( 5000, this.PixelStory, this);
    },

    PixelStory: function(){
        this.game.add.tween(this.Pixillah).to( { alpha: 0}, 2000, Phaser.Easing.Linear.None, true);

        this.pixellSpeech = this.add.image(0, 0, 'pixelfindspixellah');
        this.pixellSpeech.alpha = 0;
        this.game.add.tween(this.pixellSpeech).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true);
         this.game.time.events.add( 5000, this.FinalSceen, this);
    },

    FinalSceen: function(){
        this.game.add.tween(this.pixellSpeech).to( { alpha: 0}, 2000, Phaser.Easing.Linear.None, true);

        this.reunited = this.add.image(0, 0, 'reunitendAndItfeelsSogood');
        this.reunited.alpha = 0;
        this.game.add.tween(this.reunited).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true);

         this.backtomainpage = this.add.button( 50,20, 'backtoMainTheMenu',function(){
            this.completionMusic.stop();
            this.state.start('MainMenu');
        },this, 1,0,2 );
        this.backtomainpage.alpha = 0;

        this.game.add.tween(this.backtomainpage).to( { alpha: 1 }, 4000, Phaser.Easing.Linear.None, true);

    }


   
    


};
