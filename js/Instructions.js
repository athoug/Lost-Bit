pixel.Instructions = function(game){
    
    this.instructionsPage;
    this.backtomenbutton
}

pixel.Instructions.prototype = {

    create: function() {

        //add background image
        this.instructionsPage = this.add.image(0, 0, 'instructionspage');
        this.instructionsPage.inputEnabled = true;
        //boss level
        this.backtomenbutton = this.add.button( 730, this.world.centerY + 240, 'back',this.BackToMen,this, 1,0,2 );
        this.backtomenbutton.scale.setTo(0.57);
         
    },

    

    BackToMen: function(pointer){
        this.state.start('MainMenu');

    }

   


};
