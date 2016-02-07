pixel.LevelOne = function(game){



    //Build the platform World variables
    this.TheBackgroundLevelOne = null;

    this.platformLevelOne = null;
    this.circleGroup = null;
    this.VerticalSharpHorizontalGroup = null;
    this.shortSharpHorizontalPillar = null;
    this.shortsharpHorizontalTwo = null;
    this.SmallSmoothVerticalPillarGroup = null;

     //tiles coordinates
    /* spike chips */
    this.spikeCoordinatesX = [102, 165, 223];
    this.spikeCoordinatesY = [911, 911, 911];
    /* circle coordinates*/
    this.circleCoordinateX = [76, 401, 401, 522, 648, 727, 514, 752, 752, 1084, 1189, 1709, 2119, 2186, 2355, 2711, 2865, 3324, 3374, 3859, 3859,3877, 3842, 3921, 4047, 4057, 4170, 4170, 4170, 4170, 4289, 4494, 4494, 4716, 4690, 4850, 4764, 4706, 5072, 5242, 5310, 5584, 5995, 6053, 6162, 6515, 6491, 6551, 6730, 194, 401, 401, 694, 76, 306, 514, 2575, 2722, 4058, 4265, 4376, 6729, 6490, 4265];
    
    this.circleCoordinateY = [511, 116, 114, 700, 846, 790, 74, 308, 240, 846, 846, 846, 224, 224, 282, 691, 178, 68, 68, 676, 609, 439, 130, 72, 217, 845, 802, 705, 649, 856, 82, 480, 471, 828, 462, 586, 381, 27, 418, 358, 358, 196, 91, 91, 91, 148, 626, 458, 858, 276, 264, 62, 528, 444, 61, 128, 452, 327, 794, 858, 642, 809, 693, 597];
    
    /* Long pillar coordinates*/
     this.longPillarCoordinateX = [817, 817, 817, 817, 2980, 2980, 2980, 2980, 5652, 5652, 5652, 5652];
     this.longPillarCoordinateY = [689, 726, 766, 801, 241, 203, 166, 124, 256, 219, 177, 140];
    /* vertical sharp pillar coordinates*/
    this.vetricalSharpX =[146, 254, 355, 463, 565, 661, 3908, 4003, 4109, 4216, 4317, 4423, 6581, 6678];
    this.vetricalSharpY =[37, 81, 36, 36, 81, 36, 558, 514, 557, 558, 513, 557, 576, 531];

    /* vertical sharp pillar coordinates*/
    this.shortHorozantalX = [1914, 1958, 1914, 1914, 1958, 1914, 5193, 5149, 5193, 5193, 5151, 5193];
    this.shortHorozantalY = [311, 406, 513, 622, 720, 827, 961, 855, 755, 645, 543, 448];

     /* vertical sharp pillar coordinates*/
    this.longSmoothVerticalX = [4760, 4798, 4838, 4875];
    /* small smooth pillar coordinates*/
    this.smallSmoothVerticalX = [2566, 2604, 2643, 2678];
    this.smallSmoothVerticalY = -616;
    /* black wholed chip pillar coordinates*/
    this.blackwholedChipX = [19, 4566];
    this.blackwholedChipY = [833, 0];
    /* white computer chip pillar coordinates*/
    this.whiteChipX = [356, 851, 3716, 4165, 6336];
    this.whiteChipY = [846, 59, 743, -37, 760];
    /* white horozontal computer chip pillar coordinates*/
    this.whiteHorozontalChipX = [1935, 2719, 5378, 4597];
    this.whiteHorozontalChipY = [67,568, 202, 702];
     //flipped chip pillar coordinates
    this.flippedChipX = [2788, 2788, 2788];
    this.flippedChipY = [738 ,802, 859];
    /* flipped chip pillar coordinates*/
    this.verticalchipX = [19, 19, 19, 4554, 4554, 4554];
    this.verticalchipY = [454, 318, 181, 664, 530, 393];
     /* 15 pillar coordinates*/
    this.fifteenX = [2058, 2194, 2331];
    this.fifteenY = [957, 957, 957];
      /* 20 pillar coordinates*/
    this.twntyX = [113, 182, 1710, 2366, 2692, 4461, 4393, 5068];
    this.twntyY = [813, 489, 0, 801, 870, 111, 429, 939];
      /* 22 pillar coordinates*/
    this.twentytwoX = [483, 571, 727, 742, 896, 1008, 1597, 1547, 1616, 1641, 1641, 1641, 1616, 2946, 2895, 2923, 2954, 2946, 3019, 2970, 3547, 3666, 3820, 3837, 3992, 4080, 5261, 5317, 5375, 5431, 5617, 5594, 5594, 5594, 5618, 5690, 5641, 6219, 6340, 6493, 6511, 6667, 1650, 1778, 2421, 2401, 2339, 2710, 1621, 2769, 3072, 4641, 5670, 5013];
    this.twentytwoY = [902, 820, 696, 441, 257, 933, 885, 598, 573, 435, 360, 295, 206, 749, 646, 553, 483, 319, 314, 26, 2, 656, 509, 215, 150, 69, 15, 15, 23, 23, 725, 634, 571, 500, 357, 334, 43, 19, 671, 524, 238, 165, 765, 816, 707, 610, 664, 794, 155, 404, 284, 562, 788, 869];
       /* 28 pillar coordinates*/
    this.twentyeightX = [1091, 1091, 1084, 1084, 2284, 2137, 2719, 3479, 3479, 3489, 3489, 2642, 2573, 4636, 5141, 4784, 4705, 4852, 5289, 6150, 6150, 6159, 6159];
    this.twentyeightY = [282, 228, 169, 113, 224, 72, 483, 628, 685, 742, 799, 392, 241, 83, 360, 530, 620, 377, 207, 644, 700, 759, 815];
      /* 32 pillar coordinates*/
    this.thirtytwoX = [370, 571, 827, 1689, 2310, 2889, 2865, 3745, 4003, 4152, 5114, 4979, 5556, 6418, 6677, 2924, 2896, 615, 2579, 3598, 3653, 3590, 3653, 6300, 5110, 5097, 5551, 5574];
    this.thirtytwoY = [434 , 573 , 573 , 930 , 564, 70, 944, 337, 343, 483, 696, 286, 76, 364, 363, 886, 833, 512, 360, 937, 884, 834, 791, 918, 800, 920, 905, 818];
       /* 34 pillar coordinates*/
    this.thirtyfourX = [648, 727, 3849, 3922, 6517, 6594];
    this.thirtyfourY = [766, 860, 47, 138, 65, 159];
      /* 29 pillar coordinates*/
    this.twentynineX = [3676, 4003, 6348, 6677];
    this.twentynineY = [11, 401, 27, 417];
    
    
    //circle coordinated y movment
    this.CircleYMoveX = [325, 4520];
    this.CircleYMoveY = [945, 345];
    

    //moving the pillars variables
    this.circleTween = null;
    this.SharpVerticalTween = null;
    this.SharpHorozontalTween = null;
    this.shortSharpHorozontal = null;
    this.smallSmoothVerticalTween = null;


    //player variables
    this.MovmentPlayer = null;
    this.canPlayerMove = true;
    this.player = null;
    this.jumpButton = null;
    this.counterMove = true;

    //the pause button 
    this.pauseButtonLevel = null;
    this.pauseScreen = null;
    this.continuelevelbtn = null;
    this.returntomainbtn = null;

    //the pause elements trigger
    this.isTheLevelPaused = false;
    this.TweenPauseElement = null;

    //glutch  button variables
    this.glitcCount = false;
    this.screenGlitchEffect = null;
    this.glitchButton = null;
    this.buttonX =[95, 750, 860, 1443, 1803, 2098, 2743, 2956, 3755, 4712, 5349, 6362];
    this.buttonY =[739, 430, 880, 857, 363, 712, 961, 311, 734, 610, 439, 752];


    //the enemies assets
    this.enimie = null;
    this.enemyX = [450, 715, 1221, 1834, 2164, 3157, 4252, 4955, 5329, 5832];
    this.enemyY = [532, 948, 948, 147, 330, 948, 950, 950, 468, 932];
    this.flyingEnimie = null;
    this.FlyingenemyX = [150, 1829, 2549, 2850, 3975, 4257, 5003, 5958, 6650];
    this.FlyingenemyY = [687, 692, 938, 113, 779, 486, 493, 105, 722];
    this.enemyTween = null;
    this.flyingTween = null;
    this.enemyGhost = null;

    //gamescreen elements
    this.loseScreen = null;
    this.bacttothemainscreenBtn = null;
    this.restartthislevelbtn = null;

    //usb key variables
    this.getflash = null;
    this.usb = null;
    this.getUSB = false;

    //exit door
    this.exit = null;


    //Game Time Elements
    this.timeboard = null;
    this.timeText = null;
    this.fontStyle = {font: "14px Arial", fill: "#fff", stroke: "#575957", strokeThickness: 3, align: "center"};
    this.gametime = 220;
    this.outofTime = false;

    //restart state
    this.restarttheGame = false;

    //usb position
    this.usbPositionX = [4861, 3930, 2593, 1717, 3764];
    this.usbPositionY = [564, 560, 231, 197, 429];

    //the button speech
    this.buttonSpeech = null;

    this.instructionbox = null;
    this.instructiobbuble = null;

    this.instructionboxX = [174, 1758, 3565, 4894];
    this.instructionboxY = [880, 960, 86, 960];


    //audio variables
    this.gameMusic = null;
    this.jumpSound = null;
    this.select = null;
    this.enimyKill = null;
    this.level2 = null;
    this.noGo = null;
    this.getUSBsound = null;
    this.glitchSound = null;
    this.playerDeathSound = null;
    this.enemyGhost = null;
};



