let backgroundImg;
let horseImages = [];
let currentHorseIndex = -1;
let currentX = 0;
let currentY = 0;
let horseWidth = 120; 
let horseHeight;

function preload() {

backgroundImg = loadImage('images/garden.jpg');
horseImages[0] = loadImage('images/horse11.png');
horseImages[1] = loadImage('images/horse22.png');
horseImages[2] = loadImage('images/horse33.png');
horseImages[3] = loadImage('images/horse44.png');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundImg);
  
  if (currentHorseIndex !== -1) {
  let img = horseImages[currentHorseIndex];
  horseHeight = horseWidth * (img.height / img.width);

  image(img, currentX, currentY, horseWidth, horseHeight);
  }

}

function mousePressed() {
  currentX = mouseX;
  currentY = mouseY;
  currentHorseIndex = int(random(horseImages.length));
}
