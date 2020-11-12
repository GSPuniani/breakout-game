/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS files/Ball.js":
/*!******************************!*\
  !*** ./src/JS files/Ball.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/JS files/Sprite.js\");\n// Ball.js\n;\n\nclass Ball extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 10, color = 'red') {\n    super(x, y, radius * 2, radius * 2, color); // Must pass params to super\n    this.radius = radius;\n    this.dx = dx;\n    this.dy = dy;\n  }\n\n  // Override the render() method in super class\n  render(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n    ctx.closePath();\n  }\n\n  // Keep the ball in motion by continuously adding dx and dy to the x and y positions, respectively\n  move() {\n    this.moveBy(this.dx, this.dy);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n\n//# sourceURL=webpack://breakout-game/./src/JS_files/Ball.js?");

/***/ }),

/***/ "./src/JS files/Brick.js":
/*!*******************************!*\
  !*** ./src/JS files/Brick.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/JS files/Sprite.js\");\n// Brick.js\n;\n\nclass Brick extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(x, y, width, height, color) {\n    super(x, y, width, height, color); // Must pass params to super\n    this.status = 1;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\n\n\n//# sourceURL=webpack://breakout-game/./src/JS_files/Brick.js?");

/***/ }),

/***/ "./src/JS files/Bricks.js":
/*!********************************!*\
  !*** ./src/JS files/Bricks.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick */ \"./src/JS files/Brick.js\");\n;\n\nclass Bricks {\n  constructor(rows = 3, cols = 5) {\n    this.rows = rows;\n    this.cols = cols;\n    this.bricks = [];\n    this.setup();\n  }\n\n  setup() {\n    for (let c = 0; c < this.cols; c += 1) {\n      this.bricks[c] = [];\n      for (let r = 0; r < this.rows; r += 1) {\n        const brick = new _Brick__WEBPACK_IMPORTED_MODULE_0__.default();\n        brick.x = (c * (brick.width + 10)) + 30;\n        brick.y = (r * (brick.height + 10)) + 30;\n        this.bricks[c][r] = brick;\n      }\n    }\n  }\n\n  render(ctx) {\n    for (let c = 0; c < this.cols; c += 1) {\n      for (let r = 0; r < this.rows; r += 1) {\n        if (this.bricks[c][r].status === 1) {\n          this.bricks[c][r].render(ctx);\n        }\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\n\n\n//# sourceURL=webpack://breakout-game/./src/JS_files/Bricks.js?");

/***/ }),

