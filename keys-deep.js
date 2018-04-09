import { isObject } from './is-object'

/**
 * create an array of the keys of an object along with the keys of
 * any nested objects, recursively
 * @function
 * @param {Object} arg
 * @returns an array of the object's keys and keys of its nested objects
 * @example
 * keysDeep({ a: { b: { c: 42 } } }) // => ['a', 'b', 'c']
 */
export const keysDeep = arg =>
  isObject(arg)
    ? Object.entries(arg).reduce(
      (acc, [key, val]) =>
        isObject(val)
          ? [...acc, key, ...keysDeep(val)]
          : [...acc, key]
      , []
    )
    : []
