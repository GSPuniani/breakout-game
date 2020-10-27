let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Add a red rectangle
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = '#FF0000';
ctx.fill();
ctx.closePath();

// Draw a green circle
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = 'green';
ctx.fill();
ctx.closePath();

// Draw a blue-stroked empty rectangle
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
ctx.stroke();
ctx.closePath();