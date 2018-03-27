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

function primePrinter (limit)  {
	let array = [];
	for(let i = 2; i <= limit; i++) {
		array[i] = true;
	}
	
	for(let i = 2; i <= limit; i++){
		if(array[i] === true) {
			for(let p = Math.pow(i, 2); p <= limit; p += i) {
				array[p] = false;
			}
		}
	}
	
	for(let i = 2; i <= limit; i++) {
		if (array[i] === true) {
			console.log(i);
		}
	}
	

}
function runProgram () {
	let limit = getUserInteger("enter positive integer");
	primePrinter(limit);
}
runProgram();