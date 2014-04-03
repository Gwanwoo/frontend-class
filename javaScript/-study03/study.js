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


console.log("FrontEnd-class - OOP 문제2");












console.log("FrontEnd-class - OOP 문제3");
Car.prototype.start = function() {
	console.log('시동 걸림');
	this.isStart = true;
};
Car.prototype.move = function(speed) {
	if (!this.isStart) {
		console.log("시동을 걸어주세요!");
		return;
	}
	console.log(this.model + " : " + speed + "km");
};