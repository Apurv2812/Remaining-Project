var cat,catImage1,catImage2,catImage3,catImage4;
var mouse,mouseImage;
var background;


function preload() {
    //load the images here
    catImage1 = loadAnimation("cat1.png");
    catImage2 = loadAnimation("cat2.png");
    catImage3 = loadAnimation("cat3.png");
    catImage4 = loadAnimation("cat4.png");
    mouseImage = loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
    background = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(100,50,20,20);
    mouse = createSprite(150,50,20,20);
    background1 = createSprite(200,200,20,20);

    cat.addImage(catImage1,catImage2,catImage3,catImage4);
    mouse.addImage(mouseImage);
    background1.addImage(background);

}

function draw() {

    background("garden.png");
    Text(mouseX + ',' + mouseY,10,45);
    //Write condition here to evalute if tom and jerry collide
   
    if(cat.x-mouse.x < (cat.width + mouse.width)/2);{
        cat.addAnimation("cat3.png",catImage3);
        cat.changeAnimation("cat3.png");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 
 if(keyCode === LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("cat2.png",catImage);
     cat.changeAnimation("cat2.png");
 }
 

}
