// Ball.js
import Sprite from './Sprite';

class Ball extends Sprite {
  constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 10, color = 'red') {
    super(x, y, radius * 2, radius * 2, color); // Must pass params to super
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }

  // Override the render() method in super class
  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // Keep the ball in motion by continuously adding dx and dy to the x and y positions, respectively
  move() {
    this.moveBy(this.dx, this.dy);
  }
}

export default Ball;
