//Tradition summation function
function summation(a, b, c) {
  return a + b + c;
}

//Basic definition of curry func
function sum(a) {
  return function (b) {
    return function (c) {
      console.log({ a, b, c });
      return a + b + c;
    };
  };
}

//Invocation of curry function
console.log(sum(2)(3)(4));

//Infinite currying function
function InfiniteSum(a) {
  return function (b) {
    if (b) return InfiniteSum(a + b);
    return a;
  };
}
//or
const InfiniteArrowFn = (a) => (b) =>
  b !== undefined ? InfiniteArrowFn(a + b) : a;

console.log(InfiniteArrowFn(1)(2)(3)()); // 6

//Writing the function `curry` which convert the normal function into curry function

const total = (x, y, z) => x + y + y;
const curriedTotal = curry(total);
console.log(curriedTotal(2)(3)(4));

function curry(fn) {
  return function curried(...args) {
    if (fn.length >= args.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
}
