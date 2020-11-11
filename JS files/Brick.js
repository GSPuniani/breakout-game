// Brick.js
import Sprite from './Sprite';

class Brick extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color); // Must pass params to super
    this.status = 1;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Brick;
