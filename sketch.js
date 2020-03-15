// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine;
var box1;
var world;


function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  box1 = Bodies.rectangle(200, 100, 80, 80);
  Engine.run(engine);
  World.add(world, box1);
}

function draw() {
  background(40);
  rect(box1.position.x, box1.position.y, 80,80);
}
