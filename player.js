class Player {
  constructor(x, y, width, height) {
    this.y = y;
    this.x = x;
    this.image = "";
    this.width = width;
    this.height = height;
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

  // draw() {
  //   image(this.image, this.y, this.x, 100, 100);
  // }
  collides(obj) {
    //check if obj collides with self
    //self completely to the left || self completely to the right
    if (this.x + this.width < obj.x || obj.x + this.width < this.x) {
      return false;
    }
    // self completely to the top || self completely to the bottom
    if (this.y + this.height < obj.y || obj.y + this.height < this.y) {
      return false;
    }
    return true;
  }
}

//let player1; // cat
//let player2; //dog

// // ////Creating the Players
//cat
const player1 = new Player(300, 200, 75, 75);

//dog
const player2 = new Player(0, 0, 100, 100);
