window.addEventListener("load", eventWindowsLoaded, false);

var Debugger = function () { };
Debugger.log = function (message) {
	try {
		console.log(message);
	}
	catch (exception) {
		return;
	}
}


function eventWindowLoaded() {
	canvasApp();
}


function canvasSupport() {
	return Modernizr.canvas;
}


function canvasApp() {
	if (!canvasSupport()) {
		return;
	}

	var manCanvas = document.getElementById("canvasMan");
	var context = manCanvas.getContext("2d");

	Debugger.log("Drawing Canvas");

		function drawScreen() {
			// background color
			context.fillSytle = "#ffffaa";
			context.fillRect(0, 0, 500, 300);

			// text
			content.fillStyel = "#000000";
			context.font = "20px _sans";
			context.textBaseline = "top";
			context.fillText ("Hello World!", 195, 80);

			//image
			var helloWorldImage = new Image();
			helloWorldImage.src = "helloworld.gif";
			helloWorldImage.onload = function() {
				context.drawimage(helloWorldImage, 160, 130);
			}

			// box
			context.strokeStyle = "#000000";
			context.strokeRect(5, 5, 490, 290);

		}

	drawScreen()
