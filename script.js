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

// Draw the ball as a filled-in circle
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // Clear the canvas to remove the previous drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball and paddle
  drawBall();
  drawPaddle();

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
