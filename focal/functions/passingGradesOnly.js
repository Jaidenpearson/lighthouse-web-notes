const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

let passingGrades = (arr) => arr.filter(grade => grade >= 70)

console.log(passingGrades(grades))