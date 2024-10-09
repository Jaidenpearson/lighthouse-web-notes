# Types of Testing

- Manual testing - console logging and checking functions 'by hand' rather than automating tests for functions

### Assertion Library

- bunch of helper functions that test actaul vs expected
- if they are equal. we get no output
- if they are not equal, the library throws an error

### NODE

- an app for running JS
- Chrome's JS interpreter (V8)
- wrapped it in a C++ app
- added a bunch of optional packages

- use require() to pull packages into file as a string. So for 'assert' testing in node, require('assert')

```JS

const assert = require('assert')
console.log(assert) // reveals assert object that includes all functions in Node that you can call on

assert.equal(2, 2) 

//When importing code you didn't write, just type the package name. When linking code you wrote, you need a relative path.

require('assert')
require('./lighthouse/assert.js')

//default export of any file (object) is an empty object

module.exports = 'literally any value can be exported out of moducle export'

module.exports = // The function that you want to export of the file

module.exports = {
  key: 'value'
  key: function
  key: []
  // Use an object to export multiple things at once. The key will be called in the file that is importing.
}
``` 

### Test Runner

 - automatically runs your tests
 - Mocha
 - NPM is buildt into node (Node Package Manager)
 - install other people's code

 ### NPM Install

 ```bash
 npm install-name #adds package as a dependancy

 npm install --global package-name # installs the package globally on your OS

 npm install --save-dev package-name #install package as a development dependancy
 ```

### Package.JSON

- details information about our project

### Running tests

```JS
describe() //used to group tests together, always optional
it() //This is the test

describe('Trying out Mocha', function() { //Describes tests
  it(''Name of test, functon(){}) //Actual test with callback function
  it('sends an email when complete', function() {})
  it('does another thing', function() {})
})
```

#### Run /bin/mocha.js to execute all tests in your test file

### Test driven development (TDD)

- Writing the tests BEFORE the code
- red => green, all tests start by failing and then are written to be green


