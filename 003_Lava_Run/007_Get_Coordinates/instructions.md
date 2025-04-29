# Getting Map Coordinates

Instead of writing complicated HTML tables for every level, we'd like to use a
simple string like `levelMap` to define new levels. But how?

The code in the editor transforms the string into an array of arrays. See for
yourself by printing `rows` to the console.

## Challenge

Print each of the coordinates in the map and the character at that coordinate.
For example:

```
(1, 1): #
...
(4, 4): @
```

We'll use array mapping to do it.
