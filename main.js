/*Todays Goals:
Fix the movement.
Create collision detection.
Research on how to make the map look cooler.
Get 2 perks per player and make the perks spawn on the background.
Add the lake and make the players disaper if they touch the lake. Add sounds.
*/
let s = "Score";
let scoreCat = 0;
let scoreDog = 0;
let x = 1400;
let y = 750;
let bg;
let lake;
class Game {
  constructor(x, y) {
    this.players = "Markus";
    this.canvasSize = {
      x: 800,
      y: 600
    };
  }
}

const game = new Game();

function preload() {
  player1.image = loadImage("/assets/player/cat/cat-walk/cat-walk.gif");
  player2.image = loadImage("/assets/player/dog/dog1.gif");
}

function setup() {
  bg = loadImage("assets/background/background-img.jpg");
  lake = loadImage("assets/background/bg-lake.jpg");
  createCanvas(game.canvasSize.x, game.canvasSize.y);
}

function draw() {
  // background(220, 220, 220);
  background(bg);
  //Image(lake);
  //smooth movement -still testing

  image(player1.image, player1.x, player1.y, player1.width, player1.height);
  image(player2.image, player2.x, player2.y, player2.width, player2.height);

  if (player1.collides(player2)) {
    // console.log("Touched");
    scoreDog += 0.04;
    console.log(scoreDog.toFixed(2));
  } else if (!player2.collides(player1)) {
    scoreCat += 0.01;
    console.log(scoreCat.toFixed(2));
  }
  textSize(32);
  fill(255, 255, 255);
  text(`Score Dog: ${scoreDog.toFixed(2)}`, width - width / 1.2, 30);

  textSize(32);
  fill(255, 255, 255);
  text(`Score Cat: ${scoreCat.toFixed(2)}`, width - width / 2.8, 30);
}

//movement
function movement(player) {
  player.moveUp();
  player.moveDown();
  player.moveLeft();
  player.moveRight();
}

//Specific Player movement keys
function keyPressed() {
  //Player1 keycode and movement
  if (keyCode === 38 && player1.y >= 25) {
    player1.moveUp();
  } else if (keyCode === 40 && player1.y - 27.5 <= 500) {
    player1.moveDown();
  } else if (keyCode === 37 && player1.x >= 25) {
    player1.moveLeft();
  } else if (keyCode === 39 && player1.x - 25 <= 700) {
    player1.moveRight();
  }

  //Player2 keycodes and movement
  if (keyCode === 87 && player2.y >= 25) {
    player2.moveUp();
  } else if (keyCode === 83 && player2.y - 25 <= 500) {
    player2.moveDown();
  } else if (keyCode === 65 && player2.x >= 25) {
    player2.moveLeft();
  } else if (keyCode === 68 && player2.x - 25 <= 700) {
    player2.moveRight();
  }
}
