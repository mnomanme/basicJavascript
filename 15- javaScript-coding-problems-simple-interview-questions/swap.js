//15-2 Swap variable, swap without temp, destructing

// first step
var a = 10;
var b = 20;

console.log('before swap:', 'a =>', a, 'b =>', b);

var temp = a;
a = b;
b = temp;

console.log('after swap:', 'a =>', a, 'b =>', b);

// second step
var x = 3;
var y = 5;

console.log('before swap:', 'x =>', x, 'y =>', y);

x = x + y;
y = x - y;
x = x - y;

console.log('after swap:', 'x =>', x, 'y =>', y);

// third step
var p = 7;
var q = 9;

[p, q] = [q, p];

console.log('after swap:', 'p =>', p, 'q =>', q);
