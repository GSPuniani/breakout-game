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

// Draw the ball as a filled-in circle
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // Clear the canvas to remove the previous drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball by calling the above function
  drawBall();

  // Give the ball horizontal and vertical movement
  x += dx;
  y += dy;

  // Reverse direction of the ball if the edge of the ball hits any canvas boundaries
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }
}
// The draw() function will be executed in the function call below every 10 milliseconds
setInterval(draw, 10);
