const chai = require("chai"); // 1
const assert = chai.assert;

const shouldBuyCar = require("../shouldBuyCar.js"); // 2

describe("#shouldBuyCar()", function () {
  // 3

  it("should return false if it's a hatchback", function () {
    const car = {
      type: "hatchback"
    }
    const shouldIBuy = shouldBuyCar(car)
    assert.isFalse(shouldIBuy)
  });
  it("should return true if the car is pink and type is not a hatchback", function () {
    const car = {
      type: "sedan",
      color: "pink"
    }
    const shouldIBuy = shouldBuyCar(car)
    assert.isTrue(shouldIBuy)
  })
  it("should return true if litres/100km are between 6 and 11 and price is less than or equal to $5000", function () {
    const car = {
      litresPer100km: 7,
      price: 3000
    }
    const shouldIBuy = shouldBuyCar(car)
    assert.isTrue(shouldIBuy)
  })
});