const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Define positions for the ball
let x = canvas.width / 2;
let y = canvas.height - 30;

// Define the change in positions applied to the ball
let dx = 2;
let dy = -2;

// Define the radius of the ball for calculations
const ballRadius = 10;

// Define specifications for the paddle (height, width, and starting position on x-axis)
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;

// Define Boolean variables for left and right controls (not pressed at the start of the game)
let rightPressed = false;
let leftPressed = false;

// Define variables for the bricks and the overall layout
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

// Create the brick objects with a 2-D array
const bricks = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

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
        }
      }
    }
  }
}

// Draw the ball as a filled-in circle
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

// Draw the paddle as a blue rectangle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

// Draw each brick as a blue rectangle by iterating through a 2-D array of their positions
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
        ctx.fillStyle = '#0095DD';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw() {
  // Clear the canvas to remove the previous drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the bricks, ball, and paddle
  drawBricks();
  drawBall();
  drawPaddle();

  // Check for collisions between the ball and the bricks
  collisionDetection();

  // Give the ball horizontal and vertical movement
  x += dx;
  y += dy;

  // Reverse direction of the ball if the edge of the ball hits any canvas boundaries
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert('GAME OVER');
      document.location.reload();
      clearInterval(interval);
    }
  }

  // Move the paddle by 7 pixels if left or right control engaged and stop at canvas boundaries
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

// Handler functions for left and right controls
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

// Event listeners for left and right controls
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

// The draw() function will be executed in the function call below every 10 milliseconds
const interval = setInterval(draw, 10);
