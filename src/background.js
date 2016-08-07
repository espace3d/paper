
//background.js
//e for background

//dessins de tous les éléments du décor
function drawBackground(game,group0,group1,group2,group3,group4) {
	var e=[]

		e.fond=drawSprite(group0,game,"back",0,0,w,h,0,0,1);
		e.fond1=drawSprite(group0,game,"rect",w2,0,20,h,0,blue,1);
		e.fond2=drawSprite(group0,game,"rect",w-20,0,20,h,0,blue,1);
		e.fond3=drawSprite(group0,game,"rect",w2,0,w2,20,0,blue,1);
		e.fond4=drawSprite(group0,game,"rect",w2,h-20,w2,20,0,blue,1);

		e.fond5=drawSprite(group0,game,"rect",0,0,20,h,0,red,1);
		e.fond6=drawSprite(group0,game,"rect",w2-20,0,20,h,0,red,1);
		e.fond7=drawSprite(group0,game,"rect",0,0,w2,20,0,red,1);
		e.fond8=drawSprite(group0,game,"rect",0,h-20,w2,20,0,red,1);
		e.opponent=drawSprite(group2,game,"rect",0,0,w2,h,0,red,1);
		e.player=drawSprite(group1,game,"rect",w2,0,w2,h,0,blue,1);
		e.table_player=drawSprite(group1,game,"rect",w2,h2,w2,h2,0,black,.2);

	//TEST À SUPPRIMER	

		//e.tabledis=displacement(e.table_player,game,1000,200,xbegin=100,ybegin=100,timedisplacement2=1500,delaydisplacement2=1500,xend=800,yend=500,nameEasing=Phaser.Easing.Linear.None,nameEasing2=Phaser.Easing.Linear.None) 




		e.table_opponent=drawSprite(group2,game,"rect",0,h2,w2,h2,0,black,.2);
		e.division1=drawSprite(group1,game,"rect",w2-2,0,5,h,0,black,.7);
		e.division2=drawSprite(group0,game,"rect",w2-2,0,5,h,0,black,.7);
		var taille=w*.07
		var taille2=w*.05

		e.p = game.add.bitmapText(w4*3,taille*.2,'lucky','YOU', taille);
	e.player = game.add.bitmapText(w4*3,taille,'lucky','JOJO', taille2);
	e.op = game.add.bitmapText(w4,taille*.2,'lucky','OPPONENT', taille);
	e.opponent = game.add.bitmapText(w4,taille,'lucky','kill the game', taille2);

	//modifications des anchors
	pseudoAnchorX(e.p)
		pseudoAnchorX(e.player)
		pseudoAnchorX(e.op)
		pseudoAnchorX(e.opponent)
		//ajout aux groupes
		group4.add(e.p);
	group4.add(e.player);
	group3.add(e.op);
	group3.add(e.opponent);
		return e

}


