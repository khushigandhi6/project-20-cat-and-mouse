

var cat,mouse;
var catImg,catWalkingImg,catCollidedImg;
var mouseImg,mouseTeasingImg,mouseCollidedImg;
var backgroundImg;

function preload() {
    //load the images 
    backgroundImg = loadImage("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catWalkingImg = loadAnimation("images/cat2.png","images/cat3.png");
    catCollidedImg = loadAnimation("images/cat4.png");
    mouseImg = loadAnimation("images/mouse1.png");
    mouseTeasingImg = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseCollidedImg = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites 
    cat = createSprite(880,700);
    cat.addAnimation("catSleeping",catImg);
    cat.scale = 0.15;
    mouse = createSprite(150,700);
    mouse.addAnimation("mouseStanding",mouseImg);
    mouse.scale = 0.1;

    
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catCollided",catCollidedImg);
        cat.changeAnimation("catCollided");
        mouse.addAnimation("mouseCollided",mouseCollidedImg);
        mouse.changeAnimation("mouseCollided");
        cat.velocityX = 0;
    }
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode ===LEFT_ARROW){
    cat.velocityX = -3;
    cat.addAnimation("catWalking",catWalkingImg);
    cat.changeAnimation("catWalking");
    mouse.addAnimation("mouseTeasing",mouseTeasingImg);
    mouse.changeAnimation("mouseTeasing");

}


}