/***/ "./src/JS files/Game.js":
/*!******************************!*\
  !*** ./src/JS files/Game.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/JS files/Ball.js\");\n/* harmony import */ var _GameLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameLabel */ \"./src/JS files/GameLabel.js\");\n/* harmony import */ var _Bricks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bricks */ \"./src/JS files/Bricks.js\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprite */ \"./src/JS files/Sprite.js\");\n;\n// import Brick from './Brick';\n\n\n\n\nclass Game {\n  constructor(canvasID) {\n    this.canvas = document.getElementById(canvasID);\n    this.ctx = this.canvas.getContext('2d');\n    // console.log(this.ctx);\n    // Define the radius of the ball for calculations\n    this.ballRadius = 10;\n\n    // Define height and width for the paddle\n    this.paddleHeight = 10;\n    this.paddleWidth = 75;\n\n    // Define values for the bricks and their overall layout\n    this.brickRowCount = 4;\n    this.brickColumnCount = 5;\n    this.brickWidth = 75;\n    this.brickHeight = 20;\n    this.brickPadding = 10;\n    this.brickOffsetTop = 30;\n    this.brickOffsetLeft = 30;\n\n    // Define initial paddle positions\n    this.paddleXStart = (this.canvas.width - this.paddleWidth) / 2;\n    this.paddleYStart = (this.canvas.height - this.paddleHeight);\n\n    // Define strings commonly used in this program\n    this.objectColor = '#0095DD';\n    this.gameOverMessage = 'Game Over!';\n    this.ARROW_RIGHT = 'ArrowRight';\n    this.ARROW_LEFT = 'ArrowLeft';\n    this.RIGHT = 'Right';\n    this.LEFT = 'Left';\n    this.FONT = '16px Arial';\n\n    // Create instances of a ball, a paddle, a set of bricks, and labels\n    this.ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__.default(0, 0, 2, -2, this.ballRadius, this.objectColor);\n    this.paddle = new _Sprite__WEBPACK_IMPORTED_MODULE_3__.default(this.paddleXStart, this.paddleYStart, this.paddleWidth,\n      this.paddleHeight, this.objectColor);\n    this.bricks = new _Bricks__WEBPACK_IMPORTED_MODULE_2__.default({\n      cols: this.brickColumnCount,\n      rows: this.brickRowCount,\n      width: this.brickWidth,\n      height: this.brickHeight,\n      padding: this.brickPadding,\n      offsetLeft: this.brickOffsetLeft,\n      offsetTop: this.brickOffsetTop,\n      color: this.objectColor,\n    });\n    this.scoreLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_1__.default('Score: ', 8, 20);\n    this.livesLabel = new _GameLabel__WEBPACK_IMPORTED_MODULE_1__.default('Lives: ', this.canvas.width - 65, 20);\n\n    this.rightPressed = false;\n    this.leftPressed = false;\n\n    this.setup();\n    this.draw();\n  }\n\n  // Reset the ball and the paddle to their original positions\n  resetBallAndPaddle() {\n    this.ball.x = this.canvas.width / 2;\n    this.ball.y = this.canvas.height - 30;\n    this.ball.dx = 2;\n    this.ball.dy = -2;\n    this.paddle.x = (this.canvas.width - this.paddleWidth) / 2;\n  }\n\n  setup() {\n    this.livesLabel.value = 3;\n    this.resetBallAndPaddle();\n\n    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);\n    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);\n    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);\n  }\n\n  // Detect ball-brick collisions by comparing the ball's center with each brick position\n  collisionDetection() {\n    for (let c = 0; c < this.bricks.cols; c += 1) {\n      for (let r = 0; r < this.bricks.rows; r += 1) {\n        const brick = this.bricks.bricks[c][r];\n        // Active bricks have status of 1 while bricks hit by the ball have status of 0\n        if (brick.status === 1) {\n          if (this.ball.x > brick.x && this.ball.x < brick.x + this.brickWidth\n            && this.ball.y > brick.y && this.ball.y < brick.y + this.brickHeight) {\n            this.ball.dy = -this.ball.dy;\n            brick.status = 0;\n            if (r === 0) {\n              this.scoreLabel.value += 40;\n            } else if (r === 1) {\n              this.scoreLabel.value += 30;\n            } else if (r === 2) {\n              this.scoreLabel.value += 20;\n            } else if (r === 3) {\n              this.scoreLabel.value += 10;\n            }\n            // Print a message if the user wins and then reset the game\n            if (this.scoreLabel.value === 500) {\n              alert('YOU WIN, CONGRATULATIONS!');\n              document.location.reload();\n            }\n          }\n        }\n      }\n    }\n  }\n\n  // Detect key presses to move the paddle\n  movePaddle() {\n    if (this.rightPressed && this.paddle.x < this.canvas.width - this.paddle.width) {\n      this.paddle.moveBy(7, 0);\n    } else if (this.leftPressed && this.paddle.x > 0) {\n      this.paddle.moveBy(-7, 0);\n    }\n  }\n\n  collisionsWithCanvasAndPaddle() {\n    // Reverse direction of the ball if the edge of the ball hits any canvas boundaries\n    if (this.ball.x + this.ball.dx > this.canvas.width - this.ballRadius\n      || this.ball.x + this.ball.dx < this.ballRadius) {\n      this.ball.dx = -this.ball.dx;\n    }\n\n    // Check for collisions between the ball and the paddle and redirect ball upon such collision\n    if (this.ball.y + this.ball.dy < this.ball.ballRadius) {\n      this.ball.dy = -this.ball.dy;\n    } else if (this.ball.y + this.ball.dy > this.canvas.height - this.ball.ballRadius) {\n      if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddleWidth) {\n        this.ball.dy = -this.ball.dy;\n      } else {\n        // Decrement lives counter and reset ball and paddle\n        this.livesLabel.value -= 1;\n        if (this.livesLabel.value < 1) {\n          alert('GAME OVER');\n          document.location.reload();\n        } else {\n          this.resetBallAndPaddle();\n        }\n      }\n    }\n  }\n\n  keyDownHandler(e) {\n    if (e.key === this.RIGHT || e.key === this.ARROW_RIGHT) {\n      this.rightPressed = true;\n    } else if (e.key === this.LEFT || e.key === this.ARROW_LEFT) {\n      this.leftPressed = true;\n    }\n  }\n\n  keyUpHandler(e) {\n    if (e.key === this.RIGHT || e.key === this.ARROW_RIGHT) {\n      this.rightPressed = false;\n    } else if (e.key === this.LEFT || e.key === this.ARROW_LEFT) {\n      this.leftPressed = false;\n    }\n  }\n\n  mouseMoveHandler(e) {\n    const relativeX = e.clientX - this.canvas.offsetLeft;\n    if (relativeX > 0 && relativeX < this.canvas.width) {\n      this.paddle.moveTo(relativeX - this.paddleWidth / 2, this.paddleYStart);\n    }\n  }\n\n  draw() {\n    // Clear the canvas to remove the previous drawing\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\n    // Draw the bricks, ball, and paddle and display the score and the number of lives remaining\n    this.bricks.render(this.ctx);\n    this.ball.render(this.ctx);\n    this.paddle.render(this.ctx);\n    this.scoreLabel.render(this.ctx);\n    this.livesLabel.render(this.ctx);\n    // Check for collisions between the ball and the bricks\n    this.collisionDetection();\n    // Give the ball horizontal and vertical movement\n    this.ball.move();\n    // Check for collisions of the ball with the edges of canvas and with the paddle\n    this.collisionsWithCanvasAndPaddle();\n    // Move the paddle by 7 pixels if left or right control engaged and stop at canvas boundaries\n    this.movePaddle();\n    // The browser will control the framerate to produce smooth and efficient effects\n    // DOES NOT WORK: requestAnimationFrame(this.draw);\n    // requestAnimationFrame(this.draw.bind(this));\n    requestAnimationFrame(() => {\n      this.draw();\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://breakout-game/./src/JS_files/Game.js?");

