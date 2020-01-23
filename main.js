let scoreCat = 0;
let scoreDog = 0;
let timer = 200;
let lake;
let bush;
let catWin;
let dogWins;
let bg;
let catGif = false;
let dogGif = false;

class Game {
  constructor(x, y) {
    this.players = "Markus";
    this.gameOver = false;
    this.canvasSize = {
      x: 1000,
      y: 700
    };
  }
  reset() {
    this.scoreCat = 0;
    this.scoreDog = 0;
    this.timer = 20;
  }
}

const game = new Game();

function preload() {
  player1.image = loadImage("assets/player/cat/cat-walk/cat-walk.gif");
  player2.image = loadImage("assets/player/dog/dog1.gif");
  // lake = loadImage("assets/background/lake.png");
  bush = loadImage("assets/background/bush.png");
  catWin = loadImage("assets/background/cat-wins.gif");
  dogWin = loadImage("assets/background/dog-wins.gif");
  this.catSound = loadSound("assets/coins/catt.mp3");
  this.dogSound = loadSound("assets/coins/dogg.mp3");
}

function setup() {
  bg = loadImage("assets/background/background-img.jpg");
  createCanvas(game.canvasSize.x, game.canvasSize.y);
}

function draw() {
  // background(220, 220, 220);
  background(bg);
  //SCORE
  textSize(32); // size
  fill(255, 255, 255); //color ${}
  text(`Score-Dog: ${scoreDog.toFixed(2)}`, width - width / 1.1, 30); //

  textSize(32);
  fill(255, 255, 255);
  text(`Timer: ${timer.toFixed(2)}`, width - width / 1.7, 30);

  textSize(32);
  fill(255, 255, 255);
  text(`Score-Cat: ${scoreCat.toFixed(2)}`, width - width / 2.9, 30);
  if (catGif) {
    image(catWin, width - width / 1.2, 130, 610, 510);
    textSize(32);
    fill(255, 255, 255);
    text(`Game-Over: The cat wins.`, width - width / 1.45, 60);
    textSize(32);
    fill(255, 255, 255);
    text(`Refresh the page to play again.:)`, width - width / 1.4, 95);
    return;
  } else if (dogGif) {
    image(dogWin, width - width / 1.2, 130, 610, 510);
    text(`Game-Over: The dog wins.`, width - width / 1.45, 60);
    textSize(32);
    fill(255, 255, 255);
    text(`Refresh the page to play again.:)`, width - width / 1.4, 95);
    return;
  }

  //Image(lake);
  //smooth movement -still testing
  // console.log({ timer });
  image(player1.image, player1.x, player1.y, player1.width, player1.height);
  image(player2.image, player2.x, player2.y, player2.width, player2.height);
  // image(lake, width - width / 4, height - 220, 250, 250);
  image(bush, width - width / 1, 250, 210, 210);
  image(bush, width - width / 2, 520, 210, 210);
  image(bush, width - width / 3, 50, 210, 210);

  if (timer > 0) {
    if (player1.collides(player2)) {
      scoreDog += 0.04;
      //cat sound
      if (frameCount % 180 == 0) {
        this.catSound.play();
      }
      // console.log(scoreDog.toFixed(2));
    } else if (!player2.collides(player1)) {
      scoreCat += 0.01;
      //dog sound
      if (frameCount % 180 == 0) {
        this.dogSound.play();
      }

      console.log(scoreCat.toFixed(2));
    }
  }

  if (timer < 1) {
    this.gameOver = true;
    console.log(this.gameOver);
  }

  //TIMER
  for (let i = 20; i > 0; i--) {
    if (timer > 0) {
      timer -= 0.0009;
    } else {
      timer = 0;

      if (scoreCat > scoreDog) {
        textSize(32);
        fill(255, 255, 255);
        text(`Game-Over: The cat wins.`, width - width / 1.45, 60);
        textSize(32);
        fill(255, 255, 255);
        text(`Refresh the page to play again.:)`, width - width / 1.4, 95);

        // document.getElementsByClassName(".visible");
        if (catGif === false) {
          image(catWin, width - width / 1.2, 130, 610, 510);
          catGif = true;
        }
      } else {
        text(`Game-Over: The dog wins.`, width - width / 1.45, 60);
        textSize(32);
        fill(255, 255, 255);
        text(`Refresh the page to play again.:)`, width - width / 1.4, 95);

        if (dogGif === false) {
          image(dogWin, width - width / 1.2, 130, 610, 510);
          dogGif = true;
        }
      }
      // return timer;
    }
    // console.log(timer);
  }
  //score
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
  if (!game.gameOver) {
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
  } else if (keyCode === 32) {
    preload();
    draw();
    game.reset();
    game.gameOver = false;
  }
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
