drawSprite = function (Group,game,nameA,posx,posy,width,height,anchor,color,alpha) {

	var e=game.add.sprite(posx,posy,nameA)
	e.x=posx;
	e.y=posy;
	e.width=width;
	e.height=height;
	e.anchor.set(anchor);
	if (color==0) {
	} else {
	e.tint=color
	}
	e.alpha=alpha;;
	//laisse la possibilité d'ajouter ou non un groupe
	if (Group==0) {
	} else {
	Group.add(e);
	}
	return e
}

//functions utiles
function pseudoAnchorX(obj) {
obj.position.x=obj.position.x-obj.width/2
}	
function pseudoAnchorY(obj) {
obj.position.y=obj.position.y-obj.height/2
}

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
