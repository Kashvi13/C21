var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
box1 = createSprite(200,200,50,100);
box2 = createSprite(1000,200,50,100);
box1.velocityX = 6;
box2.velocityX = -6;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,fixedRect);
bounceOff(box1,box2);

  drawSprites();
}


