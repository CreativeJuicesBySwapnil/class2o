var black,white;

function setup() {
  createCanvas(600,400);

  white=createSprite(300, 200, 60, 100);
  black=createSprite(200, 300, 80, 50);

  black.shapeColor="black";
  white.shapeColor="white";

  black.debug=true;
  white.debug=true;

}

function draw() {
  background("lightblue");

  black.y=mouseY
  black.x=mouseX;
  console.log(black.x)

  if(black.x-white.x<black.width/2+white.width/2 &&
    white.x-black.x<black.width/2+white.width/2
    && black.y-white.y<black.height/2+white.height/2 &&
    white.y-black.y<black.height/2+white.height/2){
    black.shapeColor="red";
    white.shapeColor="red";
  }
  else{
    black.shapeColor="black";
    white.shapeColor="white";
  }
  
  drawSprites();
}