var lives=3;
var add=0;
var score=0;
var time=0;
var hitsound,hit2,hit3,fail;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup(){

   createCanvas(600,600)
   engine = Engine.create();
   world = engine.world; 
   
   //create paddle
   paddle=createSprite(300,500,100,20)
   paddle.shapeColor="brown"

   //create ball
   ball=createSprite(270,400,20,20)
   ball.shapeColor="green"
   
    //back
    ba=createSprite(300,45,29048,3448)
    ba.shapeColor='#D5D6D6'
    ba.visible=false
 
    //inside edge create
    insideedge1 = createSprite(10, 270, 25, 800);
    insideedge1.shapeColor = "lightblue";
    insideedge2 = createSprite(200, 10, 800, 25);
    insideedge2.shapeColor = "lightblue";
    insideedge3 = createSprite(590, 309, 25, 800);
    insideedge3.shapeColor = "lightblue";
    insideedge4 = createSprite(200, 590, 800, 25);
    insideedge4.shapeColor = "lightblue";
   
    hitsound=loadSound("hit1.ogg")
    hit2=loadSound("hit2.ogg")
    hit3=loadSound("hit3.ogg")
}

function draw(){
   background("#D5D6D6")
   Engine.update(engine);   
   drawSprites()
   textSize(30)
   text("CRICKET PRACTICE",200,30)
  }
