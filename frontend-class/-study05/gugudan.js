/**
 * 
 */

var inputValue = document.getElementById("inputText");

var okBt = document.getElementById("inputBt");

var outputArea1 = document.getElementById("outputArea");
outputArea1.innerHTML = "구구단"
var gugudan = " ";

var ulArea1 = document.getElementById("ulArea");
okBt.onclick = function() {

	var dan = inputValue.value;
	for (var j = 1; j <= 9; j++) {
		gugudan = gugudan + "구구단" + dan + "x" + j + "=" + dan * j + "<br>";

	}
	outputArea1.innerHTML = gugudan;

};
