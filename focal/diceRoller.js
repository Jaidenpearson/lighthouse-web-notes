let diceRoller = function() {
  let number = Number(process.argv.slice(2));
  if (number < 0) {
    console.log("Cannot roll a negative amount of dice!");
    return;
  }
  let resultArr = [];
  for (let i = 0; i < number; i++) {
    resultArr.push(Math.round(Math.random() * 6 + 1));
  }
  console.log(`Rolled ${number} dice: ${resultArr.join(", ")}`);
};

diceRoller();