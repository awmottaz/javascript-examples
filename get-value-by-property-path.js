/**
 * The location of a property within an object (e.g. myObj.foo.bar.baz) can be
 * represented as an array of key names (e.g. ['foo', 'bar', 'baz'])
 * @typedef {String[]} PropertyPath
 */

/**
 * @typedef {(path: PropertyPath) => *} PropertyGetter
 * @param path the PropertyPath at which to retrieve the property from the seeded object
 * @returns {*} the property at that property path
 */

/**
 * seed a function with an object, then retrieve a property from that object
 * by supplying a property path array
 * @function
 * @param {Object} obj an object to access
 * @returns {PropertyGetter} a function to access the given object at the array path
 * @example
 * const myObj = { a: { b: { c: 42 } } }
 * const getProp = getValueByPropertyPath(myObj)
 *
 * getProp([]) // => { a: { b: { c: 42 } } }
 * getProp(['a']) // => { b: { c: 42 } }
 * getProp(['a', 'b']) // => { c: 42 }
 * getProp(['a', 'b', 'c']) // => 42
 * getProp(['foo']) // => undefined
 * getProp('foo') // => TypeError
 */
export const getValueByPropertyPath = obj => path => path.reduce((acc, node) => acc[node], obj)
