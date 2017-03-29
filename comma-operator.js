/* The comma operator evaluates a sequence of expressions and returns the result of the last one only */
var a = b = 4, c = 2 // 2 is returned to the console
var x = (y = 7, z = 5) // 5 is returned in the parenthetical expression, and so is assigned to x
console.log(a) // => 4
console.log(x) // => 5
