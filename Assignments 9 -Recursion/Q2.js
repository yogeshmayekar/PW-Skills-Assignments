// Q   uestion 2

// Given a number n, find the sum of the first natural numbers.

// **Example 1:**

// Input: n = 3 

// Output: 6

// **Example 2:**

// Input  : 5 

// Output : 15

function findSum(n){
   let sum = 0;
   for (let x = 1; x <= n; x++)
     sum = sum + x;
   return sum;
}
 
// input
let n = 3;
console.log(findSum(n));