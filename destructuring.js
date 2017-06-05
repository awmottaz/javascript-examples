/*
ES6 brings with it the ability to destructure arrays and objects.

There is more to come in this example, with more explanations.
But I will leave here an interesting example found by Remy Sharp,
creator of JS Bin (https://twitter.com/rem/status/835120847513862147):
*/

const obj = {a: 1}

const {b: 20, a: 10} = obj

console.log(b) // => 20
console.log(a) // => 1
