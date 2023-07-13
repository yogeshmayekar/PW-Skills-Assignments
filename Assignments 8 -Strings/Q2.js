// Question 2**

// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

function validStr(s){
    let [leftMin, leftMax] = [0, 0]
    for(let l of s.split('')) {
        if(l === '(') [leftMin, leftMax] = [leftMin + 1, leftMax + 1]
        else if(l === ')') [leftMin, leftMax] = [leftMin - 1, leftMax - 1]
        else [leftMin, leftMax] = [leftMin - 1, leftMax + 1]
        if(leftMax < 0) return false
        if(leftMin < 0) leftMin = 0  
    }
    return leftMin === 0
}

// inputs 
let s = "()";
console.log(validStr(s));