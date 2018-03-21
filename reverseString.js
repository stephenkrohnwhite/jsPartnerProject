"use strict"
function getUserInput(message) {
	let input = prompt(message);
	return input;
}
function splitString (message) {
	let input = message;
	let result = input.split("");
	return result;
}
function reverseArray (array) {
	let input = array;
	let result = input.reverse();
	return result;
}
function joinArray (array) {
	let input = array;
	let result = input.join("");
	return result;
}
function runProgram() {
	let userInput = getUserInput ("Enter your input");
	let array = splitString(userInput);
	let reversedArray = reverseArray(array);
	let result = joinArray(reversedArray);
	console.log(result);
}
runProgram();