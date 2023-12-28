/* Write a JS program to check two numbers and return true if one of the numbers is 100 or 
* if the sum of the numbers is 100.
*/

const equalToAHundred = (a, b) => a === 100 || b === 100 || (a + b) === 100; /* || = or, === is really equal */

console.log(equalToAHundred(100,13));
console.log(equalToAHundred(10,100));
console.log(equalToAHundred(10,13));
console.log(equalToAHundred(20,80));


/* Write a JS program to get the extension of the file name */

const getExtension = (str) => str.slice(str.lastIndexOf('.')); /* 'Slice' function means we want to slice the string. 
                                                                'lastIndexOf' is a function that looks for the some symbol from the end of the string. */ 

console.log(getExtension('index.js'));   /* Always write a string inside the ""!!! */
console.log(getExtension('index.html'));
console.log(getExtension('some.feature.js'));


/* Write a program that replaces every character in a give string with a character that follows 
it in the alphabet. */zzz

const moveCharacter = (str) =>x
    str.split('').map(char =>  /* 'Split' splits string into array of characters. 'map' will change every character in the array with whatever we say. */
        String.fromCharCode(char.charCodeAt(0)+1)).join(''); /*'String.fromCharCode' takes a numerical code from a given string.
                                                                'charCodeAt(0) returns it from numerical to a string with its value added by 1.
                                                                'join' joins the string back together. */
x
    console.log(movxCharacter('abc'));
    console.log(moveCharacter('janko'));


/* Make a program to get a current date. */

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${days}/${month}/${year}`;
}

console.log(formatDate());


/* Write to create a new string adding "new" to a given string. If a string already has "new" 
at the begining then return the original string. */

const addNew = (str) => str.indexOf('new') === 0 ? str : `new ${str}`;

console.log(addNew('good book'));
console.log(addNew('new good look'));

