import Ball from './Ball';
import Brick from './Brick';
import GameLabel from './GameLabel';
import Bricks from './Bricks';
import Sprite from './Sprite';

class Game {
  constructor(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');

    // Define the radius of the ball for calculations
    this.ballRadius = 10;

    // Define height and width for the paddle
    this.paddleHeight = 10;
    this.paddleWidth = 75;

    // Define values for the bricks and their overall layout
    this.brickRowCount = 4;
    this.brickColumnCount = 5;
    this.brickWidth = 75;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;

    // Define initial paddle positions
    this.paddleXStart = (this.canvas.width - this.paddleWidth) / 2;
    this.paddleYStart = (this.canvas.height - this.paddleHeight);

    // Define strings commonly used in this program
    this.objectColor = '#0095DD';
    this.gameOverMessage = 'Game Over!';
    this.ARROW_RIGHT = 'ArrowRight';
    this.ARROW_LEFT = 'ArrowLeft';
    this.RIGHT = 'Right';
    this.LEFT = 'Left';
    this.FONT = '16px Arial';

    // Create instances of a ball, a paddle, and a set of bricks
    this.ball = new Ball(0, 0, 2, -2, this.ballRadius, this.objectColor);
    this.paddle = new Sprite(this.paddleXStart, this.paddleYStart, this.paddleWidth, 
      this.paddleHeight, this.objectColor);
    this.bricks = new Bricks({
      cols: this.brickColumnCount,
      rows: this.brickRowCount,
      width: this.brickWidth,
      height: this.brickHeight,
      padding: this.brickPadding,
      offsetLeft: this.brickOffsetLeft,
      offsetTop: this.brickOffsetTop,
      color: this.objectColor,
    });
  }
}

export default Game;
