const words = ["ground", "control", "to", "major", "tom"];

let map = function(arr, callback) {
  let results = []
  for(let item of arr) {
    results.push(callback(item))
  }
  return results
}

const assertArraysEqual = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    console.log("🛑🛑🛑Arrays are different lengths")
    return
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑Index: ${[i]} is not equal between arrays`)
      return
    }
  }
  console.log("✔✔✔Arrays are identical")
}

const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])