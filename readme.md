# Objects Deep Compare

[![npm version](https://badge.fury.io/js/objects-deep-compare.svg)](https://badge.fury.io/js/objects-deep-compare)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A simple, efficient, and dependency-free utility function to deeply compare JavaScript/TypeScript objects and arrays for equality. It performs a recursive comparison of properties and elements.

## ✨ Features

- **Deep Comparison:** Recursively compares nested objects and arrays.
- **Primitive Handling:** Correctly compares primitive types (`string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) using strict equality (`===`).
- **Object Comparison:** Compares objects based on their own enumerable properties.
- **Array Comparison:** Compares array elements in order.
- **`null` Handling:** Correctly compares `null` values.
- **Type Differences:** Returns `false` if the types of the items being compared are different (e.g., object vs. array, object vs. primitive).
- **Simple API:** A single, easy-to-use `deepEqual` function.
- **Lightweight:** No external dependencies.

## 🚀 Installation

You can install the package using `npm` or `yarn`:

```bash
# Using npm
npm install objects-deep-compare

# Using yarn
yarn add objects-deep-compare
```

## 💡 Usage

Import the `deepEqual` function into your project:

### ES Modules (Modern TypeScript/JavaScript)

```typescript
import { deepEqual } from "objects-deep-compare";

// Object comparison
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } }; // Different nested value
const obj4 = { a: 1, b: { c: 2, d: 4 } }; // Extra property

console.log(deepEqual(obj1, obj2)); // -> true
console.log(deepEqual(obj1, obj3)); // -> false
console.log(deepEqual(obj1, obj4)); // -> false

// Array comparison
const arr1 = [1, [2, 3], { id: "a" }];
const arr2 = [1, [2, 3], { id: "a" }];
const arr3 = [1, [2, 4], { id: "a" }]; // Different element in nested array
const arr4 = [1, [2, 3]]; // Different length

console.log(deepEqual(arr1, arr2)); // -> true
console.log(deepEqual(arr1, arr3)); // -> false
console.log(deepEqual(arr1, arr4)); // -> false

// Primitive and null comparison
console.log(deepEqual(5, 5)); // -> true
console.log(deepEqual("hello", "hello")); // -> true
console.log(deepEqual(true, true)); // -> true
console.log(deepEqual(null, null)); // -> true
console.log(deepEqual(undefined, undefined)); // -> true

// Comparison between different types
console.log(deepEqual(obj1, arr1)); // -> false (object vs array)
console.log(deepEqual(5, "5")); // -> false (number vs string)
console.log(deepEqual({}, null)); // -> false (object vs null)
console.log(deepEqual([], {})); // -> false (array vs object)
```

### CommonJS (Traditional Node.js)

```javascript
const { deepEqual } = require("objects-deep-compare");

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: "different" };

console.log(deepEqual(obj1, obj2)); // -> true
console.log(deepEqual(obj1, obj3)); // -> false
```

## 🔧 API

### `deepEqual(valueA: any, valueB: any): boolean`

Checks if two values (including objects and arrays) are deeply equal.

- **`valueA`**: `any` - The first value to compare.
- **`valueB`**: `any` - The second value to compare.
- **Returns**: `boolean` - `true` if the values are deeply equal, `false` otherwise.

**Comparison Logic:**

- Handles primitive types using strict equality (`===`).
- Recursively compares own enumerable properties for objects.
- Recursively compares elements by index for arrays.
- Correctly handles `null` and `undefined` values.
- Returns `false` for differences in types (e.g., object vs. array, object vs. primitive).

**Note:** The function does not correctly handle value comparison for complex types like `Date`, `RegExp`, or functions. It compares object instances based on their enumerable properties only.

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a suggestion, please open an issue on the repository. If you want to contribute code, please feel free to submit a pull request.
