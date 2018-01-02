/**
 * This example comes from a talk by Douglas Crawford where he describes
 * a pattern in which he suggests how we write JavaScript in a class-free way.
 */

/**
 * @func myConstructor - Constructs an object for use in the program.
 * @param spec {Object} - Use a specification object instead of a parameter list
 *   so that it remains easy to use when number of parameters goes up.
 *   This is helpful in setting defaults, adding/removing params, etc.
 */
function myConstructor(spec) {
  // Use destructuring to extract parameters from the specification object
  let {member} = spec
  
  // You can use other constructors to get something else you might need.
  // Using destructuring syntax again allows us to extract only what we
  // need to obtain from the other object.
  const {other} = someOtherConstructor(spec)
  
  // Define a method for the object using closures. No need for `this`
  const method = () => {
    // spec, member, other, method
  }
  
  // Freeze the outgoing object to protect the interface
  return Object.freeze({
    member,
    other,
    method
  })
}
