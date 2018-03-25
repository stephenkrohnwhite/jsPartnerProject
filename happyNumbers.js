"use strict"
function getUserInteger(message) {
	let input = prompt(message);
	let num = parseInt(input);
	if (Number.isInteger(num) && num > 0) {
	return num;
	} else {
		console.log("please enter valid poisitive integer");
	}
}

function splitString (integer) {
	let result = Array.from(integer.toString()).map(Number);;
	return result;
}

function testHappyNumber(input) {
	let sumArray = 0;
	while (sumArray !== 1 && sumArray !== 4) {
		let array = splitString(input);
		sumArray = 0;
		for(let i = 0; i < array.length; i++) {
			sumArray += Math.pow(array[i], 2);
		}
			input = sumArray;
			if (input === 1){
			console.log("this is a happy number");
			break;
			} else if (input === 4) {
			console.log("this is not a happy number");
			break;
			}
		} 
	
}

function runProgram() {
	let userInteger = getUserInteger("Please enter valid integer");
	testHappyNumber(userInteger);

}
runProgram();