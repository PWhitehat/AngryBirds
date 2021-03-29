const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var box1, box2 ,box3 ,box4 ,box5, ground, platform;
var bird;
var pig1, pig2;
var log1, log2, log3, log4;
var bkgrd;
var sling;

function preload() {

  bkgrd = loadImage("sprites/bg.png");

}

function setup() {
  
  var canvas = createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = new BOX(700, 320, 70, 70);
  box2 = new BOX(920, 320, 70, 70);
  box3 = new BOX(700, 240, 70, 70); 
  box4 = new BOX(920, 240, 70, 70);
  box5 = new BOX(810, 160, 70, 70);

  log1 = new LOG(810, 260, 300, PI / 2);
  log2 = new LOG(810, 180, 300, PI / 2);
  log3 = new LOG(760, 120, 150, PI / 7);
  log4 = new LOG(870, 120, 150, -PI / 7);

  pig1 = new PIG(810, 350);
  pig2 = new PIG(810, 220);

  bird = new BIRD(100, 50);

  ground = new GROUND(600, height, 1200, 20);

  platform = new GROUND(150, 305, 300, 170);

  sling = new SlingShot(bird.body, {x: 200, y: 50});
}

function mouseDragged() {

  Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});

}

function mouseReleased() {

  sling.fly();

}

function keyPressed() {

  if (keyCode === 32) {

    sling.attach(bird.body);

  }

}

function draw() {

  background(bkgrd);
  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  bird.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  pig1.display();
  pig2.display();

  ground.display();
  platform.display();

  sling.display();

}