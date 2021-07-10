//15-7 Remove duplicate item from an array

var name = [3, 4, 5, 6, 7, 3, 4, 5, 6, 9, 10, 11, 23, 40];
var uniqueName = [];

for (var i = 0; i < name.length; i++) {
	var element = name[i];
	var index = uniqueName.indexOf(element);
	if (index == -1) {
		uniqueName.push(element);
	}
}
console.log(uniqueName);
