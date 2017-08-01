/*
This function accepts any input and returns true only if the input
can be parsed as a non-negative integer.

The first line casts the argument into an integer (or NaN) and then
uses Math.abs to make it non-negative.

The second line casts the argument into a number, possibly decimal (or NaN).

If the argument was a non-negative integer, these two values should agree.

Since JavaScript evaluates 'NaN === NaN' to false, this function is robust to
bad input.
*/

function isNonNegativeInt (arg) {
  var nonNegInt = Math.abs(parseInt(arg, 10))
  var num = Number(arg)
  
  return num === nonNegInt
}

/*
By skipping the variable assignment and using ES6 syntax, we can greatly
reduce this function's footprint:
*/

var isNonNegativeInt = arg => (Math.abs(parseInt(arg, 10)) === Number(arg))
