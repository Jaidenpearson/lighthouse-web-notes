const flatten = function(arr) {
  let result = []
  for(items of arr) {
    if(Array.isArray(items)) {
      for(inner of items) {
        result.push(inner)
      }
    } else {
      result.push(items) 
    }
  }
}
    // result.push(input[j]);

    let nestedArray = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]