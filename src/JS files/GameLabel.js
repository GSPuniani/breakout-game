// GameLabel.js
import Sprite from './Sprite';

class GameLabel extends Sprite {
  constructor(x, y, text, font = '16px Helvetica', color = 'red', align = 'left') {
    super(x, y, 0, 0, color); // Must pass params to super
    this.text = text;
    this.font = font;
    this.align = align;
    this.value = 0;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.textAlign = this.align;
    ctx.fillStyle = this.color;
    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);
  }
}

export default GameLabel;
