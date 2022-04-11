let width = 500;
let heigth = 500;
let point1 = {x:width/2, y:heigth/2};
let point2 = {x:300,y:150};
let point3 = {x:300,y:50};
let origin;
let speedX = 20;
let speedY = 15;
ballradius = 1;


function setup() {
  // put setup code here
  createCanvas(width,heigth);
  background(60,255,200); 
  noStroke();

}

function draw() {
  // put drawing code here 

  fill(255,255,255,);
  circle(point1.x + random(-10,10),point1.y + random(-10,10),ballradius*2 + random(-40,40));
  point1.x = point1.x + speedX;
  if(point1.x > width -ballradius || point1.x < ballradius)
  speedX = speedX*(-1);
  point1.y = point1.y + speedY;
  if(point1.y > heigth -ballradius || point1.y < ballradius)
  speedY = speedY*(-1);
}