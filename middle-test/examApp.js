/**
 * 
 */
var template = function(a, b) {
	return (a + '').replace(

	/\{\{([^{}]+)}}/g, function(c, d) { // c will be the complete placeholder, d
										// the part between the mustaches

		return d in (b || {})

		? (/^f/.test(typeof b[d]) ? b[d]() : b[d])

		: c;
	});
}; // 템플릿 함수. HTML문서에 태그를 변경함

var all_data; //all_data 변수는 Json파일을 저장하기 위한 변수.

function callback1(data) {
	console.log(data);
	loadData(data); //json를 이용해서 통신이 이루어 지면 , 데이터를 받고, 그 데이터를 파라미터로 하여 loadData 함수 실행.
}
var url = "Test.js";

var script = document.createElement('script');

script.setAttribute('src', url);

script.setAttribute('id', 'url_test')

document.getElementsByTagName('head')[0].appendChild(script); // js 동적할당

function getDom(id) {	return document.getElementById(id);     }

function loadData(data) {

	var parseString_news = [];
	var parseString_enter = [];
	var parseString_sport = [];

	all_data = data;// JSONP 를 이용해서 callback 함수로 받은 데이터(JSON파일)을 all_data로 넣음.
	var templateString = getDom('boxTemplate').innerHTML;
	var count1 = 0;
	var count2 = 0; //처음에 데이터를 각 요소에 넣을때, 다섯개의 li만 체크하여 넘기기 위한 count변수들 선언.
	var count3 = 0;
	for (var i = 0; i < all_data[0].news.length; i++) {
		if (count1 < 5) {

			parseString_news.push(template(templateString, {
				countClass : 'none',
				title : all_data[0].news[i].title,
				newsId : all_data[0].news[i].newsId

			}));
			
		} else {
			parseString_news.push(template(templateString, {
				countClass : 'hide',
				title : all_data[0].news[i].title,
				newsId : all_data[0].news[i].newsId

			}));
		}
		count1++;
	} 

	for (var i = 0; i < all_data[1].enter.length; i++) {

		if (count2 < 5) {
			parseString_enter.push(template(templateString, {
				countClass : 'none',
				title : all_data[1].enter[i].title,
				newsId : all_data[1].enter[i].newsId
			}));

		} else {
			parseString_enter.push(template(templateString, {
				countClass : 'hide',
				title : all_data[1].enter[i].title,
				newsId : all_data[1].enter[i].newsId
			}));
		}
		count2++;
	}
	for (var i = 0; i < all_data[2].sports.length; i++) {
		if (count3 < 5) {
			parseString_sport.push(template(templateString, {
				countClass : 'none',
				title : all_data[2].sports[i].title,
				newsId : all_data[2].sports[i].newsId
			}));
		} else {
			parseString_sport.push(template(templateString, {
				countClass : 'hide',
				title : all_data[2].sports[i].title,
				newsId : all_data[2].sports[i].newsId
			}));
		}
		count3++;
	}

	getDom('news_list').innerHTML = '<ul class="displayCheck">'
			+ parseString_news.join("");

	getDom('entertain_list').innerHTML = '<ul class="displayCheck">'
			+ parseString_enter.join("");

	getDom('sport_list').innerHTML = '<ul class="displayCheck">'
			+ parseString_sport.join("");
}

function addEvent(el, eType, fn, uC) {
	if (el.addEventListener) {
		el.addEventListener(eType, fn, uC);
		return true;
	} else if (el.attachEvent) {
		return el.attachEvent('on' + eType, fn);
	} else {
		el['on' + eType] = fn;
	}
}

var beforeActive=getDom('news').parentElement;

function clickHandler(e) {
	var id = e.target.id;
	beforeActive.setAttribute('class','');
	var parentLi= e.target.parentElement;
	var t = getDom(id + '_list');
	var p = getDom('display_news');
	for (var i = 0; i < p.childNodes.length; i++) {
		var c = p.childNodes[i];
		if (c.nodeName == 'DIV') {
			c.setAttribute('class', 'hide');
		}
	}
	t.setAttribute('class', 'z');
	parentLi.setAttribute('class', 'active');
	beforeActive=parentLi;
}


var check_more = 0; // 더보기 클릭 횟수 관리. 이미 클릭된 상태를 홀수, 닫힌상태를 짞수
var countForFive;
function clickHandlerMore(e) {
	console.log("z");
	if (check_more == 0) { // 처음 이벤트가 실행 될때만, 각 문자열 변수에 타이틀을 집어넣습니다.
		var parent1 = getDom('display_news');
		for (var i = 0; i < parent1.childNodes.length; i++) {
			var childDiv = parent1.childNodes[i];
			if (childDiv.nodeName == 'DIV') {
				var ulParent = childDiv.childNodes[0];
				for (var j = 0; j < ulParent.childNodes.length; j++) {
					var childeLi = ulParent.childNodes[j];
					if (childeLi.nodeName == 'LI') {
						childeLi.setAttribute('class', 'none');
					}
				}
			}
		}
	}
	if ((check_more % 2) == 0) { // 짝수번 눌릴때만, 더보기가 열리고 아니면 닫힙니다.
		var parent1 = getDom('display_news');
		for (var i = 0; i < parent1.childNodes.length; i++) {
			var childDiv = parent1.childNodes[i];
			if (childDiv.nodeName == 'DIV') {
				var ulParent = childDiv.childNodes[0];
				for (var j = 0; j < ulParent.childNodes.length; j++) {
					var childeLi = ulParent.childNodes[j];
					if (childeLi.nodeName == 'LI') {
						childeLi.setAttribute('class', 'none');
					}
				}
			}
		}
		check_more++;
	} else {

		var parent1 = getDom('display_news');
		for (var i = 0; i < parent1.childNodes.length; i++) {
			var childDiv = parent1.childNodes[i];
			countForFive = 0;
			if (childDiv.nodeName == 'DIV') {
				var ulParent = childDiv.childNodes[0];
				for (var j = 0; j < ulParent.childNodes.length; j++) {
					var childeLi = ulParent.childNodes[j];
					if (childeLi.nodeName == 'LI') {
						if (countForFive < 5) {
							childeLi.setAttribute('class', 'none');
						} else if (countForFive >= 5) {
							childeLi.setAttribute('class', 'hide');
						}
						countForFive++;
					}
				}
			}
		}
		check_more++;
	}

}
addEvent(getDom('news'), 'click', clickHandler)
addEvent(getDom('entertain'), 'click', clickHandler)
addEvent(getDom('sport'), 'click', clickHandler)
addEvent(getDom('more_news'), 'click', clickHandlerMore)