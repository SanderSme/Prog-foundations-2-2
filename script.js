var someString = "Sander";
var x = Number(someString);
console.log(x);

var age = "30";
console.log(age); // "30"

var y = Number(age);
console.log(y);

var points = [40, 100, 1, 5, 25, 10];
var sortedPoints = points.sort(function (a, b) {
  return b - a;
});
console.log(sortedPoints);
