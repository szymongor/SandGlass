// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine;
var world;
var boxes =[];

var ground;
var glassWalls = [];


function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Box(200, height, width, 20,{isStatic: true},120);

  createWalls();
  World.add(world, ground);

  Engine.run(engine);
}

function mouseDragged() {
  boxes.push(new Box(mouseX,mouseY,7,7))
}

function draw() {
  background(40);
  boxes.forEach(e => {e.show()});
  glassWalls.forEach(e => {e.show()});
  ground.show();
  // drawGround();


}

function drawGround() {
  fill(170);
  stroke(60);
  rectMode(CENTER);
  rect(200, height, width,20);
}

function createWalls() {
  let wall1 = new Box(250, height/2, width/2, 20,{isStatic: true},120);
  wall1.rotate(-1);

  let wall2 = new Box(115, height/2, width/2, 20,{isStatic: true},120);
  wall2.rotate(1);

  glassWalls.push(wall1);
  glassWalls.push(wall2);
}
