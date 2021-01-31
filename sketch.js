// variables
var fixedrect, movingrect;
var test1, test2;

function setup() {

  // creates canvas
  createCanvas(1200,800);

  //makes 2 rectangles
  fixedrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 50);

  //fixedrect.debug = true;
  //movingrect.debug = true;

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "blue";

  test1 = createSprite(300, 300, 50, 20);
  test2 = createSprite(600, 300, 60, 20);

  test1.shapeColor = "yellow";
  test2.shapeColor = "cyan";

  test1.velocityX = 3;
  test2.velocityX = -3;

}

function draw() {

  background(255,255,255);  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  if (isTouching(movingrect, fixedrect)) {

    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";

  }

  else {

    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "blue";

  }

  bounceOff(test1, test2);

  //console.log(movingrect.x - fixedrect.x);

  drawSprites();

}