function drawTime(g,Group) {
	var e=[];
	e.time_shadow=drawSprite(Group,g,"timer",w2+3,h2+3,w*.37,w*.37,.5,black,.3);
	e.time=drawSprite(Group,g,"timer",w2,h2,w*.35,w*.35,.5,white,1);
	return e;
}

function drawText(g,Group){
	var e=[];
	e.p = g.add.text(w4*3,20, "YOU", { font: "25px Luckiest Guy", fill: "#ffffff", align: "center" });
	e.p.anchor.x=.5;
	e.player = g.add.text(w4*3,20+20, "JOJO", { font: "15px Luckiest Guy", fill: "#ffffff", align: "center" });
	e.player.anchor.x=.5;
	e.op = g.add.text(w4,20, "OPPONENT", { font: "25px Luckiest Guy", fill: "#ffffff", align: "center" });
	e.op.anchor.x=.5;
	e.opponent = g.add.text(w4,20+20, "KILLTHEGAME", { font: "15px Luckiest Guy", fill: "#ffffff", align: "center" });
	e.opponent.anchor.x=.5;;
	e.time = g.add.text(w2,h2+10, "10", { font: "45px Luckiest Guy", fill: "black", align: "center" });
	e.time.anchor.x=.5;
	e.time.anchor.y=.5;
	Group.add(e.p);
	Group.add(e.player);
	Group.add(e.op);
	Group.add(e.opponent);
	Group.add(e.time);

	return e;
}

