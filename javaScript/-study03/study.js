/**
 * 
 */
console.log("FrontEnd-class - OOP 문제1");

function Phone(model, Inc) {

	this.SEAT_COUNT = 5;

	this.model = model;
	this.year = Inc;
}

var testP = new Phone('iPhone5', 'apple');
console.log(testP.model);

Phone.prototype.opening = function(phoneNum) {
	console.log('핸드폰 개통');
	this.phoneNum = phoneNum;
	console.log(phoneNum);
};
Phone.prototype.sendSMS = function(others, msg) {

	if (!others.name === others) {
		console.log("없는 전화번호입니다. 확인하시고 다시걸어주세요.");
		return;
	}
	console.log(this.model + "님이" + others.name + "에게:" + msg);
};

function Person(name, age) {

	this.SEAT_COUNT = 5;

	this.name = name;
	this.age = age;
}

var YoungHee = new Person('Young-hee', 24);
console.log(YoungHee.name);
var LiHee = new Person('Li-Hee', 25);
console.log(liHee.name);
-----------------------------------------------------------------------------------
/*console.log("FrontEnd-class - OOP 문제2");

var StaticClass = (function() {
	return {
		to100print : function() {

			for (var i = 1; i <= 100; i++) {
				console.log(i);
			}
		},
		GuGudan : function() {
			for (var i = 2; i <= 9; i++) {
				for (var j = 1; j <= 9; j++)
					console.log("구구단" + i + "x" + j + "=" + i * j)

			}
		},
		oddNumPrint : function() {
			for (var i = 1; i <= 100; i++) {
				if ((i % 2) == 0)
					console.log(i);
			}
		},
		sumPrint : function() {

			var arr = [];

			for (var i = 0; i < 1000; i++) {
				arr[i] = prompt("정수를 입력하세요");
				if (arr[i] == null) {
					break;
				}
			}
			var sum = 0;
			for (var k = 0; k < arr.length; k++) {
				sum = sum + arr[k] * 1;
			}

			alert("합은" + sum);
		}
	}

})();
---------------------------------------------------------------------------------------------
console.log("FrontEnd-class - OOP 문제3");

function Phone(Type, Number) {

	this.SEAT_COUNT = 5;

	this.Type = Type;
	this.Number = Number;

	this.getNumber = function() {
		return Number
	};

}
Phone.prototype.opening = function(phoneNum) {
	console.log('핸드폰 개통');
	this.phoneNum = phoneNum;
	console.log(phoneNum);
};
Phone.prototype.sendSMS = function(others, msg) {

	if (!others.name === others) {
		console.log("없는 전화번호입니다. 확인하시고 다시걸어주세요.");
		return;
	}
	console.log(this.model + "님이" + others.name + "에게:" + msg);
};

function iPhone(model, year) {
	Phone.call(this, model, year); // call()사용
	this.SEAT_COUNT = 20;
}

function Android(model, year) {
	Phone.call(this, model, year); // call()사용
	this.SEAT_COUNT = 20;
}

function Person(name, age, phoneNum,Type) {

	this.SEAT_COUNT = 5;

	this.name = name;
	this.age = age;
	this.PhoneNum = phoneNum;
	
	var myPhone = new Phone(Type, phoneNum);

}

var YoungHee = new Person('Young-hee', 24);
console.log(YoungHee.name);
var LiHee = new Person('Li-Hee', 25);
console.log(liHee.name);
*/
