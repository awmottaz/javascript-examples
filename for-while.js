/*
It is possible to combine a for loop and while loop into
a single loop. Too see this, let's look at the structure of
a for loop:

for ([initialization]; [condition]; [final-expression]) {
  statement
}

The initialization step is run before looping begins. Usually
this is used just to declare the variable that will be used for
looping, but you can evaluate any expression in there.

The condition step determines whether the statement block will be
run. Although this is usually used to check the iterator against
some condition, we can put any conditional statement here, no matter
how complex.

The final expression, like the initialization, can contain any
JavaScript expression we want. This is evaluated at the conclusion
of every loop.

Suppose we want to loop over a sequence of values, but stop
the loop if some special condition is met. One way to accomplish
this is with the following code:
*/

var cond = true
for (let i = 1; i < 10; i++) {
  console.log(i)
  cond = i < 5
  if (!cond) {
    break
  }
}

/*
I prefer to avoid using the `break` statement. In my own
taste, it is a rather ugly control statement.

Luckily, we can include this logical check in the condition
portion of our for loop!
*/

var cond = true
for (let i = 0; i < 10 && cond; i++) {
  console.log(i)
  cond = i < 5
}

/*
This version makes it more clear what the conditions are for
continuing a loop, and it avoids the ugly `break`.

Let's take it a step further... Remember how I said any expression
can go in the initialization? The same code can be rewritten as
this:
*/

for (let i = 0, cond = true; i < 10 && cond; i++) {
  console.log(i)
  cond = i < 5
}

/*
We just used the initialization step to initialize both the counter
and the boolean. This is nice because we are moving towards a
complete separation of the looping control logic from the statements
executed within the loop.

Yet we still have that pesky `cond` assignment within the statement block.
But we can move this to the final expression! Be careful with counting, though.
In our example so far, the output of the program would be

0
1
2
3
4
5

This is because `i` is incremented in the final expression after `cond = i < 5`
has been evaluated. Our final program is this:
*/

for (let i = 0, cond = true; i < 10 && cond; cond = i < 5, i++) {
  console.log(i)
}

/*
This loop successfully achieves for loop and while loop capabilities all at
once, and it achieves a complete separation of looping control logic from
loop statement execution.
*/
