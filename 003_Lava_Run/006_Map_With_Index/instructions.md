# Indexes in Array.map()

Here's a tougher one: use `map` to update a list of numbers like so:

- the first number should be **unchanged**
- the second number should be increased by **one**
- the third number should be increased by **two**
- the fourth number should be increased by **three** -- and so on...

It's easy enough to create a function that will always add one...

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = nums.map((num) => num + 1);
```

But now we want to add _a different_ number to each element _depending on the
number's position in the array_.

Can you do it?

## Hint

It will help to know that when `map` calls the function you provide, it passes
the function **three** arguments:

- the current element
- the **index** of the element <-- BIG HINT
- the whole array

Now if only you could use that index to decide how much to add...
