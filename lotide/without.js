const without = function(source, remove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!remove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray
};

const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("🛑🛑🛑Arrays are different lengths");
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑Index: ${[i]} is not equal between arrays`);
      return;
    }
  }
  console.log("✔✔✔Arrays are identical");
};

// TEST CODE

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
let anArray = [5, 3, 7, 1, 3]
assertArraysEqual(without(anArray, [6, 2, 9, 3]), [5, 7, 1])


