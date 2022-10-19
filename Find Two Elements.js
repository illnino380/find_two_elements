'use strict'

//Make initial array of sorted data
const initialData = [...Array(1e5).keys()]

//remove first zero value and two values from any position
initialData.splice(0, 1);
initialData.splice(2, 2);

const findTwoElements = (array) => {
  //use binary search to get missed value
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while (minIndex <= maxIndex) {
    //find middle index on every iteration, which provides us O(logn) complexity
    const midIndex = Math.round((maxIndex + minIndex) / 2);

    //check if we found value before missed and return missed ones
    if (Math.abs(array[midIndex] - array[midIndex + 1]) > 1) {
      return [array[midIndex] + 1, array[midIndex] + 2]
    }

    //chech if we have boundary value case
    if (midIndex === 0) {
      return [1, 2];
    }

    //main logic of binary search. On every iteration we divide array by 2
    if (array[midIndex] - midIndex > 1) {
      maxIndex = midIndex - 1;
    } else {
      minIndex = midIndex + 1;
    }
  }

  //if we cannot find missed value - return -1
  return -1;
}

console.log(findTwoElements(initialData));