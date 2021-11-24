
function setup() {
  createCanvas(400,400);
  var box = createSprite(200,200,30,30);
  background("black");

}

function draw() 
{


  // escribir el código para cambiar el color del fondo 
  // rojo cuando se presiona RIGHT_ARROW (tecla de flecha derecha)
  
  
  if (keyDown("a")) 
  {
    background(rgb (230, 230, 250));
    
  }
 
    if (keyDown("w"))
  {
    background("yellow");
   
  }

  if (keyDown("s")) 
  {
    background("green");
  }

  if (keyDown("d"))
  {
  background("blue");
  }
  
  drawSprites();
}

