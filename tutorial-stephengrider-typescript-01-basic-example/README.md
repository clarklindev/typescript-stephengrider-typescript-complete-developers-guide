# A basic api fetching data

## installs

```shell
npm install --save-dev ts-node typescript
```

1. fetch data using json typicode (jsonplaceholder.typicode.com)

- https://jsonplaceholder.typicode.com/todos
- https://jsonplaceholder.typicode.com/todos/1

2. compile + running ts

```shell
# compile
tsc index.ts

# run
node index.js
```

3. ts-node (compile + run)

- note you have to run ts node via package.json script else it will give error if you run ts-node directly from commandline

```json
// package.json
"scripts": {
    "start": "ts-node index.ts"
  },
```

## running with parcel

```shell
npx parcel index.html
```

## notes

# Typescript

## Features

- FEATURE: Make interfaces for axios response.data objects
- FEATURE: make use of 'as TYPE' to type some data to an interface
- FEATURE: give type annotations to function parameters ( parameters are what you can pass to a function and arguments are actually values passed in a function)
- FEATURE: Tuples (mutiple values(with different type - ONLY the values) for each entry in array) - no attributes, order is critical
- FEATURE: Type alias

```ts
type Drink = [string, boolean, number];

//same as
const pepsi: Drink;
```

## Notes

- type annotation vs type inference
  - same line initialization and assignment - value has automatic inference (typescript figures out whats the type)
- 3 senarios for adding annotations

  1. when function returns any type (eg. response from axios call / JSON.parse() etc when typescript cant figure out return type)
  2. delayed initialization (when variable declaration and value assignment not on same line)
  3. when inferance doesnt work - (eg. variable is reassigned a value with different type)

## Annotations

### - array of type string:

```ts
  let colors:string[] (string array)
```

### classes

- classes
  ```ts
  class Car {}
  let car: Car = new Car();
  ```

### Object literal

- object literal

```ts
let point: { x: number; y: number } = {
  x: 20,
  y: 23,
};
```

### Functions

- function annotation - (what arguments going into function, what we return)
  1. function varible annotation: const x:(i: number) => void
  2. function annotations (everything on right side of =) = (function inputs / function return types):
  - type inference only for return type of function (not the arguments)
  - we always annotate return type (this is for arrow functions, named functions, anonymous functions assigned to variable type) because there are times when we can forget to return something...and typecript will infer return as 'void'
  - :void return type for return null or undefined
  - :never return type is when we ONLY throw errors and dont return something so there is no way function will complete

```ts
const logNumber: (i: number) => void = (i: number) => {};
```

-- interface

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo; //TYPESCRIPT: as interface
});
```
