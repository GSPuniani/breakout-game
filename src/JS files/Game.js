import Ball from './Ball';
// import Brick from './Brick';
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

    // Create instances of a ball, a paddle, a set of bricks, and labels
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
    this.scoreLabel = new GameLabel('Score: ', 8, 20);
    this.livesLabel = new GameLabel('Lives: ', this.canvas.width - 65, 20);

    this.rightPressed = false;
    this.leftPressed = false;

    this.setup();
    this.draw();
  }

  // Reset the ball and the paddle to their original positions
  resetBallAndPaddle() {
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height - 30;
    this.ball.dx = 2;
    this.ball.dy = -2;
    this.paddle.x = (this.canvas.width - this.paddleWidth) / 2;
  }

  setup() {
    this.livesLabel.value = 3;
    this.resetBallAndPaddle();

    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
  }

  // Detect ball-brick collisions by comparing the ball's center with each brick position
  collisionDetection() {
    for (let c = 0; c < this.bricks.cols; c += 1) {
      for (let r = 0; r < this.bricks.rows; r += 1) {
        const brick = this.bricks.bricks[c][r];
        // Active bricks have status of 1 while bricks hit by the ball have status of 0
        if (brick.status === 1) {
          if (this.ball.x > brick.x && this.ball.x < brick.x + this.brickWidth
            && this.ball.y > brick.y && this.ball.y < brick.y + this.brickHeight) {
            this.ball.dy = -this.ball.dy;
            brick.status = 0;
            if (r === 0) {
              this.scoreLabel.value += 40;
            } else if (r === 1) {
              this.scoreLabel.value += 30;
            } else if (r === 2) {
              this.scoreLabel.value += 20;
            } else if (r === 3) {
              this.scoreLabel.value += 10;
            }
            // Print a message if the user wins and then reset the game
            if (this.scoreLabel.value === 500) {
              alert('YOU WIN, CONGRATULATIONS!');
              document.location.reload();
            }
          }
        }
      }
    }
  }

  // Detect key presses to move the paddle
  movePaddle() {
    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {
      this.paddle.moveBy(7, 0);
    } else if (this.leftPressed && this.paddle.x > 0) {
      this.paddle.moveBy(-7, 0);
    }
  }

  collisionsWithCanvasAndPaddle() {
    // Reverse direction of the ball if the edge of the ball hits any canvas boundaries
    if (this.ball.x + this.ball.dx > this.canvas.width - this.ballRadius
      || this.ball.x + this.ball.dx < this.ballRadius) {
      this.ball.dx = -this.ball.dx;
    }

    // Check for collisions between the ball and the paddle and redirect ball upon such collision
    if (this.ball.y + this.ball.dy < this.ball.ballRadius) {
      this.ball.dy = -this.ball.dy;
    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.ballRadius) {
      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddleWidth) {
        this.ball.dy = -this.ball.dy;
      } else {
        // Decrement lives counter and reset ball and paddle
        this.livesLabel.value -= 1;
        if (this.livesLabel.value < 1) {
          alert('GAME OVER');
          document.location.reload();
        } else {
          this.resetBallAndPaddle();
        }
      }
    }
  }

  keyDownHandler(e) {
    if (e.key === this.RIGHT || e.key === this.ARROW_RIGHT) {
      this.rightPressed = true;
    } else if (e.key === this.LEFT || e.key === this.ARROW_LEFT) {
      this.leftPressed = true;
    }
  }

  keyUpHandler(e) {
    if (e.key === this.RIGHT || e.key === this.ARROW_RIGHT) {
      this.rightPressed = false;
    } else if (e.key === this.LEFT || e.key === this.ARROW_LEFT) {
      this.leftPressed = false;
    }
  }

  mouseMoveHandler(e) {
    const relativeX = e.clientX - this.canvas.offsetLeft;
    if (relativeX > 0 && relativeX < this.canvas.width) {
      this.paddle.moveTo(relativeX - this.paddleWidth / 2, this.paddleYStart);
    }
  }

  draw() {
    // Clear the canvas to remove the previous drawing
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the bricks, ball, and paddle and display the score and the number of lives remaining
    this.bricks.render(this.ctx);
    this.ball.render(this.ctx);
    this.paddle.render(this.ctx);
    this.scoreLabel.render(this.ctx);
    this.livesLabel.render(this.ctx);
    // Check for collisions between the ball and the bricks
    this.collisionDetection();
    // Give the ball horizontal and vertical movement
    this.ball.move();
    // Check for collisions of the ball with the edges of canvas and with the paddle
    this.collisionsWithCanvasAndPaddle();
    // Move the paddle by 7 pixels if left or right control engaged and stop at canvas boundaries
    this.movePaddle();
    // The browser will control the framerate to produce smooth and efficient effects
    requestAnimationFrame(this.draw);
  }
}

export default Game;
