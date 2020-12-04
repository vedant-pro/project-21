var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)

  bullet=createSprite(50,200,50,20)
  bullet.velocityX= speed;
  bullet.shapeColor=color(255,255,255)
  wall=createSprite(1000,200,thickness,height/2)
}

function draw() {
  background(0,0,0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var dam=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(dam>10){
       wall.shapeColor=color(255,0,0)
    }
    else{
      wall.shapeColor=color(0,255,0)
    }
    
  }
  drawSprites();
}
function hasCollided(b,w){
  if(w.x-b.x<b.width/2+w.width/2)
  return true
  else
  return false
}