//Create variables here
var dog, happyDog;
var database, foodS, foodStock;
var DogIMG, HappyDogIMG;

function preload(){
  //load images here
  DogIMG = loadImage("images/dogImg.png");
  HappyDogIMG = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

	createCanvas(500, 500);
  
  dog = createSprite(250, 350, 10, 10);
  dog.addImage(DogIMG);

}


function draw() {  
  background (50, 109, 255);
  
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
   dog.addImage(HappyDogIMG);
  }
 
  drawSprites();
  //add styles here
  text("Note:Press Up_Arrow Key To Feed Milk",100,50);
  }
  
  function readStock(data){
  foodS=data.val();
  }
  
  function writeStock(x){
    if (x<=0){
      x=0;
    }else {
      x=x-1
    }
    database.ref('/').update({Food:x})
  }