// 15-8 Count the number of words in a string

var speech = "I  am a good  person. I  don't  snore at   night";

var count = 0;

for (var i = 0; i < speech.length; i++) {
	var char = speech[i];
	// console.log(char);
	if (char == ' ' && speech[i - 1] != ' ') {
		count++;
	}
}
count++;

console.log(count);
