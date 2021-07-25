// https://github.com/nomanme/basic-javascript/blob/master/16-assignment/assignment02.js

// problem 01 solve

// kilometerToMeter

function kilometerToMeter(kilometer) {
	if (typeof kilometer != 'number' || kilometer == undefined || kilometer == null) {
		return 'Please Enter Your Valid Value';
	} else if (kilometer < 0) {
		return 'Distance Value Cannot be Negative';
	}
	let meter = kilometer * 1000; // 1 km = 1000 meter
	// console.log('Check kilometer =>', meter);
	return meter;
}
let totalKilometer = kilometerToMeter(18.5);
console.log('Here KiloMeter is =>', totalKilometer);

// problem 02 solve

// budgetCalculator

function budgetCalculator(watch, phone, laptop) {
	if (typeof watch != 'number' || watch == undefined || watch == null || watch < 0) {
		return 'Please Enter Valid Number';
	} else if (typeof phone != 'number' || phone == undefined || phone == null || phone < 0) {
		return 'Please Enter Valid Number';
	} else if (typeof laptop != 'number' || laptop == undefined || laptop == null || laptop < 0) {
		return 'Please Enter Valid Number';
	}

	let device = watch * 3 + phone * 2 + laptop * 1;
	return device;
}
let price = budgetCalculator(50, 100, 500);
console.log('Total Price =>', price);

// problem 03 solve

// hotelCost

function hotelCost(cost) {
	let day = cost;
	if (day <= 10) {
		// console.log('first week cost:', day);
		return day * 100;
	} else if (day <= 20) {
		// console.log('second week cost:', day);
		return 10 * 100 + (day - 10) * 80;
	} else {
		// console.log('third week cost:', day);
		return 10 * 100 + 10 * 80 + (day - 20) * 50;
	}
}
let totalCost = hotelCost(250);
console.log('All tour cost =>', totalCost);

// problem 04 solve

// megaFriend

let friendName = ['Mohammad', 'Noman', 'Faruque', 'Naeem', 'Zareen', 'Sultana', 'uyhgihujfdcuiyagbufbu'];

function megaFriend(friend) {
	let large = 0;
	let largest;
	for (let i = 0; i < friend.length; i++) {
		if (friend[i].length > large) {
			large = friend[i].length;
			largest = friend[i];
		}
	}
	return largest;
}

let allFriends = megaFriend(friendName);
console.log('My Largest Friend Name =>', allFriends);
