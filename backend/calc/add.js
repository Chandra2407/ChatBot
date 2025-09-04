const add = (a = 0, b = 0) => {
    return a + b
}
const a = 10
console.log(a)

// Top-level code in a module always executes when the module is loaded.
// Exports just define what other modules can use, but they don’t stop top-level execution.

module.exports = add


// 🔹 CommonJS (Node.js require)

// In Node, every .js file is wrapped in an IIFE with 5 parameters:

// (function (exports, require, module, __filename, __dirname) {
//   // your code here
// })();


// So when you write:

// const a = 10;
// console.log(a);


// Node actually executes it inside that wrapper. That’s why:

// exports, require, module, __filename, and __dirname exist in scope.

// Your variables don’t leak to global scope (they’re scoped to the function).

// ✅ This is why you can declare the same variable names in multiple modules without conflict.