pixel.LevelOne.prototype = {

    create: function(){
      
        //set the game physics
        //this.game.physics.startSystem(Phaser.Physics.P2JS);
        //  Make things a bit more bouncey
        //this.game.physics.p2.defaultRestitution = 0.8;


        //world boundries
        this.world.setBounds(0, 0, 6784, 1000);

        //build the game world
        this.BuildLevelOne();
        this.gameElement();

        //adding time feature in game
        this.game.time.events.loop(Phaser.Timer.SECOND, this.updateTimer, this);

        //set player movmevt 
        this.MovmentPlayer = this.game.input.keyboard.createCursorKeys();
        this.jumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    },

    BuildLevelOne: function(){

        this.TheBackgroundLevelOne = this.game.add.tileSprite(0, 0, 960, 640, 'background');
        this.TheBackgroundLevelOne.fixedToCamera = true;
        //this.TheBackgroundLevelOne.anchor.setTo(0.5, 0.5);

        //building the platform tiles in the game
        this.platformLevelOne = this.game.add.group();
        this.platformLevelOne.enableBody = true;
        this.platformLevelOne.physicsBodyType = Phaser.Physics.ARCADE;

         //add spiked pillars
        for(var i = 0; i < 3; i++){
            this.add.sprite( this.spikeCoordinatesX[i], this.spikeCoordinatesY[i],'1tile', 0, this.platformLevelOne);
        }
        //add circle pillars
        for(var i = 0; i < 64; i++){
            this.add.sprite( this.circleCoordinateX[i], this.circleCoordinateY[i],'circle', 0, this.platformLevelOne);
        }
        //add long pillars
        for(var i = 0; i < 12; i++){
            this.add.sprite( this.longPillarCoordinateX[i], this.longPillarCoordinateY[i],'longpillar', 0, this.platformLevelOne);
        }

        //add black wholed chip pillr
         for(var i = 0; i < 2; i++){
            this.add.sprite( this.blackwholedChipX[i], this.blackwholedChipY[i],'blackWholedChip', 0, this.platformLevelOne);
        }
        
        //add computer card pillr
         for(var i = 0; i < 5; i++){
            this.add.sprite( this.whiteChipX[i], this.whiteChipY[i],'computerChipcard', 0, this.platformLevelOne);
        }
        
        //add computer card pillr
         for(var i = 0; i < 2; i++){
            this.add.sprite( this.whiteHorozontalChipX[i], this.whiteHorozontalChipY[i],'whiteVerticalChipcard', 0, this.platformLevelOne);
        }
        
        //add computer card pillr
         for(var i = 0; i < 3; i++){
            this.add.sprite( this.flippedChipX[i], this.flippedChipY[i],'chipflip', 0, this.platformLevelOne);
        }
        
        //add computer card pillr
         for(var i = 0; i < 6; i++){
            this.add.sprite( this.verticalchipX[i], this.verticalchipY[i],'verticalcip', 0, this.platformLevelOne);
        }
       
        //add 15 computer card pillr
         for(var i = 0; i < 3; i++){
            this.add.sprite( this.fifteenX[i], this.fifteenY[i],'15', 0, this.platformLevelOne);
        }
        
         //add 20 computer card pillr
         for(var i = 0; i < 7; i++){
            this.add.sprite( this.twntyX[i] + 11, this.twntyY[i] +12,'59', 0, this.platformLevelOne);
        }
        
         //add 20 computer card pillr
         for(var i = 0; i < 7; i++){
            this.add.sprite( this.twntyX[i], this.twntyY[i],'20');
        }
        
        //add 22 computer card pillr
         for(var i = 0; i < 54; i++){
            this.add.sprite( this.twentytwoX[i], this.twentytwoY[i],'22', 0, this.platformLevelOne);
        }
        

        //add 28 computer card pillr
         for(var i = 0; i < 23; i++){
            this.add.sprite( this.twentyeightX[i], this.twentyeightY[i],'28', 0, this.platformLevelOne);
        }
        
        //add 32 computer card pillr
         for(var i = 0; i < 28; i++){
            this.add.sprite( this.thirtytwoX[i], this.thirtytwoY[i],'32');
        }
        
        //add 32 computer card pillr
         for(var i = 0; i < 28; i++){
            this.add.sprite( this.thirtytwoX[i] + 13, this.thirtytwoY[i] +14,'60' , 0, this.platformLevelOne);
        }
        
        
          //add 34 computer card pillr
         for(var i = 0; i < 6; i++){
            this.add.sprite( this.thirtyfourX[i], this.thirtyfourY[i],'34');
        }
        
         //add 34 computer card pillr
         for(var i = 0; i < 6; i++){
            this.add.sprite( this.thirtyfourX[i]  +12, this.thirtyfourY[i] +15,'61', 0, this.platformLevelOne);
        }
        
          //add 29 computer card pillr
         for(var i = 0; i < 4; i++){
            this.add.sprite( this.twentynineX[i] , this.twentynineY[i],'29');
        }
        
        //add 29 computer card pillr
         for(var i = 0; i < 4; i++){
            this.add.sprite( this.twentynineX[i] + 65, this.twentynineY[i] + 25,'66', 0, this.platformLevelOne);
        }
        
        this.add.sprite( 90, 747,'block8', 0, this.platformLevelOne);
        this.add.sprite( 2477, 957,'block8', 0, this.platformLevelOne);
        this.add.sprite( 4554, 319,'block8', 0, this.platformLevelOne);
        this.add.sprite( 45, 665,'block9', 0, this.platformLevelOne);
        this.add.sprite( 2544, 957,'block9', 0, this.platformLevelOne);
        this.add.sprite( 4554, 249,'block9', 0, this.platformLevelOne);
        this.add.sprite( 19, 597,'block11', 0, this.platformLevelOne);
        this.add.sprite( 2625, 957,'block11', 0, this.platformLevelOne);
        this.add.sprite( 4554, 170,'block11', 0, this.platformLevelOne);
        
        this.add.sprite( 2712, 968,'23', 0, this.platformLevelOne);
        this.add.sprite( 2500, 825,'23', 0, this.platformLevelOne);
        this.add.sprite( 4346, 284,'23', 0, this.platformLevelOne);
        this.add.sprite( 4612, 731,'23', 0, this.platformLevelOne);
        this.add.sprite( 155, 650,'23', 0, this.platformLevelOne);
        this.add.sprite( 1920, 957,'24', 0, this.platformLevelOne);
        this.add.sprite( 1992, 957,'24', 0, this.platformLevelOne);
        this.add.sprite( 22, 116,'25', 0, this.platformLevelOne);
        this.add.sprite( 22, 43,'25', 0, this.platformLevelOne);
        this.add.sprite( 4554, 800,'25', 0, this.platformLevelOne);
        this.add.sprite( 4554, 876,'25', 0, this.platformLevelOne);
        this.add.sprite( 302, 608,'55', 0, this.platformLevelOne);
        
        this.add.sprite( 2486, 516,'55', 0, this.platformLevelOne);
        this.add.sprite( 2516, 71,'68', 0, this.platformLevelOne);
        this.add.sprite( 1904, -7,'69', 0, this.platformLevelOne);
        
        this.add.sprite( 4111, 146,'55', 0, this.platformLevelOne);
        this.add.sprite( 3567, 286,'72', 0, this.platformLevelOne);
        this.add.sprite( 3569, 343,'71', 0, this.platformLevelOne);
        this.add.sprite( 2994, 800,'70', 0, this.platformLevelOne);
        
        //here athoug adjust this
        this.add.sprite( 6259, 304,'72', 0, this.platformLevelOne);
        this.add.sprite( 6263, 349,'71', 0, this.platformLevelOne);
        this.add.sprite( 5699, 821,'70', 0, this.platformLevelOne);
        
        
        this.add.sprite( 509, 639,'56', 0, this.platformLevelOne);
        this.add.sprite( 917, 25,'57', 0, this.platformLevelOne);
        this.add.sprite( 1162, 25,'58', 0, this.platformLevelOne);
        this.add.sprite( 191, 795,'21');
        this.add.sprite( 4383, 111,'21');
        
        this.add.sprite( 204, 810,'62', 0, this.platformLevelOne);
        this.add.sprite( 4395, 130,'62', 0, this.platformLevelOne);
        
        this.add.sprite( 1224, 31,'48', 0, this.platformLevelOne);
        this.add.sprite( 918, 376,'36', 0, this.platformLevelOne);
        this.add.sprite( 3481, 378,'36', 0, this.platformLevelOne);
        this.add.sprite( 6175, 396,'36', 0, this.platformLevelOne);
        
        this.add.sprite( 802, 892,'30');
        this.add.sprite( 411, 463,'30');
        this.add.sprite( 802 + 45, 892,'65', 0, this.platformLevelOne);
        this.add.sprite( 411 + 45, 463,'65', 0, this.platformLevelOne);
        
        this.add.sprite( 2338, 406,'31');
        this.add.sprite( 2731, 78,'31');
        this.add.sprite( 4645, 214,'31');
        this.add.sprite( 5036, 541,'31');
        
        this.add.sprite( 2338, 406 + 65,'67', 0, this.platformLevelOne);
        this.add.sprite( 2731, 78 + 65,'67', 0, this.platformLevelOne);
        this.add.sprite( 4645, 214 + 65,'67', 0, this.platformLevelOne);
        this.add.sprite( 5036, 541 + 65,'67', 0, this.platformLevelOne);
        
        this.add.sprite( 2642, 290,'33');
        this.add.sprite( 2766, 259,'33');
        this.add.sprite( 4769, 464,'33');
        this.add.sprite( 4677, 388,'33');
        
        this.add.sprite( 2642 +15, 290 +14,'64', 0, this.platformLevelOne);
        this.add.sprite( 2766 +15, 259 +14,'64', 0, this.platformLevelOne);
        this.add.sprite( 4769 +15, 464 +14,'64', 0, this.platformLevelOne);
        this.add.sprite( 4677 +15, 388 +14,'64', 0, this.platformLevelOne);
        
        
        this.add.sprite( 752, 36,'50', 0, this.platformLevelOne);
        this.add.sprite( 3822, 960,'49', 0, this.platformLevelOne);
        this.add.sprite( 3822, 792 ,'50', 0, this.platformLevelOne);
        this.add.sprite( 6492, 810 ,'50', 0, this.platformLevelOne);
        this.add.sprite( 6492, 980,'49', 0, this.platformLevelOne);
        
        this.add.sprite( 800, 406,'38', 0, this.platformLevelOne);
        this.add.sprite( 3752, 450,'38', 0, this.platformLevelOne);
        this.add.sprite( 6426, 469,'38', 0, this.platformLevelOne);
        
        this.add.sprite( 3005, 807,'48', 0, this.platformLevelOne);
        this.add.sprite( 5705, 833,'48', 0, this.platformLevelOne);
        
        this.add.sprite( 2284, 154,'39', 0, this.platformLevelOne);
        this.add.sprite( 5087, 287,'39', 0, this.platformLevelOne);
        this.add.sprite( 1037, 639,'39', 0, this.platformLevelOne);
        this.add.sprite( 1037, 587,'39', 0, this.platformLevelOne);
        this.add.sprite( 1367, 868,'41', 0, this.platformLevelOne);
        this.add.sprite( 3068, 36,'41', 0, this.platformLevelOne);
        this.add.sprite( 5739, 54,'41', 0, this.platformLevelOne);
        this.add.sprite( 1689, 481,'40', 0, this.platformLevelOne);
        this.add.sprite( 2833, 232,'40', 0, this.platformLevelOne);
        this.add.sprite( 805, 245,'44', 0, this.platformLevelOne);
        this.add.sprite( 3764, 626,'44', 0, this.platformLevelOne);
        this.add.sprite( 6438, 642,'44', 0, this.platformLevelOne);
        this.add.sprite( 2120, 169,'46', 0, this.platformLevelOne);
        this.add.sprite( 5261, 303,'46', 0, this.platformLevelOne);
        this.add.sprite( 1815, 747,'46', 0, this.platformLevelOne);
        this.add.sprite( 1769, 375,'46', 0, this.platformLevelOne);
        this.add.sprite( 1914, 223,'42', 0, this.platformLevelOne);
        this.add.sprite( 1689, 223,'43', 0, this.platformLevelOne);

        this.add.sprite( 4781,650,'55', 0, this.platformLevelOne);
        this.add.sprite( 4924,215,'73', 0, this.platformLevelOne);
        this.add.sprite( 4924,0,'73', 0, this.platformLevelOne);
        this.add.sprite( 4924,-13,'74', 0, this.platformLevelOne);


        this.add.sprite( 6630,110,'76', 0, this.platformLevelOne);
        this.add.sprite( 5383, 223,'75', 0, this.platformLevelOne);
        this.add.sprite( 4596, 873,'27', 0, this.platformLevelOne);
        this.add.sprite( 4596, 934,'27', 0, this.platformLevelOne);
        this.add.sprite( 5012, 20,'45', 0, this.platformLevelOne);
        this.add.sprite( 2251, -112,'45', 0, this.platformLevelOne);
        this.add.sprite( 4332, -38,'26', 0, this.platformLevelOne);
        this.add.sprite( 4394, -38,'26', 0, this.platformLevelOne);
        this.add.sprite( 4457, -38,'26', 0, this.platformLevelOne);
        this.add.sprite( 4746, 922,'35');
        this.add.sprite( 4762, 937,'63', 0, this.platformLevelOne);
        
        var shadow =this.add.sprite( 1139, 160,'52', 0, this.platformLevelOne);
        shadow.alpha = 0.3;
         var shadow2 =this.add.sprite( 3004, 321,'52', 0, this.platformLevelOne);
        shadow2.alpha = 0.3;
         var shadow3 =this.add.sprite( 5658, 353,'52', 0, this.platformLevelOne);
        shadow3.alpha = 0.3;
        
        var wheel = this.add.sprite( 1159, 183,'51', 0, this.platformLevelOne);
        var wheel2 = this.add.sprite( 3024, 351,'51', 0, this.platformLevelOne);
        var wheel3 = this.add.sprite( 5680, 372,'51', 0, this.platformLevelOne);
        
        this.spinWheel1 = this.add.sprite( 1372.5, 395,'54', 0, this.platformLevelOne);
        this.spinWheel1.anchor.setTo(0.5, 0.5);

        this.spinWheel2 = this.add.sprite( 3239, 565,'53', 0, this.platformLevelOne);
        this.spinWheel2.anchor.setTo(0.5, 0.5);

        this.spinWheel3 = this.add.sprite( 5892, 588,'54', 0, this.platformLevelOne);
        this.spinWheel3.anchor.setTo(0.5, 0.5);


        this.platformLevelOne.setAll('body.immovable', true);




        //The Moving Platforms

        this.circleGroup = this.game.add.group();
        this.circleGroup.enableBody = true;
        this.circleGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        for(var i = 0; i < 2; i++){
            var move = this.add.sprite( this.CircleYMoveX[i], this.CircleYMoveY[i],'circle', 0, this.circleGroup);
            move.anchor.setTo(0.5, 0.5);
        }
        this.circleTween = this.game.add.tween(this.circleGroup).to({y: this.circleGroup.y - 120 }, 1500 + Math.random() * 3000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
        this.circleGroup.setAll('body.immovable', true);



        this.VerticalSharpHorizontalGroup = this.game.add.group();
        this.VerticalSharpHorizontalGroup.enableBody = true;
        this.VerticalSharpHorizontalGroup.physicsBodyType = Phaser.Physics.ARCADE;

        
        //add vertical sharp pillr
         for(var i = 0; i < 14; i++){
          var move = this.add.sprite( this.vetricalSharpX[i], this.vetricalSharpY[i],'verticalPillars', 0, this.VerticalSharpHorizontalGroup);
          move.body.moves = false;
          this.assignpillarmovment(move);
        }
        this.VerticalSharpHorizontalGroup.setAll('body.immovable', true);


        this.shortSharpHorizontalPillar = this.game.add.group();
        this.shortSharpHorizontalPillar.enableBody = true;
        this.shortSharpHorizontalPillar.physicsBodyType = Phaser.Physics.ARCADE;
        
          //add short sharp horozontal pillr
         for(var i = 0; i < 12; i++){
             var move = this.add.sprite( this.shortHorozantalX[i], this.shortHorozantalY[i],'shortSharp', 0, this.shortSharpHorizontalPillar);
             move.body.moves = false;
             this.assignpillarhorozontalmovment(move);
        }
        this.shortSharpHorizontalPillar.setAll('body.immovable', true);
    
        this.shortsharpHorizontalTwo = this.game.add.group();
        this.shortsharpHorizontalTwo.enableBody = true;
        this.shortsharpHorizontalTwo.physicsBodyType = Phaser.Physics.ARCADE;
        
        //add short sharp horozontal pillr
         for(var i = 0; i < 4; i++){
            var move = this.add.sprite( this.longSmoothVerticalX[i], -480,'47', 0, this.shortsharpHorizontalTwo);
            move.body.moves = false;
            this.assignpillarSharphorozontalmovment(move);
        }
        this.shortsharpHorizontalTwo.setAll('body.immovable', true);


        this.SmallSmoothVerticalPillarGroup = this.game.add.group();
        this.SmallSmoothVerticalPillarGroup.enableBody = true;
        this.SmallSmoothVerticalPillarGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        //add small smooth vertical pillr
         for(var i = 0; i < 4; i++){
            var move = this.add.sprite( this.smallSmoothVerticalX[i], this.smallSmoothVerticalY,'smallSmoothVertical', 0, this.SmallSmoothVerticalPillarGroup);
            move.body.moves = false;
            this.assignpillarSharpverticalmovment(move);
        }
        this.SmallSmoothVerticalPillarGroup.setAll('body.immovable', true);

    },


    assignpillarmovment: function(move){

       if(this.isTheLevelPaused === false){
            pillarPosition = Math.floor(this.rnd.realInRange(25, 40));
            pillardelay = this.rnd.integerInRange(1000, 3000);

            this.SharpVerticalTween = this.game.add.tween(move).to({y: move.y - pillarPosition }, 1500 + Math.random() * 3000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
            this.SharpVerticalTween.onComplete.add(this.stopPillar, this);
        }
     },

    stopPillar:function(move){
        this.assignpillarmovment(move);
     },

    assignpillarhorozontalmovment: function(move){

       if(this.isTheLevelPaused === false){
            pillarPosition = Math.floor(this.rnd.realInRange(25, 40));
            pillardelay = this.rnd.integerInRange(1000, 3000);

            this.SharpHorozontalTween = this.game.add.tween(move).to({x: move.x - pillarPosition }, 1500 + Math.random() * 3000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
            this.SharpHorozontalTween.onComplete.add(this.stopHorozontalPillar, this);
        }
     },

    stopHorozontalPillar:function(move){
        this.assignpillarhorozontalmovment(move);
     },

    assignpillarSharphorozontalmovment: function(move){

       if(this.isTheLevelPaused === false){
            pillarPosition = Math.floor(this.rnd.realInRange(40, 60));
            pillardelay = this.rnd.integerInRange(1000, 3000);

            this.shortSharpHorozontal = this.game.add.tween(move).to({y: move.y - pillarPosition }, 1500 + Math.random() * 3000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
            this.shortSharpHorozontal.onComplete.add(this.stopSharpHorozontalPillar, this);
        }
     },

    stopSharpHorozontalPillar:function(move){
        this.assignpillarSharphorozontalmovment(move);
     },

    assignpillarSharpverticalmovment: function(move){

       if(this.isTheLevelPaused === false){
            pillarPosition = Math.floor(this.rnd.realInRange(60, 100));
            pillardelay = this.rnd.integerInRange(1000, 3000);

            this.smallSmoothVerticalTween = this.game.add.tween(move).to({y: move.y - pillarPosition }, 1500 + Math.random() * 3000, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);
            this.smallSmoothVerticalTween.onComplete.add(this.stopSharpHorozontalPillar, this);
        }
     },

    stopSharpHorozontalPillar:function(move){
        this.assignpillarSharpverticalmovment(move);
     },


    gameElement: function(){


        //the pause button variable
        this.pauseButtonLevel = this.game.add.button(920, 45, 'pause', this.pauseGameLevel, this, 2, 1, 0);
        this.pauseButtonLevel.fixedToCamera = true;
        this.pauseButtonLevel.anchor.setTo(0.5, 0.5);
        this.pauseButtonLevel.scale.setTo(0.5);


        //adding glitch button 
        this.glitchButton = this.game.add.group();
        this.glitchButton.enableBody = true;
        this.glitchButton.physicsBodyType = Phaser.Physics.ARCADE;
        
        for (var i =0; i <12; i++){
            var button = this.add.sprite(this.buttonX[i], this.buttonY[i], 'glitch-button' , 0, this.glitchButton);
            }


        //adding instruction button 
        this.instructionbox = this.game.add.group();
        this.instructionbox.enableBody = true;
        this.instructionbox.physicsBodyType = Phaser.Physics.ARCADE;
        
        for (var i =0; i <4; i++){
            var button = this.add.sprite(this.instructionboxX[i], this.instructionboxY[i], 'box' , 0, this.instructionbox);
            button.scale.setTo(0.15);
            }


        //adding the speech dialog
        this.buttonSpeech = this.game.add.group();
        this.buttonSpeech.enableBody = true;
        this.buttonSpeech.physicsBodyType = Phaser.Physics.ARCADE;

         for (var i =0; i <12; i++){
            var speech = this.add.sprite(this.buttonX[i] - 20, this.buttonY[i] - 140, 'havescript' , 0, this.buttonSpeech);
            speech.scale.setTo(0.4);
            }
        this.buttonSpeech.setAll('alpha', 0);



        //adding the instruction speech dialog
        this.instructiobbuble = this.game.add.group();
        this.instructiobbuble.enableBody = true;
        this.instructiobbuble.physicsBodyType = Phaser.Physics.ARCADE;

         for (var i =0; i <4; i++){
            var speech = this.add.sprite(this.instructionboxX[i] - 20, this.instructionboxY[i] - 140, 'instuctionbuuble' , 0, this.instructiobbuble);
            speech.scale.setTo(0.4);
            }
        this.instructiobbuble.setAll('alpha', 0);



        //adding walking enemy
        this.enimie = this.game.add.group();
        this.enimie.enableBody = true;
        this.enimie.physicsBodyType = Phaser.Physics.ARCADE;
          
        for (var i =0; i < 10; i++){
           var enemy = this.add.sprite(this.enemyX[i], this.enemyY[i] + 50, 'enimie', 0, this.enimie);
            enemy.body.collideWorldBounds = true;
            enemy.anchor.setTo(0.5, 0.5);
            enemy.scale.setTo(0.8);

            }

        this.enemyTween = this.game.add.tween(this.enimie).to({x: this.enimie.x - 120 }, 5000 , Phaser.Easing.Linear.NONE, true, 0, Infinity, true);   
        this.enimie.callAll('animations.add', 'animations', 'left-enimie', [0,1,2], 3, true);
        this.enimie.callAll('animations.add', 'animations', 'right-enime', [3,4,5], 3, true);
        this.enimie.callAll('animations.play', 'animations', 'left-enimie');



        // adding flying enemy
        this.flyingEnimie = this.game.add.group();
        this.flyingEnimie.enableBody = true;
        this.flyingEnimie.physicsBodyType = Phaser.Physics.ARCADE;
        
         for (var i =0; i < 9; i++){
             var flyingEnemy = this.add.sprite(this.FlyingenemyX[i], this.FlyingenemyY[i], 'flyingEnimie', 0, this.flyingEnimie);
            flyingEnemy.body.bounce.y = 0.2;
            flyingEnemy.body.collideWorldBounds = true;
            flyingEnemy.anchor.setTo(0.5, 0.5);
            flyingEnemy.scale.setTo(0.8);
             
            flyingEnemy.animations.add('left-enimie', [0,1,2], 6, true);
            flyingEnemy.animations.play('left-enimie');
            
         }

         this.flyingTween =this.game.add.tween(this.flyingEnimie).to({y: this.flyingEnimie.y - 120 }, 4000 , Phaser.Easing.Linear.NONE, true, 0, Infinity, true);


        var usbposition = Math.round(Math.random()*4);

        //add USB
        this.usb = this.add.sprite( this.usbPositionX[usbposition], this.usbPositionY[usbposition],'77');
        this.game.physics.arcade.enable(this.usb);
        this.usb.anchor.setTo(0.5, 0.5);
        this.usb.scale.setTo(0.3);
        console.log(usbposition);

        //exitdoor
        this.exit = this.add.sprite( 6709, 40,'exit');
        this.game.physics.arcade.enable(this.exit);
        this.exit.body.immovable = true;

       

        //create score board that follows camera
        this.timeboard = this.add.sprite( 100 , 50, 'timeBoard');
        this.timeboard.fixedToCamera = true;
        this.timeboard.anchor.setTo(0.5, 0.5);
        this.timeboard.scale.setTo(0.6);

        //add time text
        this.timeText = this.add.text(95, 40, this.gametime, this.fontStyle);
        this.timeText.fixedToCamera = true;


        //adding the player
        this.player = this.add.sprite(50, this.world.height, 'player2');
        this.game.physics.arcade.enable(this.player);
        this.player.enableBody = true;
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;
        this.player.allowGravity = true;
        this.player.anchor.setTo(0.5, 0.5);
        this.player.scale.setTo(0.4);

        this.player.animations.add('left', [0,1,2], 10, true);
        this.player.animations.add('right', [4,5,6], 10, true);

        if(this.player.x > 50){
            this.player.x = 50;
        }

        this.camera.follow(this.player);

        //adding Audio file
        this.jumpSound = this.game.add.audio('jump');
        this.select = this.game.add.audio('select');
        this.enimyKill = this.game.add.audio('enemiykill');
        this.gameMusic = this.game.add.audio('gameMusic', 0 , true);
        this.level2 = this.game.add.audio('lel2');
        this.noGo = this.game.add.audio('error');
        this.getUSBsound = this.game.add.audio('getUSB');
        this.glitchSound = this.game.add.audio('glitchSound');
        this.playerDeathSound = this.game.add.audio('playerDeath');
        this.gameMusic.play('', 0, true);
        this.gameMusic.volume = 0.35;


    },

    updateTimer: function(){

       if(this.isTheLevelPaused === false){

            if(this.gametime > 0){
                this.gametime -= 1;
                this.timeText.text = this.gametime;
                }
        }
    },

    pauseGameLevel: function(pointer){

        if(this.isTheLevelPaused === false){

            this.isTheLevelPaused = true;
            this.gameMusic.stop();

            this.circleTween.pause();
            this.SharpVerticalTween.pause();
            this.SharpHorozontalTween.pause();
            this.shortSharpHorozontal.pause();
            this.smallSmoothVerticalTween.pause();

            //Pause the enemy
            this.enemyTween.pause();
            this.flyingTween.pause();
            this.enimie.callAll('animations.stop', 'animations');

            //pause teh player
            this.player.allowGravity = false;
            this.player.body.gravity.y = 0;
            this.player.body.velocity.y = 0;
            this.player.body.velocity.x = 0;
            this.player.body.gravity.x = 0;

            this.player.animations.stop();
            this.showPausePannel();

          
        }

    },

    PlayGame: function(){

        this.hidethepausePaneel();

        this.circleTween.resume();
        this.SharpVerticalTween.resume();
        this.SharpHorozontalTween.resume();
        this.shortSharpHorozontal.resume();
        this.smallSmoothVerticalTween.resume();

        this.enemyTween.resume();
        this.flyingTween.resume();
        this.enimie.callAll('animations.play', 'animations', 'left-enimie');

        this.player.body.gravity.y = 300;

        this.gameMusic.play('', 0, true);
        this.gameMusic.volume = 0.35;
    },

    showPausePannel: function(){

        this.pauseScreen = this.add.sprite(1000, 0, 'pauseScreen');
        this.pauseScreen.fixedToCamera = true;
        this.pauseScreen.cameraOffset.setTo(1000, 0);
        
        this.continuelevelbtn =  this.game.add.button(1000, 385, 'continue', function(){
            
            this.isTheLevelPaused = false;
            this.PlayGame();

        }, this,2,0,1);
        this.continuelevelbtn.fixedToCamera = true;
        this.continuelevelbtn.scale.setTo(0.6);
        this.continuelevelbtn.cameraOffset.setTo(1000, 385);

        this.returntomainbtn = this.game.add.button(1000, 450, 'back', function(){
            this.ResetTheGame();
            this.game.state.start('MainMenu');
            
        }, this,2,0,1 );
        this.returntomainbtn.fixedToCamera = true;
        this.returntomainbtn.scale.setTo(0.6);
        this.returntomainbtn.cameraOffset.setTo(1000, 450);


        //add the tween
        this.game.add.tween(this.pauseScreen.cameraOffset).to({x: 447}, 1000, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.continuelevelbtn.cameraOffset).to({x: 690}, 1000, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.returntomainbtn.cameraOffset).to({x: 690}, 1000, Phaser.Easing.Bounce.Out, true);
    },

    hidethepausePaneel: function(){

        this.game.add.tween(this.pauseScreen.cameraOffset).to({x: 1000}, 500, Phaser.Easing.Linear.NONE, true);
        this.game.add.tween(this.continuelevelbtn.cameraOffset).to({x: 1000}, 500, Phaser.Easing.Linear.NONE, true);
        this.game.add.tween(this.returntomainbtn.cameraOffset).to({x: 1000}, 500, Phaser.Easing.Linear.NONE, true);


    },



    glitch: function(player, button){

       var buttonPosition =  this.glitchButton.getIndex(button);
       console.log(buttonPosition);

       

        if(button.frame == 0){

            if (this.glitcCount === false){
                    
                this.select.play();
                button.frame = 1;
                this.enimie.alpha = 0;
                this.flyingEnimie.alpha = 0;
                this.glitcCount = true;
                    
                //pause the pillars
                this.circleTween.pause();
                this.SharpVerticalTween.pause();
                this.SharpHorozontalTween.pause();
                this.shortSharpHorozontal.pause();
                this.smallSmoothVerticalTween.pause();


                this.playglitch();
                    
                this.counterMove = false;
                player.paused = true;
                this.player.animations.stop();
                    
                //change glitch counter
                this.glitcCount = true;

                //start key timer
                this.time.events.add( 2000, this.updateglitch, this);
                }

            if (this.glitcCount === true){

                this.buttonSpeech.getAt(buttonPosition).alpha = 1;

                 //start key timer
                this.time.events.add( 2000, function(){
                    this.buttonSpeech.getAt(buttonPosition).alpha = 0;
                }, this);

                }

            }
    },

    playglitch: function (){

        this.gameMusic.volume = 0;
        this.glitchSound.play();
        this.glitchSound.volume = 0.1;
        this.screenGlitchEffect = this.game.add.sprite(0, 0, 'theGlitch');
        this.screenGlitchEffect.fixedToCamera = true;
        this.screenGlitchEffect.animations.alpha = 0.1;
        this.screenGlitchEffect.animations.add('Glitchenis', [0,1,2], 6, true);
        this.screenGlitchEffect.play('Glitchenis');

    },

    updateglitch: function(){

        //show enemy again
        this.enimie.alpha = 1;
        this.flyingEnimie.alpha = 1;
        this.screenGlitchEffect.alpha = 0;
        this.screenGlitchEffect.animations.stop();

        //change and move glitch counter
        this.glitcCount = true;
        this.counterMove = true;

        //animate pillars again
        this.circleTween.resume();
        this.SharpVerticalTween.resume();
        this.SharpHorozontalTween.resume();
        this.shortSharpHorozontal.resume();
        this.smallSmoothVerticalTween.resume();
            
        //replay game music 
        this.gameMusic.volume = 0.35;

    },

    enemiKill: function(player, enemy){
    
        if(this.glitcCount === false){
            player.kill();
            this.YoulosethisGame();
        }
        
        if(this.glitcCount === true){
            this.enimyKill.play();
            this.glitcCount = false;
            this.makeGhost(enemy);
            enemy.kill();
            
        }
    }, 


    makeGhost: function(b) {
        this.enemyGhost = this.add.sprite(b.x-20, b.y-180, 'ghost');
        this.enemyGhost.anchor.setTo(0.5, 0.5);
        this.enemyGhost.scale.x = b.scale.x;
        this.physics.enable(this.enemyGhost, Phaser.Physics.ARCADE);
        this.enemyGhost.enableBody = true;
        this.enemyGhost.body.velocity.y = -650;
    },


    YoulosethisGame: function(){
        this.gameMusic.stop();

        this.playerDeathSound.play();
        this.playerDeathSound.volume = 0.4;

        this.loseScreen = this.add.sprite(0, 640, 'YouLoseLevel1');
        this.loseScreen.fixedToCamera = true;
        this.loseScreen.cameraOffset.setTo(0, 640);
        
        
        this.restartthislevelbtn = this.game.add.button(500, 1000, 'restart', function(){

            //restart the satae
            this.restarttheGame = true;

            this.ResetTheGame();
            this.world.setBounds(0, 0, 6784, 1000);
           
            this.game.state.start('LevelOne');

        }, this, 2,1,0 );
        this.restartthislevelbtn.fixedToCamera = true;
        this.restartthislevelbtn.scale.setTo(0.5);
        this.restartthislevelbtn.cameraOffset.setTo(500, 640);

        this.bacttothemainscreenBtn = this.game.add.button(420, 1000, 'backtoMainTheMenu', function(){

            this.ResetTheGame();
            this.game.state.start('MainMenu');

        }, this,2,1,0 );
        this.bacttothemainscreenBtn.fixedToCamera = true;
        this.bacttothemainscreenBtn.scale.setTo(0.5);
        this.bacttothemainscreenBtn.cameraOffset.setTo(420, 640);

        //add their tween 
        this.game.add.tween(this.loseScreen.cameraOffset).to({y:0}, 500, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.restartthislevelbtn.cameraOffset).to({y:400}, 1000, Phaser.Easing.Bounce.Out, true);
        this.game.add.tween(this.bacttothemainscreenBtn.cameraOffset).to({y:400}, 1000, Phaser.Easing.Bounce.Out, true);
    },


    playerGetKey: function(){

        this.getflash = this.add.sprite(this.player.x , this.player.y, 'pixelWithFlash');
        this.getflash.anchor.setTo(0.5, 0.5);
        this.getflash.scale.setTo(0.45);
        this.player.alpha = 0;
        this.getUSBsound.play();
        this.getUSB = true;
        this.usb.kill();

        this.time.events.add( 2000, this.removecharachter, this);

   },


   removecharachter: function(){

     this.getflash.kill();
     this.player.alpha = 1;

   },

   checkTheTime: function(){

        if( this.gametime === 0){
            this.outofTime = true;
            this.player.kill();
            this.YoulosethisGame();
        }

    },

   nextLvl: function (){

        if(this.getUSB === true){

            this.gameMusic.stop();
            this.player.animations.stop();
            this.level2.play();
            this.counterMove = false;
            this.time.events.add( 2000, this.nextlvlstart, this);

            }

            if(this.getUSB === false) {
                
                this.noGo.play(); 
                this.noGovolume = 0.1;
            }
   },

   nextlvlstart: function(){

        this.ResetTheGame();
        this.state.start('BossLevelStory');   

   },
    instructions: function(player, box){

        var boxPosition =  this.instructionbox.getIndex(box);
           console.log(boxPosition);

        this.instructiobbuble.getAt(boxPosition).alpha = 1;

        //start key timer
        this.time.events.add( 2000, function(){
            this.instructiobbuble.getAt(boxPosition).alpha = 0;
        }, this);

    },

    ResetTheGame: function(){

        //the pause elements trigger
        this.isTheLevelPaused = false;
        this.TweenPauseElement = null
        this.world.setBounds(0, 0, 960, 640);

        this.circleTween = null;
        this.SharpVerticalTween = null;
        this.SharpHorozontalTween = null;
        this.shortSharpHorozontal = null;
        this.smallSmoothVerticalTween = null;


        //bossworld build
        this.TheBackgroundLevelOne = null;

        this.platformLevelOne = null;
        this.circleGroup = null;
        this.VerticalSharpHorizontalGroup = null;
        this.shortSharpHorizontalPillar = null;
        this.shortsharpHorizontalTwo = null;
        this.SmallSmoothVerticalPillarGroup = null;

        //player variables
        this.MovmentPlayer = null;
        this.canPlayerMove = true;
        this.player = null;
        this.jumpButton = null;

        //glitch Varables
        this.glitcCount = false;
        this.screenGlitchEffect = null;
        this.glitchButton = null;
        this.counterMove = true;

        //enemy reset variables
        this.enemyTween = null;
        this.flyingTween = null;
        this.enimie = null;
        this.flyingEnimie = null;
        this.enemyGhost = null;

        //screen elements
        this.loseScreen = null;
        this.bacttothemainscreenBtn = null;
        this.restartthislevelbtn = null;

        //usb key variables
        this.getflash = null;
        this.usb = null;
        this.getUSB = false;

        //exit door
        this.exit = null;

        //the button speech
        this.buttonSpeech = null;
        this.instructionbox = null;
        this.instructiobbuble = null;

        //the pause button 
        this.pauseButtonLevel = null;
        this.pauseScreen = null;
        this.continuelevelbtn = null;
        this.returntomainbtn = null;

        //Game Time Elements
        this.timeboard = null;
        this.timeText = null;
        this.fontStyle = {font: "14px Arial", fill: "#fff", stroke: "#575957", strokeThickness: 3, align: "center"};
        this.gametime = 220;
        outofTime = false;

        
        //audio variables
        this.gameMusic = null;
        this.jumpSound = null;
        this.select = null;
        this.enimyKill = null;
        this.level2 = null;
        this.noGo = null;
        this.getUSBsound = null;
        this.glitchSound = null;
        this.playerDeathSound = null;
        this.enemyGhost = null;
    },



    update: function(){

            if(this.restarttheGame === true){

                if(this.player.x > 50){
                this.player.x = 50;
                }
                this.restarttheGame = false;
            }
            

            //constant collision checking
            this.game.physics.arcade.collide(this.glitchButton, this.platformLevelOne);
            this.game.physics.arcade.collide(this.flyingEnimie, this.platformLevelOne);
            this.game.physics.arcade.collide(this.enimie, this.platformLevelOne);

            this.game.physics.arcade.collide(this.player, this.platformLevelOne);
            this.game.physics.arcade.collide(this.player, this.circleGroup);
            this.game.physics.arcade.collide(this.player, this.VerticalSharpHorizontalGroup);
            this.game.physics.arcade.collide(this.player, this.shortSharpHorizontalPillar);
            this.game.physics.arcade.collide(this.player, this.shortsharpHorizontalTwo);
            this.game.physics.arcade.collide(this.player, this.SmallSmoothVerticalPillarGroup);

            if(this.isTheLevelPaused === false){

                
                //conditioned collision detection
                this.game.physics.arcade.overlap(this.player, this.instructionbox, this.instructions, null, this);
                this.game.physics.arcade.overlap(this.player, this.glitchButton, this.glitch, null, this);
                this.game.physics.arcade.collide(this.player, this.enimie, this.enemiKill, null, this);
                this.game.physics.arcade.collide(this.player, this.flyingEnimie, this.enemiKill, null, this);
                this.game.physics.arcade.overlap(this.player, this.usb, this.playerGetKey, null, this);
                this.game.physics.arcade.collide(this.player, this.exit, this.nextLvl, null, this);

                //update time function
                if(this.outofTime === false){
                     this.checkTheTime();
                }
               


                if(this.glitcCount === false || this.counterMove === true){
                    //spining the whells
                    this.spinWheel1.rotation += 0.02;
                    this.spinWheel2.rotation += 0.02;
                    this.spinWheel3.rotation += 0.02;
                }

                //add player movment
                this.player.body.velocity.x = 0;
                    
                //player movment
                if(this.counterMove === true){

                    if(this.MovmentPlayer.left.isDown){
                        this.player.body.velocity.x = -100;
                        this.player.animations.play('left');
                    }

                    else if(this.MovmentPlayer.right.isDown){
                        this.player.body.velocity.x = 100;
                         this.player.animations.play('right');
                    }

                    else{
                         this.player.animations.stop();
                         this.player.frame = 3;
                    }

                    if(this.jumpButton.isDown && (this.player.body.onFloor() || this.player.body.touching.down)){
                        this.jumpSound.play();
                        this.jumpSound.volume = 0.1;
                        this.player.animations.stop();
                        this.player.body.velocity.y = -260;
                    }
                }
            }

    }
};