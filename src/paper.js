//le papier général qui sert de réception au touch et qui équivaut en hauteur 
//au nombre de papiers
function drawPaperMain(e,game,nameA,posx,posy,wi,tintColor,valueAlpha) {  

	var e=game.add.sprite(posx,posy,nameA);
	e.x=posx;
	e.y=posy;
	e.width=wi;
	e.height=wi*9+9;
	function tint() {
		if ( tintColor == "none" ) {
		} else {
			e.tint=tintColor
		}		
	}
	tint()
	e.alpha=valueAlpha;
	//drapeau pour dire si oui ou non le rouleau tombe vers le bas
	e.isFalling=true;
	e.inputEnabled=true;

	//function pour la détection du touch
	function onHold(e, pointer) {
		e.isFalling=false
		console.log("hold")// do something wonderful here
		}
	function onOver(e, pointer) {
		e.isFalling=true
		console.log("over")// do something wonderful here
		}

	//pour permettre la détection du touch
	e.events.onInputDown.add(onHold,this);
	e.events.onInputDown.add(onOver,this);
	return e
}

//papier seul qui constitue le rouleau qui défile
function drawPaper(e,game,nameA,posx,posy,wi,tintColor,valueAlpha) {  

	var e=game.add.sprite(0,0,nameA);
	e.x=0;
	e.y=0;
	e.width=wi;
	e.height=wi;
	function tint() {
		if ( tintColor == "none" ) {
		} else {
			e.tint=tintColor
		}		
	}
	tint()
	e.alpha=valueAlpha
		return e
}

//rouleau 
function drawRoll(e,Group,game,row,line,w,posx,posy) {
	var espacement=0
	var e=[];
	e.paper=[];
	for (var j = 0; j < line; j++) {
		e.paper[j] = [];
		for (var i = 0; i < row; i++) {
			e.paper[j][i] = drawPaper(e,game,"paper",0,0,w+2,black,0);
			e.paper[j][i].fwd = drawPaper(e,game,"paper",0,0,w,"none",1);
			
			e.paper[j][i].x = posx-w*.5+i*(w+espacement);
			e.paper[j][i].y =posy+(j*(w+espacement));
			e.paper[j][i].fwd.x = posx-w*.5+i*(w+espacement);
			e.paper[j][i].fwd.y =posy+(j*(w+espacement));
			Group.add(e.paper[j][i]);
			Group.add(e.paper[j][i].fwd);
		};
	};
	e.main=drawPaperMain(e,game,"rect",posx-w*.5,posy,w,black,0);
	Group.add(e.main);

	//function pour faire défiler le rouleau de papier vers le bas
	e.fall = function() {
		if (e.main.input.pointerOver()) {
		} else {	 
	Group.y+=.5	
	}
	}
	return e 
}

//fonction finale qui dessine le rouleau avec les papiers + papier général
function drawP(e,Group,game,posx,posy) {
	var e=drawRoll(e,Group,game,1,9,115,posx,posy)
		return e
}
