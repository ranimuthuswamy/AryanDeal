const START=0;
const PLAY=1;
const END=2;
var gameState=START;
var bg,formBg
var form,game;
var count=0;
var playCounter=0;
var ask=0;
var deal;
var correctAns,wrongAns,starting,theWinner,bClicked;
var playerName;
var end=0;

function preload(){
bg=loadImage("./download-_1_.png");
formBg=loadImage("./quiz2.jpg");
correctAns=loadSound('sounds/correct.mp4');
wrongAns=loadSound('wrongAnswer.mpeg');
starting=loadSound('startingSound.mp3');
theWinner=loadSound('clappingSound.mp3');
bClicked=loadSound('btClicked.mpeg')
}


function setup() {
  createCanvas(displayWidth-10,displayHeight-200);
  //createSprite(400, 200, 50, 50);
  // form=new Form();
  game=new Game();
  game.start();

 
  textSize(20);
  color("red")
}

function draw() {
  
  if(gameState===PLAY  && playCounter===1){
    game.play();
    playCounter=0;
    
    //text("Clck one of the button to start the game",)
  }
  if(gameState===PLAY){
    background(bg)
    text("Score: " + count,displayWidth/2-100,displayHeight/2-350);
  }
  // if(gameState===2){

  // }
  
   
  
// if(this.button.mousePressed){
//   gameState=PLAY;
// }
  
  drawSprites();
}