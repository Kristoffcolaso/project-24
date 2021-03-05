var ball,bin,stop;
var binpart1,binpart2,binpart3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ball=matter.bodies.circle(5,350,200);
binpart1=matter.bodies.square(350,350,20,5);
binpart2=matter.bodies.square(355,350,20,5);
binpart1=matter.bodies.square(350,350,5,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(space)){
   ball.velocityY=-5;
ball.velocityX=5;
  }
  if(ball.isTouching(Bin)){
   ball.velocityY=0;
  }
  if(ball.isTouching(stop)){
	ball.velocityY=5
   }   
  drawSprites();
 
}