//DEPLACEMENT DE L'OMBRE DE LA TABLE POUR SYMBOLISER LA VUE QUI VA VERS LE HAUT
displacement_background_shadow=function(obj1,obj2,obj3,obj4,game) {

//obj1 est l'opponent
//obj2 est le player
//time pour les différents déplacements
//pour le début
//	game.add.tween(obj1).to({alpha:.2},time_shadow_deplacement2,Phaser.Easing.Linear.None,true,4);


displacement(
		obj1,
		game,
		delaydisplacement=time_shadow_delay,
		timedisplacement=time_shadow_deplacement,
		xbegin=0,
		ybegin=h,
		delaydisplacement2=time_shadow_delay2,
		timedisplacement2=time_shadow_deplacement2,
		xend=0,
		yend=h2,
		nameEasing="Linear.None",
		nameEasing2="Linear.None") 

displacement(
		obj2,
		game,
		delaydisplacement=time_shadow_delay,
		timedisplacement=time_shadow_deplacement,
		xbegin=w2,
		ybegin=h,
		delaydisplacement2=time_shadow_delay2,
		timedisplacement2=time_shadow_deplacement2,
		xend=w2,
		yend=h2,
		nameEasing="Linear.None",
		nameEasing2="Linear.None") 

displacement(
		obj3,
		game,
		delaydisplacement=time_shadow_delay,
		timedisplacement=time_shadow_deplacement,
		xbegin=0,
		ybegin=h2,
		delaydisplacement2=time_shadow_delay2,
		timedisplacement2=time_shadow_deplacement2,
		xend=0,
		yend=0,
		nameEasing="Linear.None",
		nameEasing2="Linear.None") 
displacement(
		obj4,
		game,
		delaydisplacement=time_shadow_delay,
		timedisplacement=time_shadow_deplacement,
		xbegin=0,
		ybegin=h2,
		delaydisplacement2=time_shadow_delay2,
		timedisplacement2=time_shadow_deplacement2,
		xend=0,
		yend=0,
		nameEasing="Linear.None",
		nameEasing2="Linear.None") 

shadealpha(
		obj1,
		game,
		delaydisplacement=time_shadow_delay,
		timedisplacement=time_shadow_deplacement,
		alphabegin=.8,
		delaydisplacement2=time_shadow_delay2,
		timedisplacement2=time_shadow_deplacement2,
		alphaend=.2,
		nameEasing="Linear.None",
		nameEasing2="Linear.None") 
shadealpha(
		obj2,
		game,
		delaydisplacement=time_shadow_delay,
		timedisplacement=time_shadow_deplacement,
		alphabegin=.8,
		delaydisplacement2=time_shadow_delay2,
		timedisplacement2=time_shadow_deplacement2,
		alphaend=.2,
		nameEasing="Linear.None",
		nameEasing2="Linear.None") 


	//game.add.tween(obj1.position).to({x:0,y:h},time_shadow_deplacement,Phaser.Easing.Linear.None,true,time_shadow_delay);
	//game.add.tween(obj1).to({alpha:.8},time_shadow_deplacement,Phaser.Easing.Linear.None,true,time_shadow_delay);
	//game.add.tween(obj2.position).to({x:w2,y:h},time_shadow_deplacement,Phaser.Easing.Linear.None,true,time_shadow_delay);
	//game.add.tween(obj2).to({alpha:.8},time_shadow_deplacement,Phaser.Easing.Linear.None,true,time_shadow_delay);
	//game.add.tween(obj3.position).to({x:0,y:h2},time_shadow_deplacement,Phaser.Easing.Linear.None,true,time_shadow_delay);

	//function pour le déplacement du retour
	//function displacement_menu_back(){
		//game.add.tween(obj1.position).to({x:0,y:h2},time_shadow_deplacement2,Phaser.Easing.Elastic.Out,true,4);
		//game.add.tween(obj1).to({alpha:.2},time_shadow_deplacement2,Phaser.Easing.Elastic.Out,true,4);
		//game.add.tween(obj2.position).to({x:w2,y:h2},time_shadow_deplacement2,Phaser.Easing.Elastic.Out,true,4);
		//game.add.tween(obj2).to({alpha:.2},time_shadow_deplacement2,Phaser.Easing.Elastic.Out,true,4);
		//game.add.tween(obj3.position).to({x:0,y:0},time_shadow_deplacement2,Phaser.Easing.Elastic.Out,true,4);
	//}
	//sert de delay
	//game.time.events.add(Phaser.Timer.SECOND * time_shadow_delay2, displacement_menu_back, this);
}

//DEPLACEMENT DES PANNEAUX DE BACKGROUND
displacement_background_opponent_and_player=function(obj1,obj2,game) {

displacement(
		obj1,
		game,
		delaydisplacement=time_back_delay,
		timedisplacement=time_back_deplacement,
		xbegin=-w,
		ybegin=0,
		delaydisplacement2=time_back_delay2,
		timedisplacement2=time_back_deplacement2,
		xend=0,
		yend=0,
		nameEasing="Bounce.Out",
		nameEasing2="Elastic.Out") 

displacement(
		obj2,
		game,
		delaydisplacement=time_back_delay,
		timedisplacement=time_back_deplacement,
		xbegin=w*2,
		ybegin=0,
		delaydisplacement2=time_back_delay2,
		timedisplacement2=time_back_deplacement2,
		xend=0,
		yend=0,
		nameEasing="Linear.None",
		nameEasing2="Linear.None") 
}

//DEPLACEMENT DES textes players et opponent
displacement_text=function(obj1,obj2,game) {

displacement(
		obj1,
		game,
		delaydisplacement=time_back_delay,
		timedisplacement=time_back_deplacement,
		xbegin=-w,
		ybegin=0,
		delaydisplacement2=time_back_delay2,
		timedisplacement2=time_back_deplacement2,
		xend=0,
		yend=0,
		nameEasing="Bounce.Out",
		nameEasing2="Elastic.Out") 

displacement(
		obj2,
		game,
		delaydisplacement=time_back_delay,
		timedisplacement=time_back_deplacement,
		xbegin=w*2,
		ybegin=0,
		delaydisplacement2=time_back_delay2,
		timedisplacement2=time_back_deplacement2,
		xend=0,
		yend=0,
		nameEasing="Linear.None",
		nameEasing2="Linear.None") 
}

