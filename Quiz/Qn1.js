//Find the Largest Element in an Array

//Problem:
//Given an array of integers, find the largest element.

//Example:

//Input: arr = [3, 7, 2, 9, 5]
//Output: 9

let array = [3, 7, 2, 9, 5];

let smallest = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > smallest) {
    smallest = array[i];
  }
}

console.log(smallest);