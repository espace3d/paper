var theGame = function(game){
	spriteNumber = null;
	number = 0;
	workingButtons = true;
	higher = true;
	score = 0;
	text = null;
	//paperopponent=null;
	//paperplayer=null;
	//paper=null;
	background = null;
	menuPaper=null;
	s=null;
	timer=null;
	text=null;
	paper_player = null;
	paper_opponent = null;
	backgroundG=null;
}

theGame.prototype = {
	create: function(){

		//ordre des groupes ici
			backgroundG = this.game.add.group();
			playerBackgroundGroup = this.game.add.group();
			opponentBackgroundGroup = this.game.add.group();
			menuPaperGroup = this.game.add.group();
			hudGroup = this.game.add.group();

			playerPapers = this.game.add.group();
			opponentPapers = this.game.add.group();

// declaration des variables via les constructor
			number = Math.floor(Math.random()*10);
			spriteNumber = this.game.add.sprite(160,240,"numbers");
			spriteNumber.anchor.setTo(0.5,0.5);
			spriteNumber.frame = number;	
			var higherButton = this.game.add.button(160,100,"higher",this.clickedHigher,this);
			higherButton.anchor.setTo(0.5,0.5);
			var lowerButton = this.game.add.button(160,380,"lower",this.clickedLower,this);
			lowerButton.anchor.setTo(0.5,0.5);	
			background=drawBackground(this.game,backgroundG)
			paper_player = drawP(this.paper_player,playerBackgroundGroup,this.game,w4*3,0)
			paper_opponent = drawP(this.paper_opponent,opponentPapers,this.game,w4,0)
			backgroundG.add(lowerButton)
			backgroundG.add(higherButton)
			backgroundG.add(spriteNumber)

			//menuPaper=drawMenuPaper(this.menuPaper,menuPaperGroup,this.game)
			text=drawText(this.text,this.game,hudGroup)
			time=drawTime(this.timebackground,this.game)
		},

	update: function(){
				paper_opponent.fall()	
				paper_player.fall()	
		},


	clickedHigher: function(){
			       higher=true;
			       this.tweenNumber(true);
		       },
	clickedLower: function(){
			      higher=false;
			      this.tweenNumber(false);
		      },
	tweenNumber: function(higher){
			     if(workingButtons){
				     workingButtons=false;
				     var exitTween = this.game.add.tween(spriteNumber);
				     exitTween.to({x:420},500);
				     exitTween.onComplete.add(this.exitNumber,this);
				     exitTween.start();
			     }
		     },

	exitNumber: function(){
			    spriteNumber.x = -180;
			    spriteNumber.frame = Math.floor(Math.random()*10);
			    var enterTween = this.game.add.tween(spriteNumber);
			    enterTween.to({x:160},500);
			    enterTween.onComplete.add(this.enterNumber,this);
			    enterTween.start();

		    },

	enterNumber: function(){
			     workingButtons=true;
			     if((higher && spriteNumber.frame<number)||(!higher && spriteNumber.frame>number)){
				     this.game.state.start("GameOver",true,false,score);	
			     }
			     else{  
				     score++;
				     number = spriteNumber.frame;
			     }	
		     },

}
