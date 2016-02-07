pixel.Story = function(game){
    this.startStory1;
    this.startStory2;
    this.startStory3;
    this.startStory4;
    this.startStory5;
    this.startStory6;
    this.text1;
    this.text2;
    this.text3;
    this.text4;
    this.text5;
    this.text6;
    this.thenextButton;
    this.PreviousButton;
    this.instructions;
    this.skip;

    //Particle variables
    this.Max =0;
    this.Front;
    this.Mid;
    this.back;
    this.updateTheTimer = 4 * 60;
    this.Counter = 0;

}

pixel.Story.prototype = {

    create: function() {

        //add background image
        this.startStory1 = this.add.image(0, 0, 'story1');
        this.startStory1.inputEnabled = true;
        this.startStory1.alpha = 0;
        this.game.add.tween(this.startStory1).to({alpha: 1}, 1000, Phaser.Easing.Linear.None, true);


        this.text1 = this.add.image( -960, this.world.centerY + 50, 'Text1');
        this.game.add.tween(this.text1).to({x:0}, 1000, Phaser.Easing.Bounce.Out, true);

        // //Next story level
        // this.add.button(this.world.centerX - 100,this.world.centerY + 250, 'start',this.startBossLevel,this, 2,1,0 );

        //Next Story
        this.thenextButton = this.add.button( -960, this.world.centerY + 70 , 'NextSlide', this.SeenTwo, this, 2,1,0 );
        this.thenextButton.scale.setTo(0.6);
        this.game.add.tween(this.thenextButton).to({x:870}, 1000, Phaser.Easing.Bounce.Out, true);

        

        //Instructions Page
        this.instructions = this.add.button( 890, 20 , 'instructions',this.startInstructionState,this, 2,1,0 );
        this.instructions.scale.setTo(0.6);

         //Instructions Page
         this.skip = this.add.button( 700, 24 , 'skip', function(){ this.state.start('LevelOne');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

    },

    

    SeenTwo: function(pointer){
        //this.state.start('MainMenu');
        this.startStory2 = this.add.image(0, 0, 'story2');
        this.startStory2.alpha = 0;
        this.game.add.tween(this.startStory2).to({alpha: 1}, 1000, Phaser.Easing.Bounce.Out, true);
        this.text2 = this.add.image( -960, this.world.centerY + 50, 'Text2');
        this.game.add.tween(this.text2).to({x:0}, 1000, Phaser.Easing.Bounce.Out, true);

        //Next Story
        this.thenextButton = this.add.button( -960, this.world.centerY + 70 , 'NextSlide', this.SeenThree, this, 2,1,0 );
        this.thenextButton.scale.setTo(0.6);
        this.game.add.tween(this.thenextButton).to({x:870}, 1000, Phaser.Easing.Bounce.Out, true);

        //Previous Story
        this.PreviousButton = this.add.button( -960, this.world.centerY + 70 , 'previous', function(){this.state.start('Story'  );}, this, 2,1,0 );
        this.PreviousButton.scale.setTo(0.6);
        this.game.add.tween(this.PreviousButton).to({x:40}, 1000, Phaser.Easing.Bounce.Out, true);

        //Instructions Page
        this.instructions = this.add.button( 890, 20 , 'instructions',this.startInstructionState,this, 2,1,0 );
        this.instructions.scale.setTo(0.6);

         //Instructions Page
         this.skip = this.add.button( 700, 24 , 'skip', function(){ this.state.start('LevelOne');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);



    },

    SeenThree: function(pointer){
        this.startStory3 = this.add.image(0, 0, 'story3');
        this.startStory3.alpha = 0;
        this.game.add.tween(this.startStory3).to({alpha: 1}, 1000, Phaser.Easing.Bounce.Out, true);
 
       
         //create emitter asset 

        this.Mid  = this.game.add.emitter(this.game.world.centerX, -32, 100);
        this.Mid.makeParticles('Particle');
        this.Mid.maxParticleScale = 1.2;
        this.Mid.minParticleScale = 0.8;
        this.Mid.setYSpeed(50, 150);
        this.Mid.gravity = 0;
        this.Mid.width = this.game.world.width * 1.5;
        this.Mid.minRotation = 0;
        this.Mid.maxRotation = 40;
        //this.Mid.alpha = 0.3;

        this.back = this.game.add.emitter(this.game.world.centerX, -32, 50);
        this.back.makeParticles('Particle');
        this.back.maxParticleScale = 0.6;
        this.back.minParticleScale = 0.2;
        this.back.setYSpeed(20, 100);
        this.back.gravity = 0;
        this.back.width = this.game.world.width * 1.5;
        this.back.minRotation = 0;
        this.back.maxRotation = 40;
        //this.back.alpha = 0.3;

        this.Front = this.game.add.emitter(this.game.world.centerX, -32, 25);
        this.Front.makeParticles('Particle');
        this.Front.maxParticleScale = 1;
        this.Front.minParticleScale = 0.5;
        this.Front.setYSpeed(100, 200);
        this.Front.gravity = 0;
        this.Front.width = this.game.world.width * 1.5;
        this.Front.minRotation = 0;
        this.Front.maxRotation = 40;
        //this.Front.alpha = 0.3;

        //start emitter
        this.Front.start(false, 6000, 1000);
        this.back.start(false, 14000, 20);
        this.Mid.start(false, 12000, 40);


        this.text3 = this.add.image( -960, this.world.centerY + 50, 'Text3');
        this.game.add.tween(this.text3).to({x:0}, 1000, Phaser.Easing.Bounce.Out, true);

         //Next Story
        this.thenextButton = this.add.button( -960, this.world.centerY + 70 , 'NextSlide', this.SeenFour, this, 2,1,0 );
        this.thenextButton.scale.setTo(0.6);
        this.game.add.tween(this.thenextButton).to({x:870}, 1000, Phaser.Easing.Bounce.Out, true);

         //Previous Story
        this.PreviousButton = this.add.button( -960, this.world.centerY + 70 , 'previous', this.SeenTwo, this, 2,1,0 );
        this.PreviousButton.scale.setTo(0.6);
        this.game.add.tween(this.PreviousButton).to({x:40}, 1000, Phaser.Easing.Bounce.Out, true);

        //Instructions Page
        this.instructions = this.add.button( 890, 20 , 'instructions',this.startInstructionState,this, 2,1,0 );
        this.instructions.scale.setTo(0.6);

         //Instructions Page
         this.skip = this.add.button( 700, 24 , 'skip', function(){ this.state.start('LevelOne');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

    },

    SeenFour: function(pointer){
        this.startStory4 = this.add.image(0, 0, 'story4');
        this.startStory4.alpha = 0;
        this.game.add.tween(this.startStory4).to({alpha: 1}, 1000, Phaser.Easing.Bounce.Out, true);
        this.text4 = this.add.image( -960, this.world.centerY + 50, 'Text4');
        this.game.add.tween(this.text4).to({x:0}, 1000, Phaser.Easing.Bounce.Out, true);

         //Next Story
        this.thenextButton = this.add.button( -960, this.world.centerY + 70 , 'NextSlide', this.SeenFive, this, 2,1,0 );
        this.thenextButton.scale.setTo(0.6);
        this.game.add.tween(this.thenextButton).to({x:870}, 1000, Phaser.Easing.Bounce.Out, true);

         //Previous Story
        this.PreviousButton = this.add.button( -960, this.world.centerY + 70 , 'previous', this.SeenThree, this, 2,1,0 );
        this.PreviousButton.scale.setTo(0.6);
        this.game.add.tween(this.PreviousButton).to({x:40}, 1000, Phaser.Easing.Bounce.Out, true);

        //Instructions Page
        this.instructions = this.add.button( 890, 20 , 'instructions',this.startInstructionState,this, 2,1,0 );
        this.instructions.scale.setTo(0.6);

         //Instructions Page
         this.skip = this.add.button( 700, 24 , 'skip', function(){ this.state.start('LevelOne');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

    },

    SeenFive: function(pointer){
        this.startStory5 = this.add.image(0, 0, 'story5');
        this.startStory5.alpha = 0;
        this.game.add.tween(this.startStory5).to({alpha: 1}, 1000, Phaser.Easing.Bounce.Out, true);
        this.text5 = this.add.image( -960, this.world.centerY + 50, 'Text5');
        this.game.add.tween(this.text5).to({x:0}, 1000, Phaser.Easing.Bounce.Out, true);

         //Next Story
        this.thenextButton = this.add.button( -960, this.world.centerY + 70 , 'NextSlide', this.SeenSix, this, 2,1,0 );
        this.thenextButton.scale.setTo(0.6);
        this.game.add.tween(this.thenextButton).to({x:870}, 1000, Phaser.Easing.Bounce.Out, true);

         //Previous Story
        this.PreviousButton = this.add.button( -960, this.world.centerY + 70 , 'previous', this.SeenFour, this, 2,1,0 );
        this.PreviousButton.scale.setTo(0.6);
        this.game.add.tween(this.PreviousButton).to({x:40}, 1000, Phaser.Easing.Bounce.Out, true);

        //Instructions Page
        this.instructions = this.add.button( 890, 20 , 'instructions',this.startInstructionState,this, 2,1,0 );
        this.instructions.scale.setTo(0.6);

         //Instructions Page
         this.skip = this.add.button( 700, 24 , 'skip', function(){ this.state.start('LevelOne');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

    },

    SeenSix: function(pointer){
        this.startStory6 = this.add.image(0, 0, 'story6');
        this.startStory6.alpha = 0;
        this.game.add.tween(this.startStory6).to({alpha: 1}, 1000, Phaser.Easing.Bounce.Out, true);
        this.text6 = this.add.image( -960, this.world.centerY + 50, 'Text6');
        this.game.add.tween(this.text6).to({x:0}, 1000, Phaser.Easing.Bounce.Out, true);

         //Next Story
        this.thenextButton = this.add.button( -960, this.world.centerY + 70 , 'NextSlide', function(){this.state.start('LevelOneStory')}, this, 2,1,0 );
        this.thenextButton.scale.setTo(0.6);
        this.game.add.tween(this.thenextButton).to({x:870}, 1000, Phaser.Easing.Bounce.Out, true);

          //Previous Story
        this.PreviousButton = this.add.button( -960, this.world.centerY + 70 , 'previous', this.SeenFive, this, 2,1,0 );
        this.PreviousButton.scale.setTo(0.6);
        this.game.add.tween(this.PreviousButton).to({x:40}, 1000, Phaser.Easing.Bounce.Out, true);

        //Instructions Page
        this.instructions = this.add.button( 890, 20 , 'instructions',this.startInstructionState,this, 2,1,0 );
        this.instructions.scale.setTo(0.6);

         //Instructions Page
         this.skip = this.add.button( 700, 24 , 'skip', function(){ this.state.start('LevelOne');},this, 2,1,0 );
         this.skip.scale.setTo(0.5);

    },

    startInstructionState: function(pointer){
        this.state.start('Instructions');
    },


    


};
