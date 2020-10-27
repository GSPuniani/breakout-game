const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Define positions for the ball
let x = canvas.width / 2;
let y = canvas.height - 30;

// Define the change in positions applied to the ball
const dx = 2;
const dy = -2;

// Draw the ball as a filled-in circle
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // Clear the canvas to remove the previous drawing
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
// The draw() function will be executed in the function call below every 10 milliseconds
setInterval(draw, 10);
