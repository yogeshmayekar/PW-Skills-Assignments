// Question 1**

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

// **Example 1:**

// **Input:** s = "IDID"

// **Output:**

// [0,4,1,3,2]

function stringMatch(s){
    const result = [];
    let start = 0;
    let end = s.length;
    
    for (let i = 0; i < s.length; i++){
        if (s[i] === "I"){
            result.push(start);
            start++;
        }else{
            result.push(end);
            end--;
        }
    }
    result.push(s[s.length - 1] === "I" ? end : start);
    return result;
};

// inputs
let s = "IDID";
console.log(stringMatch(s));