const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

let countOnly = (arr, objectToCount) => {
  let guestCount = {}
  for(key in objectToCount) {
    if(objectToCount[key] !== true) {
      continue
    } else {
      for(value of arr) {
        if(value === key) {
          guestCount[key] = (guestCount[key] ?? 0) + 1
      }
    }
  }
}
  return guestCount
}

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔ Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// COUNTONLY TEST CODE

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);