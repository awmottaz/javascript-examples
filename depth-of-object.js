/*
This function finds the maximum depth of an object.

It works by recursively finding the maximum depth
each key whose value is another object.

1. Loop through each key
2. Is the value an object?
  2a. If so, find the depth of that object
  2b. If not, do nothing
3. Of all the keys, find the one whose object has the greatest depth
4. Add 1 to this depth and return
*/

function depthOfObject(obj) {
    var depth = 0
    for (key in obj) {
      if (typeof obj[key] === 'object') {
        var thisKeyDepth = depthOfObject(obj[key])
        if (thisKeyDepth > depth) {
          depth = thisKeyDepth
        }
      }
    }
    return 1 + depth
  }
  
  // Examples
  depthOfObject({foo: 'bar'}) // => 1
  depthOfObject({foo: {bar: 'baz'}}) // => 2
