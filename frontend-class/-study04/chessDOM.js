var board = document.getElementById("board");

var color;

var sum;
var numberID = 1;
for (var i = 0; i < 4; i++) {
	for (var j = 0; j < 4; j++) {
		// TODO : 여기에 필요한 코드를 작성해주세요.
		var newSpan = document.createElement('span');
		sum = i + j;

		if (sum % 2 === 1) {
			color = " white";
		} else {
			color = " black";
		}
		newSpan.setAttribute('id', sum);
		newSpan.setAttribute('class', color);
		board.appendChild(newSpan);
		numberID++;

	}

}

var paintRed = function(e) {

	if (this.red != null) {
		if ((this.red.id % 2) == 1) {
			this.red.className = this.red.className.replace(" red", " white");
			console.log(e.target.id);
		} else if ((this.red.id % 2) == 0) {
			this.red.className = this.red.className.replace(" red", " black");
			console.log(e.target.id);
		}
	}
	e.target.className += " red";
	this.red = e.target;

};
var red = null;
board.addEventListener('click', paintRed);