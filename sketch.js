var garden,gardenImg;
var cat,catanime;
var cat_Running;
var mouse,mouseImg;


function preload() {
gardenImg=loadAnimation("images/garden.png");
catanime=loadAnimation("images/cat1.png");
cat_Runnning=loadAnimation("images/cat2.png","images/cat3.png");
mouseImg=loadAnimation("images/mouse1.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here 
    garden=createSprite(200,200)  ;
    garden.addAnimation("garden",gardenImg);

    cat=createSprite(550,400);
    cat.addAnimation("cat",catanime);
    cat.scale=0.09;

    mouse=createSprite(170,400);
    mouse.addAnimation("mouse",mouseImg);
    mouse.scale=0.09;
}

function draw() {

    background(255);

   
    drawSprites();
}
function key(){
if(keyCode===LEFT_ARROW)
cat.changeAnimation("running",cat_Running);
cat.velocityX=-5;

}




