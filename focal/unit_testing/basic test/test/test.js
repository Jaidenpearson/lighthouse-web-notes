const chai = require("chai"); // import the chai library
const assert = chai.expect; // establish a variable to be used in our tests
const validator = require("../javascript/groupValidator.js"); // import the file where our function lives
describe("The function groupValidator()", () => {
  it("should return true if there are between 2 and 5 group members", () => {
    assert(validator.isGroupValid(["a", "b", "c"])).to.be.true;
  });
  it("should return false for 1 or less members", () => {
    assert(validator.isGroupValid(["a"])).to.be.false
  })
  it("hould return false for 6 or more group members", () => {
    assert(validator.isGroupValid(["a", "b", "c", "d", "e", "f"])).to.be.false
  });
});