var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg = loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("CYAN")
    textSize(40);
    text("TREASURE UNLOCKED!",260, 200);
    fill(172, 253, 45);
    textSize(35);
    text("CONGRATULATIONS!! YOU HAVE DONE IT!!...", 150, 260);
  }

  drawSprites()
}