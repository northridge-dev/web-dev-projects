# Mapping Arrays

Suppose you have a list of numbers. You want to double each of them. We _could_
accomplish that with what we already know about loops. For example:

```javascript
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = [];

for (let num of original) {
  doubled.push(num * 2);
}
```

When the code finishes, instead of an empty array, `doubled` will have 10
elements, each the double of its corresponding element in `original`.

But there's a more elegant way to do it. In JavaScript, every array has a `map`
method. Here's how to use it:

```javascript
function double(num) {
  return num * 2;
}

const doubled = original.map(double);
```

How'd we get the same result? `map` takes each element of `original` one at a
time and passes it to the function `double`, putting the result in a new array.
When it's done, it returns the new array it built and we stored it as `doubled`.

Now you try:

- Write a function called `square`. It should take one number and return its
  square.
- Create a variable `squared`.
- Set `squared` equal to the result of calling the `map` method on `original`
  and passing it the `square` function.

Check the console output to make sure `squared` has the values you'd expect. Try
updating some of the values in `original` and re-run the code. Did it work as
you expected?
