
function createRotateButton() {

	var rotateButton = document.createElement("button");
	rotateButton.innerHTML = "Rotate";

// 2. Append somewhere
	var body = document.getElementsByTagName("body")[0];
	body.appendChild(rotateButton);

// 3. Add event handler
	rotateButton.addEventListener ("click", function() {
  		alert("did something");
	});
}

function createLeftButton() {

	var leftButton = document.createElement("button");
	leftButton.innerHTML = "Left";

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(leftButton);


	leftButton.addEventListener ("click", function() {
  		alert("did something");
	});
}

function createRightButton() {

	var rightButton = document.createElement("button");
	rightButton.innerHTML = "Right";

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(rightButton);

	rightButton.addEventListener ("click", function() {
  		alert("did something");
	});
}

function createDownButton() {

	var downButton = document.createElement("button");
	downButton.innerHTML = "Down";

	var body = document.getElementsByTagName("body")[0];
	body.appendChild(downButton);

	downButton.addEventListener ("click", function() {
  		alert("did something");
	});
}


createRotateButton();
createLeftButton();
createRightButton();
createDownButton();