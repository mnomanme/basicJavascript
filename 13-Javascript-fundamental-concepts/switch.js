// 13-7 Javascript Switch Case Break And Default
num = 5;
if (num > 1000) {
} else if (num === 100) {
} else if (num === 50) {
} else if (num === 20) {
} else if (num === 10) {
} else if (num === 5) {
} else if (num === 0) {
} else {
}

num = 10;
switch (num) {
	case 1000:
		console.log('I am 1000');
		break;
	case 100:
		console.log('I am 100');
	case 20:
	case 10:
		console.log('I am either 20 or 10');
		break;
	default:
		console.log('I dont know who you are');
}
