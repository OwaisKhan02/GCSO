var car,wall;

var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(40,200,50,50);
  car.velocityX = speed;
  wall=createSprite(1350,200,60,400);
 
  
}

function draw() {
  background(0,0,0);  
  

    if(wall.x-car.x < (car.width+wall.width)/2){
      car.velocityX=0;
      car.x=40;
      var deformation=0.5 * weight *speed *speed/22509;
      if(deformation>180){
        car.shapeColor=color("blue");
      }
  
      if(deformation<180 && deformation>100){
        car.shapeColor=color("Red");
      }
  
      if(deformation<100){
        car.shapeColor=color("green");
      }
    }
  
  
  

  drawSprites();
}