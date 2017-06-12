/*
This functor wraps its input function with a closure to execute it
only once.

Example:

    function doSomething() {...}
    var doSomethingOnce = once(doSomething)
    doSomethingOnce() // will execute doSomething()
    doSomethingOnce() // does nothing
    doSomethingOnce() // does nothing
    doSomethingOnce() // does nothing
*/

function once(func) {
  var hasExecuted = false
  return function() {
    if (!hasExecuted) {
      hasExecuted = true
      func()
    }
  }
}
