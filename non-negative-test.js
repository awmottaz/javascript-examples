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

const nni = arg => (Math.abs(parseInt(arg, 10)) === Number(arg))

// Each of these logs "true"
console.log(nni(1))
console.log(nni(42))
console.log(nni(0))
console.log(!nni(-1))
console.log(!nni(3.14))
console.log(!nni(true))
console.log(!nni())
console.log(!nni(null))
console.log(!nni(() => { return 42 }))
console.log(!nni(NaN))
console.log(!nni([1, 2, 3]))
console.log(!nni({ foo: 'bar' }))
