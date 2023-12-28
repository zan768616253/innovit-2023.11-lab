// Given a year report if it's a leap year 

const leapYear = (num) => num % 4 === 0 ? 'That is a leap year!' : 'That is not a leap year!';


console.log(leapYear(5));
console.log(leapYear(1414));
console.log(leapYear(2020));
console.log(leapYear(2019));

/* Write a program to compare two objects, to determine if the first one has same properties as second one
(which may also have additional properties). */

const objectA = {a: 1, b: 1, c: 1};
const objectB = {a: 1, b: 2, c: 1};
const objectC = {a: 1, b: 2, c: 1};
const objectD = {a: 1, b: 1, d: 1};

const equal = (a, b) => 
    Object.keys(a).every(key => b[key]);


console.log(equal(objectA, objectB));
console.log(equal(objectA, objectC));
console.log(equal(objectA, objectD));
console.log(equal(objectB, objectC));
console.log(equal(objectD, objectB));
console.log(equal(objectC, objectD));



/* Write a program that converts comma separated strings to a 2D array. A new line indicates a new row in the array.

Example:
-------
abc,def,ghi
jkl,mno,pqr
stu,vwx,yza

*/

const task = (csv) =>
csv.split('\n').map(row => row.split(','));

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log(task(str));



// Write a program that generates a random hexadecimal color code;

const randomHexNumber = () => Math.floor(Math.random() * 16).toString(16);

const randomColorCode = () => '#' + Array.from({length: 6}).map(randomHexNumber).join('');

console.log(randomColorCode());



// Write a function that returns true if the provided predicate funtion returns true for all elements in the collection, false otherwies. 

console.log([1,2,3,4,5].every(x => x > 0));
console.log([1,2,3,4,5].every(x => x > 3));

const forEveryEl = (arr, fn) => {
    for(var i=0; i<arr.length; i++) {
        if(!fn(arr[i])) {
            return false;
        }
        
    }

    return true;

}

console.log(forEveryEl([1,2,3,4,5], x => x > 0));
console.log(forEveryEl([1,2,3,4,5], x => x > 3));