import Game from './JS files/Game';

// Draw each brick as a rectangle by iterating through a 2-D array of their positions
// function drawBricks() {
//   for (let c = 0; c < brickColumnCount; c += 1) {
//     for (let r = 0; r < brickRowCount; r += 1) {
//       // Draw if the brick has not been hit yet
//       if (bricks[c][r].status === 1) {
//         const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
//         const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
//         bricks[c][r].x = brickX;
//         bricks[c][r].y = brickY;
//         ctx.beginPath();
//         ctx.rect(brickX, brickY, brickWidth, brickHeight);
//         if (r % 2 === 0) {
//           ctx.fillStyle = 'orange';
//         } else {
//           ctx.fillStyle = 'black';
//         }
//         ctx.fill();
//         ctx.closePath();
//       }
//     }
//   }
// }

// --------------------------------------------------------------
// Game Loop
// --------------------------------------------------------------
const game = new Game('myCanvas');
game.draw();
