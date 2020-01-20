// class Game {
//   constructor() {
//     console.log("GAME CONSTRUCTOR");
//     this.obstacles = [];
//     this.coinFrames = [];
//   }

//   init() {
//     this.background = new Background();
//     this.player = new Player();

//     for (let i = 0; i < 5; i++) {
//       this.coinFrames.push(loadImage("assets/coins/tile00" + i + ".png"));
//     }

//     this.coinSound = loadSound("assets/coins/sound.mp3");

//     // this.coinFrames = [
//     //   loadImage("assets/coins/tile000.png"),
//     //   loadImage("assets/coins/tile001.png"),
//     //   loadImage("assets/coins/tile002.png"),
//     //   loadImage("assets/coins/tile003.png"),
//     //   loadImage("assets/coins/tile004.png")
//     // ];
//   }

//   draw() {
//     this.background.draw();

//     // create a new obstacle every 2 seconds
//     if (frameCount % 120 === 0) {
//       this.obstacles.push(new Obstacle());
//     }

//     this.obstacles = this.obstacles.filter(
//       function(obstacle) {
//         if (
//           !obstacle.collides(this.player) &&
//           obstacle.x + obstacle.width >= 0
//         ) {
//           return true;
//         }
//       }.bind(this)
//     );

//     this.player.draw();
//   }

//   setup() {
//     this.player.setup();
//   }
// }
