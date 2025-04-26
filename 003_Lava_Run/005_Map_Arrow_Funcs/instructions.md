# Arrow Functions in Array Maps

One place you're likely to find arrow functions is in array methods like `map`.
Here's how we used `map` a few challenges ago:

```javascript
function double(num) {
  return num * 2;
}

const original = [1, 2, 3, 4];
const doubled = original.map(double);
```

Now that we know how to create arrow functions, we can rewrite our `double`
function as an anonymous arrow function.

```javascript
const doubled = original.map((num) => num * 2);
```

Pretty nifty.

It also works when the original array has values other than numbers. Run the
code in the editor for an example.

## Your Turn

Create a variable called `plusTwo`. Use an in-place arrow function to map over
`randomNums`, returning an array where each element of `plusTwo` is two more
than the corresponding element in `randomNums`.
