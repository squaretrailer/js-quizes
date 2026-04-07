//Check if Array is Sorted

//Problem:
//Given an array, check whether it is sorted in non-decreasing order.

//Example:

//Input: arr = [1, 2, 3, 4, 5]
//Output: True

//Input: arr = [1, 3, 2, 4]
//Output: False

let arr = [1, 2, 3, 4, 5];
let array = [1, 3, 2, 4];

function isNonDecreasing(sequence) {
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] < sequence[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isNonDecreasing(arr));
console.log(isNonDecreasing(array));

