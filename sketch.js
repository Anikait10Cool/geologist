
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground ,hammer, stone
function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    stone = new Stone(700,320,70,70);
    hammer = new Hammer(100,100);
}


function draw() {
  
  background(255);
  Engine.update(engine);
    console.log(hammer.body.position.x);
    console.log(hammer.body.position.y);
    console.log(hammer.body.angle);
    stone.display();
    hammer.display();
    ground.display();
  drawSprites();
 
}



