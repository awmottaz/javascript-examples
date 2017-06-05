/*
This function concatinates all given arrays into a single
array.

It quits when it encounters the first non-array argument,
including strings (for now).

This is a helpful example for understanding the `arguments`
object on functions.
*/

function concat() {
  var arr1 = arguments[0] || null
  var arr2 = arguments[1] || null
  if (!Array.isArray(arr1)) {
    return
  }
  if (!Array.isArray(arr2)) {
    return arr1
  }
  var concated = arr2.reduce(function(arr, elem) {
    arr.push(elem)
    return arr
  }, arr1)
  var newArgs = [].slice.call(arguments, 2)
  newArgs.unshift(concated)
  return concat.apply(null, newArgs)
}
