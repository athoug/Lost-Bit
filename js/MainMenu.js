pixel.MainMenu = function(game){
    this.startBG;
    this.instructions;
}

pixel.MainMenu.prototype = {

    create: function() {

        //add background image
        this.startBG = this.add.image(0, 0, 'mainMenuScreen');
        this.startBG.inputEnabled = true;
        //boss level
        this.add.button(this.world.centerX - 100,this.world.centerY + 250, 'start',this.LevelOne,this, 2,1,0 );

         //boss level
        this.instructions = this.add.button( 890, 20 , 'instructions',this.startInstructionState,this, 2,1,0 );
        this.instructions.scale.setTo(0.6);
        
    },

    

    LevelOne: function(pointer){


        this.state.start('Story');

    },


    startInstructionState: function(pointer){
        this.state.start('Instructions');
    }


};
