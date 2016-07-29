
function drawText(e,g,Group){
	var e=[];
			e.p = g.add.text(w4*3,20, "YOU", { font: "25px Luckiest Guy", fill: "#ffffff", align: "center" });
			e.p.anchor.x=.5
				e.player = g.add.text(w4*3,20+20, "JOJO", { font: "15px Luckiest Guy", fill: "#ffffff", align: "center" });
			e.player.anchor.x=.5
				e.op = g.add.text(w4,20, "OPPONENT", { font: "25px Luckiest Guy", fill: "#ffffff", align: "center" });
			e.op.anchor.x=.5
				e.opponent = g.add.text(w4,20+20, "KILLTHEGAME", { font: "15px Luckiest Guy", fill: "#ffffff", align: "center" });
			e.opponent.anchor.x=.5
				Group.add(e.p);
				Group.add(e.player);
				Group.add(e.op);
				Group.add(e.opponent);
				return e;
}