/***/ }),

/***/ "./src/JS files/GameLabel.js":
/*!***********************************!*\
  !*** ./src/JS files/GameLabel.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/JS files/Sprite.js\");\n// GameLabel.js\n;\n\nclass GameLabel extends _Sprite__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(x, y, text, font = '16px Helvetica', color = 'red', align = 'left') {\n    super(x, y, 0, 0, color); // Must pass params to super\n    this.text = text;\n    this.font = font;\n    this.align = align;\n    this.value = 0;\n  }\n\n  render(ctx) {\n    ctx.font = this.font;\n    ctx.textAlign = this.align;\n    ctx.fillStyle = this.color;\n    ctx.fillText(`${this.text} ${this.value}`, this.x, this.y);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameLabel);\n\n\n//# sourceURL=webpack://breakout-game/./src/JS_files/GameLabel.js?");

/***/ }),

/***/ "./src/JS files/Sprite.js":
/*!********************************!*\
  !*** ./src/JS files/Sprite.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// Sprite.js\nclass Sprite {\n  constructor(x = 0, y = 0, width = 10, height = 10, color = 'red') {\n    this.x = x;\n    this.y = y;\n    this.width = width;\n    this.height = height;\n    this.color = color;\n  }\n\n  moveTo(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  moveBy(dx, dy) {\n    this.x += dx;\n    this.y += dy;\n  }\n\n  render(ctx) {\n    ctx.beginPath();\n    ctx.rect(this.x, this.y, this.width, this.height);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\n\n\n//# sourceURL=webpack://breakout-game/./src/JS_files/Sprite.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JS_files_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JS files/Game */ \"./src/JS files/Game.js\");\n;\n\n// Draw each brick as a rectangle by iterating through a 2-D array of their positions\n// function drawBricks() {\n//   for (let c = 0; c < brickColumnCount; c += 1) {\n//     for (let r = 0; r < brickRowCount; r += 1) {\n//       // Draw if the brick has not been hit yet\n//       if (bricks[c][r].status === 1) {\n//         const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;\n//         const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;\n//         bricks[c][r].x = brickX;\n//         bricks[c][r].y = brickY;\n//         ctx.beginPath();\n//         ctx.rect(brickX, brickY, brickWidth, brickHeight);\n//         if (r % 2 === 0) {\n//           ctx.fillStyle = 'orange';\n//         } else {\n//           ctx.fillStyle = 'black';\n//         }\n//         ctx.fill();\n//         ctx.closePath();\n//       }\n//     }\n//   }\n// }\n\n// --------------------------------------------------------------\n// Game Loop\n// --------------------------------------------------------------\nconst game = new _JS_files_Game__WEBPACK_IMPORTED_MODULE_0__.default('myCanvas');\ngame.draw();\n\n\n//# sourceURL=webpack://breakout-game/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;