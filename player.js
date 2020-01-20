class Player {
  constructor(x, y) {
    this.y = y;
    this.x = x;
    this.image = "";
  }

  moveUp() {
    this.y -= 50;
  }

  moveDown() {
    this.y += 50;
  }

  moveLeft() {
    this.x -= 50;
  }

  moveRight() {
    this.x += 50;
  }

  draw() {
    image(this.image, this.y, this.x, 100, 100);
  }
}

//let player1; // cat
//let player2; //dog

////Creating the Players
const player1 = new Player(300, 200);
const player2 = new Player(0, 0);
