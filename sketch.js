var fixedrect,movingrect;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400,200,200,100);
  fixedrect.shapeColor="maroon";
  movingrect= createSprite(200,200,100,50);
  movingrect.shapeColor="maroon";
}

function draw() {
  background(0);  
movingrect.x=mouseX;
movingrect.y=mouseY;

if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
  && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
movingrect.shapeColor="cyan";
fixedrect.shapeColor="cyan";
}
else{
  fixedrect.shapeColor="maroon";
  movingrect.shapeColor="maroon";
}
  drawSprites();
}