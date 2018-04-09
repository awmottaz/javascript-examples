/**
 * @file Prototypal inheritance in JavaScript makes it difficult to check
 * whether a variable is actually an object or a special "object",
 * such as an array, string, or other special/custom types. For example,
 *
 * ```js
 * typeof [] // => 'object'
 * [] instanceof Object // => true
 * ```
 *
 * Luckily, all objects have a property 'constructor' which returns the
 * constructor function for that object. For example,
 *
 * ```js
 * [].constructor // => [Function: Array]
 * 'foo'.constructor // => [Function: String]
 * {}.constructor // => [Function: Object]
 * ```
 */

/**
 * check that something is actually just an object
 * @function
 * @param {*} arg
 * @returns {Boolean} whether arg is an object
 */
export const isObject = arg =>
  typeof arg === 'object' &&
  arg !== null &&
  arg.constructor === Object
