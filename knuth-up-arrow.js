/*
This function performs operations based on Donald Knuth's up-arrow
notation.

See details here:
https://en.wikipedia.org/wiki/Knuth%27s_up-arrow_notation

This function is recursively defined, with three number arguments:
- numA
- numB
- numArrows

We require all arguments to be an integer 0 or bigger.

For numArrows = 0, this function returns numA * numB.
For numArrows = 1, this function returns Math.pow(numA, numB).
For numArrows > 1, thus function returns
  knuthUpArrow(numA, knuthUpArrow(numA, numB - 1, numArrows), numArrows - 1)

This last case is guaranteed to converge since
  1. knuthUpArrow(numA, numB, 0) === numA * numB
  2. knuthUpArrow(numA, 1, numArrows) === numA

Examples:

2 ↑ 2 = 4
2 ↑↑ 2 = (2 ↑ 2) * (2 ↑↑ 1) = 4 * 2 = 8
2 ↑↑↑ 2 = (2 ↑↑ 2) * (2 ↑↑↑ 1) = 8 * 2 = 16
*/

function knuthUpArrow (numA, numB, numArrows) {
  if (
    numA < 0 ||
    numB < 0 ||
    numArrows < 0) {
    throw new Error('Invalid arguments.')
  }

  if (numArrows === 0) {
    return numA * numB
  } else if (numArrows >= 1 && numB === 0) {
    return 1
  }

  return (
    knuthUpArrow(numA, knuthUpArrow(numA, numB - 1, numArrows), numArrows - 1)
  )
}

console.log('2 ↑ 2 = ', knuthUpArrow(2, 2, 1))
console.log('2 ↑↑ 2 = ', knuthUpArrow(2, 2, 2))
// console.log('2 ↑↑↑ 2 = ', knuthUpArrow(2, 2, 3))
console.log('3 ↑↑ 2 = ', knuthUpArrow(3, 2, 2))
// console.log('3 ↑↑ 3 = ', knuthUpArrow(3, 3, 2))
// console.log('4 ↑↑ 3 = ', knuthUpArrow(4, 3, 2))
