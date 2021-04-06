const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var box1, box2 ,box3 ,box4 ,box5, ground, platform;
var bird;
var pig1, pig2;
var log1, log2, log3, log4;
var bg = "sprites/bg.png";
var bgIMG;
var sling;
var gameState = "loaded";
var score = 0;


function preload() {

  //nightandday();
  bgIMG = loadImage("sprites/bg.png");

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

  if (gameState !== "launched") {

    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});

  }

}

function mouseReleased() {

  sling.fly();
  gameState = "launched";

}

function keyPressed() {

  if (keyCode === 32  ) {

    bird.trajectory = [];
    Matter.Body.setPosition(bird.body, {x: 200, y: 50});
    sling.attach(bird.body);
    gameState = "loaded";

  }

}

async function nightandday() {

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if (hour >= 06 && hour <= 19) {

    bg = "sprites/bg.png";

  }

  else {

    bg = "sprites/night.png";

  }

}

function draw() {

  //if (bgIMG) 

  background(bgIMG);

  noStroke();
  textSize(35);
  fill("white");
  text("Score " + score, width - 300, 50);

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
  pig1.score();
  pig2.display();
  pig2.score();

  ground.display();
  platform.display();

  sling.display();

}