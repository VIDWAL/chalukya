var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(fixedRect,movingRect);
  
  drawSprites();
}

function bounceoff(star1,star2) {
  if (star2.x - star1.x <star1.width/2 +star2.width/2
    &&star1.x - star2.x < star1.width/2 + star2.width/2) {
  star2.velocityX = star2.velocityX * (-1);
 star1.velocityX = star1.velocityX * (-1);
}
if (star2.y - star1.y < star1.height/2 + star2.height/2
  &&star1.y -star2.y < star1.height/2 + star2.height/2){
  star2.velocityY = star2.velocityY * (-1);
  star1.velocityY = star1.velocityY * (-1);
}
}

