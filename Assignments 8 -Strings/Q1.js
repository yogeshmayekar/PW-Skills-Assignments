// Question 1**

// Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

// **Example 1:**

// **Input:** s1 = "sea", s2 = "eat"

// **Output:** 231

// **Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

// Deleting "t" from "eat" adds 116 to the sum.

// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

function deleteSum(s1, s2){
    const len1 = s1.length;
    const len2 = s2.length;
    const dp = [...Array(len1+1)].map(() => Array(len2+1).fill(0));
    for(let i = 1; i <= len1; i++) {
        dp[i][0] = dp[i-1][0] + s1.charCodeAt(i-1);
    }
    for(let j = 1; j <= len2; j++) {
        dp[0][j] = dp[0][j-1] + s2.charCodeAt(j-1);
    }
    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            if(s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1];
            else {
                const del1 = s1.charCodeAt(i-1) + dp[i-1][j];
                const del2 = s2.charCodeAt(j-1) + dp[i][j-1];
                dp[i][j] = Math.min(del1, del2);
            }
        }
    }
    return dp[len1][len2];
};
// inputs 
let s1 = "sea", s2 = "eat";
console.log(deleteSum(s1, s2));