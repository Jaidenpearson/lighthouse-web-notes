const flatten = function(arr) {
  let flattened = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattened.push(...flatten(item));
    } else {
      flattened.push(item);
    }
  }
  return flattened;
};

let nestedArray = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

console.log(nestedArray);