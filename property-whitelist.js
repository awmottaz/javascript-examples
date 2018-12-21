// Sometimes we want to ensure that an object has only
// the properties we explicitely set. With object destructuring,
// we can use a map to remove all but our whitelisted properties
// from an object or array of objects.
//
// I like using this technique because the code is very symmetrical
// and almost looks like nothing is happening. However, those can
// be good arguments not to use this in real code.

let objectArray = [
  { a: "Apple", b: "Banana", c: "Carrot", d: "Dill Pickle" },
  { a: "Amazon", b: "Bing", c: "Cloudfare", d: "Dropbox" }
]

let abOnly = objectArray.map(({ a, b }) => ({ a, b }))
console.log(abOnly)
// => [ { a: 'Apple', b: 'Banana' }, { a: 'Amazon', b: 'Bing' } ]
