// 15-5 Find the largest element of an array

var marks = [50, 20, 55, 86, 99, 100, 60, 40, 34];
var max = marks[0];

for (var i = 0; i < marks.length; i++) {
	var element = marks[i];
	// console.log(element);
	if (element > max) {
		max = element;
	}
}
console.log('Max:', max);
