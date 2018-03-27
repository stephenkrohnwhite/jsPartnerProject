function getUserInteger(message) {
	let input = prompt(message);
	let num = parseInt(input);
	if (Number.isInteger(num) && num > 0) {
	return num;
	} else {
		console.log("please enter valid poisitive integer");
	}
}

function fibonacciSequencer (start, limit) {
	let a = 0;
	let b = start;
	let store = 0;
	
	while (store <= limit) {
		store = b;
		if(store >= limit) {
			break;
		}
		console.log(store);
		b = store + a;
		a = store;
		

	}
}
	
function runProgram() {
	let start = getUserInteger("Enter a starting value");
	let limit = getUserInteger("Enter an end limit");
	fibonacciSequencer(start, limit);
}
runProgram();