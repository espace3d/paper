var w = 640;
var h = 960;
var w2 = w/2;
var h2 = h/2;
var w4 = w/4;
var h4 = h/4;

var dim={}
dim.paper=w/6;

var nu={}
nu.paper="9"
// var M={}
// M.W=display.contentWidth
// M.W2=display.contentWidth*.5
// M.H=display.contentHeight
// M.H2=display.contentHeight*.5
// M.nameplayer = "jojo"
// M.levelplayer = "1"

//temps pour le déplacement de l'ombre de la table qui va vers le bas
var time_shadow_delay=500
var time_shadow_deplacement=400

var time_shadow_delay2=7000
var time_shadow_deplacement2=400

///////////////////////////////////////////////////////////////////////

//temps pour le déplacement des panneaux du background qui s'ouvre vers l'extérieur
var time_back_delay=4000
var time_back_deplacement=300

var time_back_delay2=1700
var time_back_deplacement2=900


var time_text_delay=time_back_delay+time_back_deplacement+time_back_delay2
var time_text_deplacement=time_back_deplacement2

///////////////////////////////////////////////////////////////////////

// M.number={}
// M.number.level=10 --!!! doit toujours etre pair
// --nombre d'enemis total
// M.number.enemy=M.number.level
// M.number.obstacle=2
// M.number.bonus=M.number.level
// M.number.paper=10
// M.number.seconds=30

// M.cnt={}
// M.cnt.level=1
// M.cnt.enemy=0 --to know how many enemy are killed to upgrade level

// M.position={}
// M.position.textScorey=10 
// M.position.endehors=3000
// M.position.txtplayerx=M.W*.25
// M.position.txtplayery=M.H*.05
// M.position.hudtimex=M.W2
// M.position.hudtimey=M.H*.05

// M.position.barreTop=M.H*.15
// M.position.deckY=M.position.barreTop*.5
// M.position.txtopponentx=M.W*.75
// M.position.txtopponenty=M.H*.05

// M.disposition={
// {0, 0},
// {0, 0},
// {0, 0},
// {0, 0},
// {0, 0},
// {0, 0},
// {0, 0},
// {0, 0},
// {0, 0},
// {0, 0},
// }
// --position verticale des flèches gauches et droite pour accéder au hud
// M.position.fleche=M.H2-100

// --la limite est à 45% de la hauteur de l'écran
// M.position.limit=M.H*.45

// --propriété du player
// --si gaucher ou droitier
// M.propertiesPlayer={}

// --M.propertiesPlayer.hands="left"
// M.propertiesPlayer.hands="right"
// if M.propertiesPlayer.hands=="right" then
// 	M.position.deckX=M.W+M.W*.25
// 	M.propertiesPlayer.side=M.W*.75
// 	M.propertiesPlayer.horloge=M.W*.25
// else
// 	M.position.deckX=0-M.W*.25
// 	M.propertiesPlayer.side=M.W*.25
// 	M.propertiesPlayer.horloge=M.W*.75
// end

// M.propertiesPlayer.numberPaperLvl={}
// for i=1, M.number.level do
// 	M.propertiesPlayer.numberPaperLvl[i]=10
// end

// M.current={}
// M.current.level=1
// M.current.time=60
// M.current.bonus=2

// M.flag={}
// M.flag.gameIsOver=false
// M.flag.level=true
// M.flag.gameIsEnCours=false
// M.flag.horloge=true
// M.flag.selectPaper=true

// print(system.getInfo("platformName"))
// if "Win" == system.getInfo( "platformName" ) then
// M.font = "Luckiest Guy"--linux
// --M.font = "LuckiestGuy"--windows
// 	elseif "Android" == system.getInfo( "platformName" ) then
// 		M.font = "Luckiest Guy.ttf"
// 	else
// 		M.font = "Luckiest Guy"
// 	end

// 	return M
