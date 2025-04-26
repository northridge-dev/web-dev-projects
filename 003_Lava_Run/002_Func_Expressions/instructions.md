# More Ways to Write Functions

You're familiar with **function declarations**. You define a function using the
`function` keyword. Here's an example:

```javascript
function add(a, b) {
  return a + b;
}
```

But you can also write the same function like this:

```javascript
const add = function (a, b) {
  return a + b;
};
```

In the second case, you're creating an anonymous function -- a function without
a name -- and then assigning it to a variable. The variable gives the function a
name. This way of defining a function is called a **function expression**.

With one exception, they'll act the same way. Whether you used a function
declaration or a function expression, you'd call your add function like so:

```javascript
add(1, 2); // 3
```

You try. Write a **function expression** that will return the result of
multiplying two numbers.
