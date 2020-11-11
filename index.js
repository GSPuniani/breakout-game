// **************************************************************
// Import class modules
// **************************************************************
// import Ball from './JS files/Ball';
// import Brick from './JS files/Brick';
// import GameLabel from './JS files/GameLabel';
// import Bricks from './JS files/Bricks';

// **************************************************************
// DOM references
// **************************************************************
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// **************************************************************
// Variables
// **************************************************************

// --------------------------------------------------------------
// Constants
// --------------------------------------------------------------

// Define the radius of the ball for calculations
const ballRadius = 10;

// Define height and width for the paddle
const paddleHeight = 10;
const paddleWidth = 75;

// Define constant values for the bricks and their overall layout
const brickRowCount = 4;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

// Define constants for strings commonly used in this program
const ARROW_RIGHT = 'ArrowRight';
const ARROW_LEFT = 'ArrowLeft';
const RIGHT = 'Right';
const LEFT = 'Left';
const FONT = '16px Arial';

// --------------------------------------------------------------
// Variables
// --------------------------------------------------------------

// Define positions for the ball
let x = canvas.width / 2;
let y = canvas.height - 30;

// Define the change in positions applied to the ball
let dx = 2;
let dy = -2;

// Define initial position of the paddle (center of the x-axis)
let paddleX = (canvas.width - paddleWidth) / 2;

// Create a variable to track the score, which is incremented with each ball-brick collision
let score = 0;

// Create a variable for lives
let lives = 3;

// Define Boolean variables for left and right controls (not pressed at the start of the game)
let rightPressed = false;
let leftPressed = false;

// --------------------------------------------------------------
// Setup Bricks Array
// --------------------------------------------------------------
const bricks = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

// **************************************************************
// Functions
// **************************************************************

// Detect ball-brick collisions by comparing the ball's center with each brick position
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const b = bricks[c][r];
      // Active bricks have status of 1 while bricks hit by the ball have status of 0
      if (b.status === 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          if (r === 0) {
            score += 40;
          } else if (r === 1) {
            score += 30;
          } else if (r === 2) {
            score += 20;
          } else if (r === 3) {
            score += 10;
          }
          // Print a message if the user wins and then reset the game
          if (score === 500) {
            alert('YOU WIN, CONGRATULATIONS!');
            document.location.reload();
          }
        }
      }
    }
  }
}

// Display the score
function drawScore() {
  ctx.font = FONT;
  ctx.fillStyle = 'blue';
  ctx.fillText(`Score: ${score}`, 8, 20);
}

// Display the number of lives remaining
function drawLives() {
  ctx.font = FONT;
  ctx.fillStyle = 'red';
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}

// Draw the ball as a filled-in circle
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.closePath();
}

function moveBall() {
  x += dx;
  y += dy;
}

// Draw the paddle as a rectangle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = 'purple';
  ctx.fill();
  ctx.closePath();
}

// Reset the ball and the paddle to their original positions
function resetBallAndPaddle() {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}

// Draw each brick as a rectangle by iterating through a 2-D array of their positions
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      // Draw if the brick has not been hit yet
      if (bricks[c][r].status === 1) {
        const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        if (r % 2 === 0) {
          ctx.fillStyle = 'orange';
        } else {
          ctx.fillStyle = 'black';
        }
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

// Check for collisions with the boundaries of Canvas to either redirect or decrement lives
function collisionCanvas() {
  // Reverse direction of the ball if the edge of the ball hits any canvas boundaries
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
}

// Check for collisions between the ball and the paddle and returns Boolean value
function collisionPaddle() {
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      // Decrement lives counter and reset ball and paddle
      lives -= 1;
      if (!lives) {
        alert('GAME OVER');
        document.location.reload();
      } else {
        resetBallAndPaddle();
      }
    }
  }
}

// Detect key presses to move the paddle
function checkKeys() {
  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }
}

// --------------------------------------------------------------
// Game Loop
// --------------------------------------------------------------

function draw() {
  // Clear the canvas to remove the previous drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the bricks, ball, and paddle and display the score and the number of lives remaining
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();

  // Check for collisions between the ball and the bricks
  collisionDetection();

  // Give the ball horizontal and vertical movement
  moveBall();

  // Check for collisions of the ball with the edges of canvas
  collisionCanvas();

  // Check for collisions of the ball with the paddle
  collisionPaddle();

  // Move the paddle by 7 pixels if left or right control engaged and stop at canvas boundaries
  checkKeys();

  // The browser will control the framerate to produce smooth and efficient effects
  requestAnimationFrame(draw);
}

// --------------------------------------------------------------
// Event Listeners
// --------------------------------------------------------------
function keyDownHandler(e) {
  if (e.key === RIGHT || e.key === ARROW_RIGHT) {
    rightPressed = true;
  } else if (e.key === LEFT || e.key === ARROW_LEFT) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key === RIGHT || e.key === ARROW_RIGHT) {
    rightPressed = false;
  } else if (e.key === LEFT || e.key === ARROW_LEFT) {
    leftPressed = false;
  }
}
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}

// **************************************************************
// Register Events
// **************************************************************
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

// **************************************************************
// Starts program entry point
// **************************************************************
draw();
