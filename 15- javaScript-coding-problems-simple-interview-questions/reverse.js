// 15-9 Reverse a string

function reverseString(str) {
	var reverse = '';

	for (let i = 0; i < str.length; i++) {
		const element = str[i];
		reverse = element + reverse;
	}
	return reverse;
}

var statement = 'Hello Alien bhai brother!';
var forAline = reverseString(statement);
console.log(forAline);

var foodBlog = reverseString('Ki khawa jay...khida lagse bhai!');
console.log(foodBlog);
