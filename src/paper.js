//le papier général qui sert de réception au touch et qui équivaut en hauteur 
//au nombre de papiers


//rouleau 
function drawRoll(Group,game,row,line,w,posx,posy) {

function drawconstructor() {
var e=drawSprite(0,game,"paper",0,0,w,w,0,0,1);
return e
};
	var espacement=0
	var e=[];
	e.paper=[];
	for (var j = 0; j < line; j++) {
		e.paper[j] = [];
		for (var i = 0; i < row; i++) {
			e.paper[j][i] = drawconstructor() 

			e.paper[j][i].fwd = drawconstructor() 
			
			e.paper[j][i].x = posx-w*.5+i*(w+espacement);
			e.paper[j][i].y =posy+(j*(w+espacement));
			e.paper[j][i].fwd.x = posx-w*.5+i*(w+espacement);
			e.paper[j][i].fwd.y =posy+(j*(w+espacement));
			Group.add(e.paper[j][i]);
			Group.add(e.paper[j][i].fwd);
		};
	};
e.main=drawSprite(Group,game,"rect",posx-w*.5,posy,w,w*9,0,black,0);
e.main.isFalling=true;
e.main.inputEnabled=true;

////function pour faire défiler le rouleau de papier vers le bas
e.fall = function() {
	if (e.main.input.pointerOver()) {
	} else {	 
Group.y+=.5;	
};
};
	return e;
};

//fonction finale qui dessine le rouleau avec les papiers + papier général
function drawP(Group,game,posx,posy) {
	var e=drawRoll(Group,game,1,9,55,posx,posy);
		return e
};
