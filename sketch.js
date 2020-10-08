
var fix,mov;








function setup() {
createCanvas(800,400);
 
fix=createSprite(400,200,50,80);
mov=createSprite(200,400,80,50);
fix.shapeColor="green";
mov.shapeColor="green";
 mov.debug=true;
 fix.debug=true; 
}

function draw() {
  background(0);  
 
  mov.x = World.mouseX;
  mov.y = World.mouseY;
  
  if (mov.x-fix.x <fix.width/2+mov.width/2
    &&fix.x-mov.x<fix.width/2+mov.width/2
    &&mov.y-fix.y<fix.height/2+mov.height/2
    &&fix.y-mov.y<fix.height/2+mov.height/2){
   fix.shapeColor="red";
    mov.shapeColor="red";
  }

  else {
    fix.shapeColor="green";
    mov.shapeColor="green";
  }

  drawSprites();
}


