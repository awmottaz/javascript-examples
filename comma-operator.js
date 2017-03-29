/* The comma operator evaluates a sequence of expressions and returns the result of the last one only */

var a = b = 4, c = 2
console.log(a) // => 4

var x = (y = 7, z = 5)
console.log(x) // => 5
