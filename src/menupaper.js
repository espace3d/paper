//dessin des fonds
//si on renseigne "none" pour tintColor et transitionX les fonctions correspondantes ne se lancent pas
function draw_item(e,Group,game,nameA,posx,posy,wi,he,tintColor,valueAlpha,transitionX,transitionY) {  

	var e=game.add.sprite(posx,posy,nameA);
	e.x=posx;
	e.y=posy;
	e.width=wi;
	e.height=he;
	function tint() {
		if ( tintColor == "none" ) {
		} else {
			e.tint=tintColor
			console.log("none.tint")
		}		
	}
	tint()
	e.alpha=valueAlpha;
	Group.add(e);

	function transition() {
		if (transitionX == "none") {
		} else {
	e.transition=game.add.tween(e.position).to({x:transitionX,y:transitionY},700,Phaser.Easing.Elastic.Out,true,2000);
		}		
	}
	transition()

	return e
}


function draw_Grid(e,Group,game,row,line,espacement,wi,he,posx,posy) {
var side = (w2-((row*wi)+espacement))/row	

	var e=[];
	for (var j = 0; j < line; j++) {
		e[j] = [];
		for (var i = 0; i < row; i++) {

			e[j][i] = new c(Group,game,"paper",0,0,wi,he,0,black,0.1);
			e[j][i].x = posx+side+wi*i+espacement*i
			e[j][i].y =posy+h*.4+(j*(wi+espacement))-wi*2;
			e[j][i].width=wi+2;
			e[j][i].height=he+2;

			e[j][i].main = new c(Group,game,"paper",0,0,wi,he,0,white,1);
			e[j][i].main.x = posx+side+wi*i+espacement*i
			e[j][i].main.y =posy+h*.4+(j*(wi+espacement))-wi*2;
			e[j][i].main.width=wi;
			e[j][i].main.height=he;
			Group.add(e[j][i]);
			Group.add(e[j][i].main);
		};
	};
	return e
}




//menu 
function draw_menu(e,Group,game,row,line,wi,he,posx,posy) {

	var e=[];
//fond 
	e.background_player=new c(Group,game,"rect",w2+10,0+10,w2*.9,h*.95,0,grey,.3)
	e.background_player2=new c(Group,game,"rect",0+10,0+10,w2*.9,h*.95,0,grey,.3)
	e.background_player_shadow=new c(Group,game,"motif",w2,0,w2,h,0,grey,.8)

	//e.background_opponent=draw_item(e,Group,game,"rect",0,0,w2,h,red,1,"none",0)

//cellules constituant le menu
	e.cell=draw_Grid(e,Group,game,2,5,25,30,30,w2,0)

	//pour cacher le group avant la transition

	Group.scale.set(0.01)
	Group.anchorY=0.5
	Group.anchorX=0.5
	Group.position.set(0,0)


	//déplacement du menu permettant de sélectionner les papiers
	e.transition=displacement_menu(Group,game)

	return e 
}


//fonction finale qui dessine le rouleau avec les papiers + papier général
function drawMenuPaper(e,Group,game) {
		var e=draw_menu(e,Group,game,2,5,0,20,20,w2,0)
		return e
}
