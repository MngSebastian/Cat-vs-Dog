let x = 1400;
let y = 750;
let bg;
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
  player2.image = loadImage("/assets/player/dog/dog.gif");
}

function setup() {
  bg = loadImage("assets/background/background-img.jpg");
  createCanvas(game.canvasSize.x, game.canvasSize.y);
}

function draw() {
  // background(220, 220, 220);
  background(bg);
  //smooth movement -still testing
  // if (keyIsDown(38)) {
  //   moveUp();
  // }
  image(player1.image, player1.x, player1.y, 55, 55);
  image(player2.image, player2.x, player2.y, 55, 55);
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
