class Obstacle {
  constructor() {
    this.width = 25;
    this.height = 25;

    this.x = width;
    this.y = random(0, height - this.height);
    // random() is a p5 function that accepts a range
    this.counter = 0;
  }

  draw() {
    this.x -= 2;
    // rect(this.x, this.y, this.width, this.height);

    // every 6 frames, increment the counter (used to access a coin frame) while staying in the boundaries of the coinFrames array
    if (frameCount % 6 === 0) {
      this.counter = (this.counter + 1) % game.coinFrames.length;
    }

    image(
      game.coinFrames[this.counter],
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  collides(obj) {
    // check if obj collides with self
    // self completely to the left || self completely to the right
    if (this.x + this.width < obj.x || obj.x + obj.width < this.x) {
      return false;
    }
    // self completely to the top || self completely to the bottom
    if (this.y + this.height < obj.y || obj.y + obj.height < this.y) {
      return false;
    }

    // collision detected -> we can play the sound
    game.coinSound.play();

    return true;
  }
}
