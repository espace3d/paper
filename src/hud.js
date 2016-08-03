


function drawText(g,Group){
	var e=[]


	e.time_shadow=drawSprite(Group,g,"timer",w2+3,h2+3,w*.37,w*.37,.5,black,.3);
	e.time_rond=drawSprite(Group,g,"timer",w2,h2,w*.35,w*.35,.5,white,1);
	var timer_value="10"
		e.timer = g.add.bitmapText(w2,h2,'lucky_black',timer_value, 100);


		//modifications des anchors
		pseudoAnchorX(e.timer)
		pseudoAnchorY(e.timer)


	//ajout aux groupes
	Group.add(e.timer);

	return e;
}

