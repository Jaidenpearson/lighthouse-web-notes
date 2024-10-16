const findWaldo = function (names, callback) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      callback(index); // execute callback
    }
  })
};


const actionWhenFound = function (index) {
  console.log(`Found him at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"],(index) => {
  console.log(`Found him at index ${index}!`);
});