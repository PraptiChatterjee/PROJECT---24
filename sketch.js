const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paperObj;
var le, re, be;

function setup() {
	createCanvas(800, 800);

	ground = new Ground(200, height,400,20);
	
	paperObj = new Paper(200,200);

	le = new Dustbin(700,700,10,80);
	re = new Dustbin(780,700,10,80);
	be = new Dustbin(710,780,70,10);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  paperObj.display();
  ground.display();
  le.display();
  re.display();
  be.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:-85});
	}
}