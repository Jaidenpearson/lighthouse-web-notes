# Callbacks

- Function expressions can be hoisted, it is beter practice to do a variable declaration of a function

```JS
let variableFunction = function() {}

rather than

variableFunction(){}
```
 - Functions are just objects in that they are stored by refernce and can take key/value pairs. If you were to copy a function to a variable, it would just point to the original function.

 - When a function is both a function and a stand alone value, it is referred to as "First Class". 

 ### Callback => a function that you pass to be called by another function

 ### Higher order function => a function that accepts another function as an argument

## Anonymous functions are functions without a key name that can be passed directly into another function as an argument

```JS

let anon = function(function(){
  "I am inside the argument function"
}) {
  "I am inside the main function"
}
```

## Single responsibility principle(SRP)

## Arrow Functions

  - Function keyword eliminated
  - Between the argument and curly braces is "=>"
  - Cannot be hoisted, does not support hoisting
  - if there is a single argument, does not need parenthesis. If multiple or no arguments, needs parenthesis
  - Single line statements don't need curly braces
  - If there are no curly braces, function doesn not need to be returned as it is done automatically. Coding in ```RETURN``` will create a syntax error
  - They do not create the variable ```THIS```. If needed for self referencing, ```function``` keyword is needed at the beginning of the function

  ### Common Array Methods

   ```Js
    arr.forEach()
    arr.map()
    arr.filter()
  
  ```


