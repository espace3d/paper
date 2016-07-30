
//background.js
//e for background

//dessins de tous les éléments du décor
function drawBackground(g,group) {
	var e=[]

		e.player=new c(group,g,"rect",0,0,w,h,0,red,1);
		e.opponent=new c(group,g,"rect",w2,0,w,h,0,blue,1);
		e.table=new c(group,g,"rect",0,h2,w,h2,0,black,.2);
		e.division=new c(group,g,"rect",w2-5,0,10,h,0,black,.2);

		return e

}

function drawTime(e,g) {
	var e=[]
		e.time_shadow=new c(0,g,"timer",w2+3,h2+3,w*.37,w*.37,.5,black,.3);
		e.time=new c(0,g,"timer",w2,h2,w*.35,w*.35,.5,white,1);
		return e
}
