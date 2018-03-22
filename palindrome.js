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
function compareArray (original, reversed) {
    if (original === reversed) {
	   console.log("This is a palindrome!");
	} else if (original !== reversed) {
		console.log("This is not a palindrome");
	}
}
function getArrayValue (arr) {
	for (let i = 0; i < arr.length; i++) {
    return(arr[i]);
	}
}
function runProgram() {
	let userInput = getUserInput ("Enter your input");
	let array1 = splitString(userInput);
	let tempArray = splitString(userInput);
	let array2 = reverseArray(tempArray);
	let arrayValue1 = getArrayValue(array1);
	let arrayValue2 = getArrayValue(array2);
	compareArray(arrayValue1, arrayValue2);
}
runProgram();