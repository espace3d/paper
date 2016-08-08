//////////////////////////////////////////////////////////////////////////////////////////
//menupaper

//////////////////////////////////////////////////////////////////////////////////////////
//dessin de la grille
function draw_Grid(e,Group,game,row,line,espacement,wi,he,posx,posy) {
var side = (w2-((row*wi)+espacement))/row	

	var e=[] 
	for (var j = 0; j < line; j++) {
		e[j] = [] 
		for (var i = 0; i < row; i++) {
//fond
			e[j][i] = drawSprite(Group,game,"paper",0,0,wi,he,0,black,0.1) 
			e[j][i].x = posx+side+wi*i+espacement*i
			e[j][i].y =posy+h*.4+(j*(wi+espacement))-wi*2 
			e[j][i].width=wi+2 
			e[j][i].height=he+2 
//icone
			e[j][i].main = drawSprite(Group,game,"iconpaper",0,0,wi,he,0,white,1) 
			e[j][i].main.x = posx+side+wi*i+espacement*i
			e[j][i].main.y =posy+h*.4+(j*(wi+espacement))-wi*2 
			e[j][i].main.width=wi 
			e[j][i].main.height=he 
			Group.add(e[j][i]) 
			Group.add(e[j][i].main) 
		};
	};
	return e
}

//////////////////////////////////////////////////////////////////////////////////////////
//menu 
function drawMenuPaper(e,Group,game) {
	var e=[]
	e.cell_player=draw_Grid(e,Group,game,2,5,25,80,80,w2,0)

		return e
}
