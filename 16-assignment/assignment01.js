// Problem one solve

// feetToMile
function feetToMile(feet) {
	let mile = feet / 5280; // There are 5280 foot in a mile

	console.log('Check Mile = >', mile.toFixed(1));

	return mile;
}

let result = feetToMile(90909);
result = result.toFixed(2);

console.log('Feet to Mile = >', result);
