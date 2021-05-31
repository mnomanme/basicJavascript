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
