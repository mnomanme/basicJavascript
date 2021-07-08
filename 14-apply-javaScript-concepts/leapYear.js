//14-4 check whether a year is a Leap Year or not
const year = 1996;
const remainder = year % 4;
console.log(remainder);
if (remainder == 0) {
	console.log('Your year is a leap year');
} else {
	console.log('Your year is not a leap year');
}

// using function to check leap year
function isLeapYear(year) {
	const remainder = year % 4;
	if (remainder == 0) {
		return true;
	} else {
		return false;
	}
}

let leapYear = isLeapYear(1996);
console.log(leapYear);

// full fill cover leap year
function findLeapYear(year) {
	if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
		return true;
	} else {
		return false;
	}
}
let firstYear = findLeapYear(1700);
console.log(firstYear);

let secondYear = findLeapYear(1996);
console.log(secondYear);

let thirdYear = findLeapYear(2000);
console.log(thirdYear);
