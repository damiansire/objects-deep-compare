/**
 * Checks if two values (including objects and arrays) are deeply equal.
 * Performs a recursive comparison of properties and elements.
 *
 * @param objA The first value to compare.
 * @param objB The second value to compare.
 * @returns true if the values are deeply equal, false otherwise.
 */
const deepEqual = (objA: any, objB: any): boolean => {
  // 1. Strict equality check (reference and primitives)
  // If they are the exact same object or primitive, they are equal.
  if (objA === objB) {
    return true;
  }

  // 2. Check if either is null or not of type 'object'
  // If one is not an object (or is null) and they are not === (checked above), they are not equal.
  // This covers primitives, null, and undefined that did not pass strict equality.
  if (objA === null || typeof objA !== "object" || objB === null || typeof objB !== "object") {
    return false;
  }

  // 3. Check if both are arrays
  const isArrayA = Array.isArray(objA);
  const isArrayB = Array.isArray(objB);

  if (isArrayA && isArrayB) {
    // If both are arrays, check length
    if (objA.length !== objB.length) {
      return false;
    }
    // Compare each element recursively
    for (let i = 0; i < objA.length; i++) {
      if (!deepEqual(objA[i], objB[i])) {
        return false;
      }
    }
    // If all elements are equal, the arrays are equal
    return true;
  }

  // 4. Check if one is an array and the other is not
  if (isArrayA !== isArrayB) {
    return false;
  }

  // 5. If we get here, both are objects (but not arrays)
  // Check the keys (own properties)
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Check if they have the same number of keys
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check if all keys and values match
  for (const key of keysA) {
    // Check if B has the same key
    // We use Object.prototype.hasOwnProperty.call for safety
    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
    // Recursively compare the values of the key
    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  // If all keys and values match, the objects are equal
  return true;
};

export default deepEqual;
