
function draw(game,nameA,posx,posy,wi,he,color) {  
var object=game.add.sprite(0,0,nameA);
object.x=posx;
object.y=posy;
object.width=wi;
object.height=he;
object.tint=color;
return object
}

function cc(g) {
		var background=[]
			background.player=draw(g,"rect",0,0,120,180,red)
			background.opponent=draw(g,"rect",200,400,120,180,blue)
			return background
}
