// Question 5**

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// **Example 1:**

// **Input:** s = "abcdefg", k = 2

// **Output:**

// "bacdfeg"

function reverseString(s, k){
    const arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = i + k - 1; 
        while (left < right) {
            if (arr[right] === undefined) {
                right--;
                continue;
            }
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr.join('');
};

// inputs
let s = "abcdefg", k = 2;
console.log(reverseString(s, k));