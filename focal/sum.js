let inputs = process.argv.slice(2);

let sum = function(a, b) {
  return Number(a) + Number(b);
};

console.log(sum(inputs[0], inputs[1]));