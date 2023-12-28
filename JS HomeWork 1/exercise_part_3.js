/* Write a program that counts the number of even numbers in the array of integers. */

const howManyEven = (arr) => arr.filter(x => x % 2 === 0).length;

console.log(howManyEven([1,2,4,5,6,7,8,9,11,22]));
console.log(howManyEven([1, 13, 16, 17, 197, 198652]));


/* Write a program that counts the number of even numbers before a given number. */

const arrayOfNum = (num) => {
    const returnArray = []; 
    for (var i = 1; i <= num; i ++ ) {
        returnArray.push(i);
    }
    return returnArray;
};

console.log(howManyEven(arrayOfNum(9)));


/* Write a JS program to check whether a given array of integers is sorted in ascending order. */

const order = (arr) => {
for ( var i = 0; i < arr.length; i ++) {
    if(arr[i+1] < arr[i]) return false;
}
return true;
}

console.log(order([1,2,3,4,5,6,7]));
console.log(order([1,2,3,5,4,3,6]));


/* Write a program to get the largest even number from array of integers. */

const largestEven = (arr) => 
Math.max(...arr.filter(x => x % 2 === 0)); /// Math.max finds the highest number.

console.log(largestEven([100,212,513,743,5,6,8,9]))


/* Write a program to replace the first digit in string with $ character. */

const replaceDigit = (str) => str.replace(/[0-9]/, '$') /// replace function!! If you put /[0-9]/g it's going to replace every digit. 

console.log(replaceDigit('Ritchie1Rich101'))