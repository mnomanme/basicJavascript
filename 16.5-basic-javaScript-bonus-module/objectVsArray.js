// 16_5-4 Object vs Array and access object properties

var friendsAge = [12, 43, 58, 23, 36];
var ami = [12, 23, 58, 'blue'];
var ami2 = { age: 24, height: 70, weight: 55, color: 'blue' };

var myAge = ami2.age;
console.log(myAge);

var myHeight = ami2['height'];
console.log(myHeight);

var lookingFor = 'weight';
var myWeight = ami2[lookingFor];
console.log(myWeight);

ami2.age = 100;
console.log(ami2);

ami2['height'] = 200;
console.log(ami2);

var lookingWeight = 'weight';
ami2[lookingWeight] = 300;
console.log(ami2);
