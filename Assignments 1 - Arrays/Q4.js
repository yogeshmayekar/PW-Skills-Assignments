// Q4.** You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// **Example 1:**
// Input: digits = [1,2,3]
// Output: [1,2,4]

// **Explanation:** The array represents the integer 123.

// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// declaring the function time complexity O(n)
function plusOne(digits) {
    let Num = digits.length - 1
    for (let i = Num; i >= 0; i--){
        if (digits[i] <= 9) {
        digits[i]++
        return digits
    }
    digits[i] = 0
    }
    return [1, ...digits]
    };

// input 
let digits = [1,2,3];
console.log(plusOne(digits));
// let lastElement = digits.pop();
// digits.push(lastElement+1);
// console.log(digits)

// constant time complexity