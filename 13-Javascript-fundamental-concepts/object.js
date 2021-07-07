// 13-11 Object, key value pair, get object property, set value
var student = { id: 111, phone: 1234, name: 'Mohammad' };
var student2 = { id: 222, phone: 2345, name: 'Noman' };
var student3 = { id: 333, phone: 3456, name: 'Abdullah' };

// show output of three students objects
console.log(student);
console.log(student2);
console.log(student3);

// find out object property solution-1
var phoneNo1 = student.phone;
console.log(phoneNo1);

// update phone number solution-1
student.phone = 909990;
console.log(student);

// add property in an object solution-1
student.skill = 'C++';
console.log(student);

// find out object property solution-2
var phoneNo2 = student2['phone'];
console.log(phoneNo2);

// update phonen number solution-2
student2['phone'] = 880880;
console.log(student2);

// add property in an object solution-2
student2['skill'] = 'javaScript';
console.log(student2);

// find out object property solution-3
var phonePropName = 'phone';
var phoneNo3 = student3[phonePropName];
console.log(phoneNo3);

// update phone number solution-3
student3[phonePropName] = 770770;
console.log(student3);

// add property in an object solution-3
var phonePropName = 'skill';
student3[phonePropName] = 'python';
console.log(student3);
