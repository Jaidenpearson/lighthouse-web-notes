const letterPositions = function (string) {
  let sentence = string.toLowerCase()
  const results = {};
  for(i = 0; i < sentence.length; i++) {
    if(sentence[i] === " ") {
      continue
    } else if(results[sentence[i]]) {
      results[sentence[i]].push(i)
    } else {
      results[sentence[i]] = []
      results[sentence[i]].push(i)
    }
  }
  console.log(results)
  return results;
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CODE

let hello = letterPositions("hello")
let anotherTest = letterPositions("This and that")

assertArraysEqual(hello.h, [0])
assertArraysEqual(hello.e, [1])
assertArraysEqual(hello.l, [2, 3])
assertArraysEqual(hello.o, [4])


assertArraysEqual(anotherTest.t, [0, 9, 12])
assertArraysEqual(anotherTest.a, [5, 11])
