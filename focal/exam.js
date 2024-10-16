const round = function(number) {
  return Math.round(number * 100) / 100;
};

const median = function(arr) {
  let array = arr.sort((a, b) => a - b);
  let middle = array.length / 2;
  let upperMiddle = middle - 1;

  if (array.length % 2 !== 0) {
    let middleIndex = Math.floor(middle)
    console.log(array[middleIndex])
    return array[middleIndex]
  } else if (array.length % 2 === 0) {
    let mean = (array[middle] + array[upperMiddle]) / 2;
    console.log(mean)
    return mean;
  }
};

median([3, 2, 1]) //=== 2
median([3,4,1,2])





