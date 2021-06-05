//13-6 For loop loop, run a loop for each element of an array
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var nums = [11, 22, 33, 44, 55, 66, 77, 88, 99];

for (var i = 0; i < nums.length; i++) {
  console.log(i);
  var element = nums[i];
  console.log(element);
}

var friends = ["Montu", "Sezan", "Naeem", "Noman"];

for (i = 0; i < friends.length; i++) {
  var friendsName = friends[i];
  console.log(friendsName);
}
