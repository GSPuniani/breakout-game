// Brick.js
import Sprite from './Sprite';

class Brick extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color); // Must pass params to super
    this.status = 1;
  }
}

export default Brick;
