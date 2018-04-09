import { isObject } from './is-object'

/**
 * deep clone an object
 * @function
 * @param {Object} obj
 * @returns {Object} a new object deeply equal to the given object
 */
export const cloneDeep = obj =>
  Object.entries(obj).reduce(
    (acc, [key, val]) => ({
      ...acc,
      [key]: isObject(val) ? cloneDeep(val) : val
    })
    , {}
  )
