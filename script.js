// function curry(f) {
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return function(d) {
//                     return f(a, b, c, d);
//                 }
//             }
//         }
//     }
// }

function curry(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}

function sum(a,b,c,d) {
    return a+b+c+d;
}

const mySum = curry(sum,1,2);
console.log(mySum(3,4)); 
const mySum2 = curry(sum,1,2,3);
console.log(mySum2(4));

// const curriedFunction = curry(sum)(1)(2);
// console.log(curriedFunction(3)(4) );

// const curriedFunction1 = curry(sum)(1);
// console.log(curriedFunction1(2)(3)(4) );