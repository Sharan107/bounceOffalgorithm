var fixedRect,movingRect;
var gameobj1,gameobj2;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  movingRect=createSprite(400,200,80,30);
  gameobj1=createSprite(400,300,50,80);
  gameobj2=createSprite(800,300,80,30);
  gameobj2.shapeColor="blue";
  gameobj1.shapeColor="yellow";
  gameobj1.debug=true;
  gameobj2.debug=true;
  gameobj1.velocityX=5;
  gameobj2.velocityX=-5;
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0); 
   movingRect.x=mouseX;
   movingRect.y=mouseY;
//console.log("fixedrect="+fixedRect.x);
console.log(movingRect.y-fixedRect.y);
bounceOff(gameobj1,gameobj2);
if (isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}
else
{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
  drawSprites();
}


