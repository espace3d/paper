
//background.js
//e for background

//dessins de tous les éléments du décor
function drawBackground(g,group0,group1,group2) {
	var e=[]

		e.fond=drawSprite(group0,g,"rect",0,0,w,h,0,black,1);
		e.fond1=drawSprite(group0,g,"rect",w2,0,10,h,0,blue,1);
		e.fond2=drawSprite(group0,g,"rect",w-10,0,10,h,0,blue,1);
		e.fond3=drawSprite(group0,g,"rect",w2,0,w2,10,0,blue,1);
		e.fond4=drawSprite(group0,g,"rect",w2,h-10,w2,10,0,blue,1);

		e.fond5=drawSprite(group0,g,"rect",0,0,10,h,0,red,1);
		e.fond6=drawSprite(group0,g,"rect",w2-10,0,10,h,0,red,1);
		e.fond7=drawSprite(group0,g,"rect",0,0,w2,10,0,red,1);
		e.fond8=drawSprite(group0,g,"rect",0,h-10,w2,10,0,red,1);
		e.opponent=drawSprite(group2,g,"rect",0,0,w2,h,0,red,1);
		e.player=drawSprite(group1,g,"rect",w2,0,w2,h,0,blue,1);
		e.table_player=drawSprite(group1,g,"rect",w2,h2,w2,h2,0,black,.2);
		e.table_opponent=drawSprite(group2,g,"rect",0,h2,w2,h2,0,black,.2);
		e.division=drawSprite(group1,g,"rect",w2-5,0,10,h,0,black,.2);

		return e

}

displacement_background_opponent=function(obj1,game) {
	game.add.tween(obj1.position).to({x:-w,y:0},300,Phaser.Easing.Bounce.Out,true,2000);

	//function pour le déplacement du retour
	function displacement_menu_back(){
		game.add.tween(obj1.position).to({x:0,y:0},899,Phaser.Easing.Elastic.Out,true,4);
	}
	//sert de delay
	game.time.events.add(Phaser.Timer.SECOND * 5, displacement_menu_back, this);
}

displacement_background_player=function(obj2,game) {
	game.add.tween(obj2.position).to({x:w*2,y:0},300,Phaser.Easing.Bounce.Out,true,2000);

	//function pour le déplacement du retour
	function displacement_menu_back2(){
		game.add.tween(obj2.position).to({x:0,y:0},999,Phaser.Easing.Elastic.Out,true,4);
	}
	//sert de delay
	game.time.events.add(Phaser.Timer.SECOND * 5, displacement_menu_back2, this);
}

