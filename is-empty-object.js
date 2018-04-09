import { isObject } from './is-object'

/**
 * check whether object is deeply equal to {}
 * @function
 * @param {*} arg
 * @returns {Boolean} whether arg is deeply equal to {}
 */
export const isEmptyObject = arg =>
  isObject(arg) && Object.keys(arg).length === 0
