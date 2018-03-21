"use strict"
function getUserInput(message) {
	let input = prompt(message);
	return input;
}
function compressString (str) {
	let newMessage = " ";
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		counter++;
		if(str[i] != str[i + 1]) {
			newMessage += str[i] + counter;
			counter = 0;
		}
	} return newMessage;
} 

function runProgram() {
	let userInput = getUserInput("Enter valid string");
	let result = compressString(userInput);
	console.log(result);
}
runProgram();