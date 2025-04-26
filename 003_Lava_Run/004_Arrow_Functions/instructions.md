# Arrow Functions

We've long known how to create a function with a **function declaration**. We
just learned how to create a function with a **function expression**. Would you
believe that there's a _third_ way to create a function? Meet **arrow
functions**.

```javascript
const add = (a, b) => {
  return a + b;
};
```

`add` is still a function. It still takes two arguments. It still returns the
sum of those two arguments. But we didn't use the `function` keyword. Instead,
we used the `=>` operator, which is called the **arrow operator**. (Hence the
name **arrow functions**.)

Actually, we can be even more concise:

```javascript
const add = (a, b) => a + b;
```

We can also do without the `return` statement as long as we can do everything in
a single expression.

Arrow functions have some different behaviors from functions created with the
`function` keyword, but we don't have to worry too much about them. For our
purposes, their main advantage is how concise they can be.

## Your turn

Create a variable called `multiply` and assign to it an arrow function that
takes two arguments and returns the result of multiplying them.
