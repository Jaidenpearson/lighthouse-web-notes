const eqObjects = (object1, object2) => {
  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  } 
  for(key in object1) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
      return false
      }
    } else if(object1[key] !== object2[key]) {
      return false
    } 
  }
  return true
}

  const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

// TEST CODE

const student1 = {name: "Jesse", age: 25, gender: "non-binary"}
const student2 = {name: "Markus", age: 77, gender: "male"}
const student3 = {name: "Fiona", age: 37, gender: "Female"}
const twinOfStudent2WhoseParentsDontLoveThem = {name: "Markus", age: 77, gender: "male"}

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

assertEqual(eqObjects(student1, student3), false) 
assertEqual(eqObjects(student2, twinOfStudent2WhoseParentsDontLoveThem), true)
