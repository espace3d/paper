var preload = function(game){}

preload.prototype = {
	preload: function(){ 
          var loadingBar = this.add.sprite(160,240,"loading");
          loadingBar.anchor.setTo(0.5,0.5);
          this.load.setPreloadSprite(loadingBar);
		this.game.load.spritesheet("numbers","assets/numbers.png",100,100);
		this.game.load.image("gametitle","assets/gametitle.png");
		this.game.load.image("play","assets/play.png");
		this.game.load.image("higher","assets/higher.png");
		this.game.load.image("lower","assets/lower.png");
		this.game.load.image("gameover","assets/gameover.png");
		this.game.load.bitmapFont('lucky_black','assets/font_black.png', 'assets/font_black.fnt');
		this.game.load.bitmapFont('lucky','assets/font.png', 'assets/font.fnt');
		this.game.load.image("timer","assets/timer.svg");

		this.game.load.image("back","assets/back.svg");
		this.game.load.image("division","assets/division.png");
		this.game.load.image("paper","assets/paper.png");
		this.game.load.image("stripe","assets/stripe.png");
		this.game.load.image("rect","assets/rect.png");

	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}
