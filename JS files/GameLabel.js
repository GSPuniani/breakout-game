// GameLabel.js
import Sprite from './Sprite';

class GameLabel extends Sprite {
  constructor(x, y, text, font = '16px Helvetica', color = 'red', align = 'left') {
    super(x, y, color); // Must pass params to super
    this.text = text;
    this.font = font;
    this.align = align;
  }

  render(ctx) {
    ctx.font = this.font;
    ctx.textAlign = this.align;
  }
}

export default GameLabel;
