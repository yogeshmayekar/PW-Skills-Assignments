// Question 4**

// Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

// **Example 1 :** 

// Input: N = 5, P = 2

// Output: 25

// **Example 2 :**
// Input: N = 2, P = 5

// Output: 32

function power(N, P) {
    if (P === 0) {
        return 1;
    }
    if (P % 2 === 0) {
        const result = power(N, P / 2);
        return result * result;
    } else {
        const result = power(N, Math.floor((P - 1) / 2));
        return N * result * result;
    }
}
// inputs
const N = 5;
const P = 2;

console.log(power(N, P));