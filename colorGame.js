var numOfSquares = 6;

var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent == "Easy") {
				numOfSquares = 3;
			} else {
				numOfSquares = 6;
			}

			reset();
		})
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++) {
		// add click listener to squares
		squares[i].addEventListener("click", function(){
			// alert("click a square"): alert就像是别的编程里是print...看看出来的是啥

			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor == pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}
}


function reset(){
	// generate all new colors
	colors = generateRandomColors(numOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to matfch picked color
	colorDisplay.textContent = pickedColor; // 写这个的时候把他写成pickColor了...出现了奇怪的错误
	// reset the text
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			// bring the 6 squares back
			squares[i].style.display = "block"; 
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none"; 
		}	
	}
	h1.style.backgroundColor = "steelblue"; // 第一次写的时候忘记加“”了
}

// alert用作刚开始连接时候的效果检查
// 一点点效果就要写一堆的代码...写完之后记得refactor你的代码
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numOfSquares = 3
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })

resetButton.addEventListener("click", function(){
	reset();
})




function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// Math.random will generate (0, 1)
	// Math.floor will remove the decimal
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = []
	// add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor()); // 这个push的操作就和python很像了
	}
	// return that array
	return arr;
}

function randomColor() {
	// pick a "red" from 0-255 and so on
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	// 这种return看上去很厉害的样子...
	// 注意本来的rgb是有空格的
	return "rgb(" + r + ", " + g + ", " +  + b + ")";
}