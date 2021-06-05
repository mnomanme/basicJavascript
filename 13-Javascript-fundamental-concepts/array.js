// 13-2 Array, index, set by index, indexOf
var friendsAge = [12, 15, 18, 21];

var sonaliAge = friendsAge[2];

friendsAge[1] = 50; // set array index

var position = friendsAge.indexOf(201); // find array index

console.log(position);

// 13-3 Array advanced, Push, pop, array length
var fruitsPrice = [150, 100, 220, 300];

console.log(fruitsPrice);
console.log(fruitsPrice.length);

fruitsPrice.push(350); // push() is use array add elements in the last position of array list
fruitsPrice.push(420);

console.log(fruitsPrice);
console.log(fruitsPrice.length);

fruitsPrice.pop(); // pop() is use remove elements in array in the last position of array list
console.log(fruitsPrice);

fruitsPrice.unshift(55); // unshift() is use add element in array in the beginning of array list
fruitsPrice.unshift(155);
console.log(fruitsPrice);

fruitsPrice.shift();
console.log(fruitsPrice); // shift() is use remove element in array in the beginning of array list

// 13-4 array add and remove element from the beginning and slice
var teaLine = ["Kalam", "Salam", "Balam", "Talam", "Palam"];
teaLine.push("Jalam");
console.log(teaLine);
teaLine.pop();
console.log(teaLine);

var part = teaLine.slice(1, 4); // 'slice()' is use to cut the value like piece of value in an array list
console.log(part);
console.log(teaLine);

var fuckaLine = ["Naeem", "Montu", "Sezan"];
fuckaLine.shift();
console.log(fuckaLine);
fuckaLine.unshift("Noman", "Mehe");
console.log(fuckaLine);

var fuckaPart = fuckaLine.splice(1, 2); // 'splice()' is use to delete element in array list to set by value
console.log("Splice=>", fuckaPart);
console.log(fuckaLine);
