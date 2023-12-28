/* Write a JS program to create a new string from a given string taking the firs 3 characters
and the last 3 characters of a string and adding them together. The string lenght must be 3 or more, if not, 
the original string is returned. */

const newString = (str) =>
str.length < 3 ? str : str.slice(0, 3) + str.slice(-3); /* 'length' is how many characters does a string have. */
                                                        

console.log(newString('abc'));
console.log(newString('ab'));
console.log(newString('abc123abc123'));
console.log(newString('abcdef'));

/* Write a program to extraxt the first half of the string of even length. */

const halfString = (str) =>  str.slice(0, str.length / 2);

console.log(halfString('temp'));
console.log(halfString('temple'));
console.log(halfString('temples'));

const extractHalf = (str) => 
str.length % 2 === 0 ? str.slice(0, str.length / 2) : str.slice(0, (str.length / 2) + 1) /*Added function that it takes half only from even strings.
                                                                                        And from odd string that it adds one more character to the half.*/


/* Write a program that adds two strings together except their first character.*/

const concatenateStrings = (a, b) => a.slice(1) + b.slice(1); 

console.log(concatenateStrings('car', 'bus'));


/* Given two values, write a program to find out which one is nearest to 100. */

const nearestTo100 = (a, b) => 100 - a < 100 - b ? a : b

console.log(nearestTo100(50, 30));
console.log(nearestTo100(90, 92));
console.log(nearestTo100(20, 20));


/*Write a program that checks if a give string contains 2 to 4 occurances of a specified character*/

const howMany = (str, char) => 
str.split('').filter(x => x === char).length;

const from2to4 = (str, char) =>
howMany(str, char) >= 2 && howMany(str, char) <= 4;

console.log(from2to4('oh', 'o'));
console.log(from2to4('ooh', 'o'));
console.log(from2to4('ooooh', 'o'));
console.log(from2to4('ooooooh', 'o'));
console.log(from2to4('oohohohohh', 'o'));

