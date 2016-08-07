


function drawText(game,Group){
	var e=[]


	e.time_shadow=drawSprite(Group,game,"timer",w2+3,h2+3,w*.37,w*.37,.5,black,.3);
	e.time_rond=drawSprite(Group,game,"timer",w2,h2,w*.35,w*.35,.5,white,1);
	var timer_value="10"
		e.timer = game.add.bitmapText(w2,h2,'lucky_black',timer_value, 100);


		//modifications des anchors
		pseudoAnchorX(e.timer)
		pseudoAnchorY(e.timer)


	//ajout aux groupes
	Group.add(e.timer);

		e.tabledis=displacement(
				Group,
				game,
				delaydisplacement=time_shadow_delay,
				timedisplacement=time_shadow_deplacement,
				xbegin=0,
				ybegin=h-2*e.time_rond.height,

				//retour

				delaydisplacement2=time_text_delay,
				timedisplacement2=time_text_deplacement,
				xend=0,
				yend=10,
				nameEasing="Linear.None",
				nameEasing2="Elastic.Out"
				) 

	return e;
}

