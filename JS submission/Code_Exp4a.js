//Experiment 4: Write a JavaScript program to compare two strings using various methods

//Method 1: Using toUpperCase()

// js program to perform string comparison

const string1 = prompt();
const string2 =prompt();

// compare both strings
const result = string1.toUpperCase() === string2.toUpperCase();

if(result) {
    console.log('The strings are similar.');
} else {
    console.log('The strings are not similar.');
}