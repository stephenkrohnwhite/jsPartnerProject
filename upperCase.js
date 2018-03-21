"use strict"
function getUserInput(message) {
	let input = prompt(message);
	return input;
}
function splitString (message) {
	let input = message;
	let result = input.split(" ");
	return result;
}
function upperCaseFirstLetter (array) {
	let i = [];
	for (let i = 0; i < array.length; i++){
	array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	} return array;
}
function runProgram() {
	let userInput = getUserInput("enter your input");
	let splitUserInput = splitString(userInput);
	let result = upperCaseFirstLetter(splitUserInput);
	console.log(result);
}
runProgram();