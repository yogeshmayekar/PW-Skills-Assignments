// Question 7**

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

function decodeStr(s) {
    const stack = [];
    
    for (let char of s) {
         if (char === "]") {
            let curr = stack.pop();
            let str = '';
            while (curr !== '[') {
                str = curr+ str;
                curr = stack.pop();
            }
            let num = "";
            curr = stack.pop();
            while (!isNaN(curr)) {
                num = curr + num;
                curr = stack.pop();
            }
            stack.push(curr);
            for (let i=0; i<Number(num);i++) {
                stack.push(str);    
            }
        } 
        else stack.push(char);
    }
    
    return stack.join('');
};

// input 
let s = "3[a]2[bc]";
console.log(decodeStr(s));