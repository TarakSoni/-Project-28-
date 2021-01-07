const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingShot;

function preload()
{
	boyImage = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(150,390)
	boy.addImage(boyImage)
	boy.scale = 0.15

	mango1 = new mango(990,200,35)
	mango2 = new mango(990,80,30)
	mango3 = new mango(885,160,30)
	mango4 = new mango(1100,50,30)
	mango5 = new mango(1130,190,35)

	ground = new Ground(650,480,1300,20)

	tree = new Tree(1500,200,500,500)

	stone = new Stone(200,200,40)

	slingShot = new SlingShot(stone.body,{x:80,y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)  
	

  drawSprites();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display(); 
  ground.display();
  slingShot.display();
}

function detectollision(Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r)
	{
		Matter.Body.setStatic(Lmango.body,false);
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

	function mouseReleased(){
    slingShot.fly();
}

