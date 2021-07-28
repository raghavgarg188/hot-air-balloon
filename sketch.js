var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database;
var height;

function preload(){
   bg =loadImage("Images/cityImage.png");
   balloonImage1=loadAnimation("Images/hotairballoon1.png");
   balloonImage2=loadAnimation("Images/hotairballoon1.png","Images/hotairballoon1.png",
   "Images/hotairballoon1.png","Images/hotairballoon2.png","Images/hotairballoon2.png",
   "Images/hotairballoon2.png","Images/hotairballoon3.png","Images/hotairballoon3.png","Images/hotairballoon3.png");
  }

//Function to set initial environment


function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
var ballonHeight = database.ref('ballon/height')
ballonHeight.on("value",readHeight,showEroor)
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    ballon.scale = ballon.scale -0.01;

  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    ballon.scale = ballon.scale +0.01;

  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   ballon.scale = ballon.scale -0.01;

  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    ballon.scale = ballon.scale +0.01;

  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref('ballon/height').set({
   'x': height.x+x,
   'y': height.y+y

  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}

function showEroor(){
  console.log("Eroor in writing to the database");
}


