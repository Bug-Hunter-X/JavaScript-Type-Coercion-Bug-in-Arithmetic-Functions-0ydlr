# JavaScript Type Coercion Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to type coercion in arithmetic operations.  The `add` and `subtract` functions work as expected when provided with numbers, but unexpected behavior arises when strings are passed as arguments.

## Bug Description

JavaScript's loose typing can lead to implicit type coercion, which can produce unexpected outputs when performing arithmetic operations on strings.  The code in `bug.js` illustrates this issue.  The `add` and `subtract` functions are designed to handle numerical inputs but fail to explicitly handle string inputs. This is a common pitfall in JavaScript that can be difficult to debug.

## Solution

The solution in `bugSolution.js` addresses the bug by explicitly checking the input types and performing type conversion before performing arithmetic operations. It uses strict equality (`===`) for better type checking and `parseInt()` to convert strings to numbers. 