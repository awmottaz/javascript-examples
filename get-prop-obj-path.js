/**
 * Obtain an object property by a path array
 * @function
 * @param {object} obj an object to access
 * @returns {(path: array) => *} a function to access the given object at the array path
 * @example
 * const myObj = {a: {b: {c: 42}}}
 * const getProp = getPropObjPath(myObj)
 *
 * getProp(['a', 'b', 'c']) // => 42
 * getProp(['a', 'b']) // => {c: 42}
 * getProp(['foo']) // => undefined
 * getProp('foo') // => TypeError
 */
export const getPropObjPath = obj => path => path.reduce((acc, node) => acc[node], obj)
