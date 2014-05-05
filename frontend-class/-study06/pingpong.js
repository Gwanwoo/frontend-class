/**
 * 
 */
var doc_h = (window.innerHeight || self.innerHeight
		|| document.documentElement.clientHeight || document.body.clientHeight);
var doc_w = (window.innerWidth || self.innerWidth
		|| document.documentElement.clientWidth || document.body.clientWidth);
 //현재 브라우저의 최대 높이 최대 넓이를 구함.

var MAX_hight_coordinate = (doc_h - 100) + "px"; 
var MAX_width_coordinate = (doc_w - 100) + "px";
var MIN_hight_coordinate = ((doc_h + 50) - (doc_h)) + "px";
var MIN_width_coordinate = ((doc_w + 50) - (doc_w)) + "px";
var current_coordinates = $("#block")[0].offsetLeft; // 지금 block엘리먼트의 좌표값

$("#pingpong").click(function() {
	current_coordinates = $("#block")[0].offsetLeft;
	if (current_coordinates <= (doc_w - 150)) {
		$("#block").animate({
			"left" : MAX_width_coordinate,
			'top' : MAX_hight_coordinate,
			'background-color' : '#fff'
		}, "slow");
	} else {
		$("#block").animate({
			"left" : MIN_width_coordinate,
			'top' : MIN_hight_coordinate,
			'background-color' : '#fff'
		}, "slow");
	}
});
