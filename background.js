// class Background {
//   constructor() {
//     //moving images
//     // this.images = [
//     //   {
//     //     src: loadImage("assets/background/plx-2.png"),
//     //     x: 0,
//     //     speed: 1
//     //   },
//     //   {
//     //     src: loadImage("assets/background/plx-3.png"),
//     //     x: 0,
//     //     speed: 2
//     //   },
//     //   {
//     //     src: loadImage("assets/background/plx-4.png"),
//     //     x: 0,
//     //     speed: 3
//     //   },
//     //   {
//     //     src: loadImage("assets/background/plx-5.png"),
//     //     x: 0,
//     //     speed: 4
//     //   }
//     // ];
//   }

//   move(img) {
//     // image(p5 imgSrc, x, y) (top left hand corner)
//     image(img.src, img.x, 0);
//     image(img.src, img.x + width, 0); // width is the width of the canvas, provided by p5

//     img.x -= img.speed;
//     if (img.x <= -width) {
//       img.x = 0;
//     }
//   }

//   draw() {
//     const c = color(194, 252, 3);
//     background(c); // p5 background function

//     for (let i = 0; i < this.images.length; i++) {
//       this.move(this.images[i]);
//     }
//   }
// }
