c = function (Group,game,nameA,posx,posy,width,height,anchor,color,alpha) {

	Phaser.Sprite.call(this,game,posx,posy,nameA)
	this.x=posx;
	this.y=posy;
	this.width=width;
	this.height=height;
	this.anchor.set(anchor);
	if (color==0) {
	} else {
	this.tint=color
	}
	this.alpha=alpha;;
	//laisse la possibilité d'ajouter ou non un groupe
	if (Group==0) {
		console.log("pas de groupe")
	} else {
	Group.add(this);
	}
	game.add.existing(this);
}

c.prototype = Object.create(Phaser.Sprite.prototype);
c.prototype.constructor = c;

c.prototype.update = function() {
//this.angle += 2;
};

//TRANSITIONS
//Déplacement du menu permettant de sélectionner les papiers
displacement_menu=function(obj,game) {
	game.add.tween(obj.scale).to({x:1,y:1},300,Phaser.Easing.Bounce.Out,true,2000);

	//function pour le déplacement du retour
	function displacement_menu_back(){
		e.transitionback=game.add.tween(obj).to({x:0,y:0},99999,Phaser.Easing.Elastic.Out,true,4);
	}
	//sert de delay
	game.time.events.add(Phaser.Timer.SECOND * 5, displacement_menu_back, this);
}
