// Question 3**

// Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

// In one **step**, you can delete exactly one character in either string.

// **Example 1:**

// **Input:** word1 = "sea", word2 = "eat"

// **Output:** 2

// **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

function minDistance(word1, word2) {
    let n1= word1.length;
    let n2= word2.length;
    let dp = new Array(n1+1)
    for(let i=0;i<n1+1;i++){
        dp[i] = new Array(n2+1).fill(-1);
    }
    function lcs(s1,s2,m1,m2){
        if(m1==0 || m2==0){
            return 0;
        }
        if(s1[m1-1]==s2[m2-1]){
            return dp[m1][m2]=1+ lcs(s1,s2,m1-1,m2-1)
        }
        if(dp[m1][m2]!==-1) return dp[m1][m2];
        return  dp[m1][m2] = Math.max(lcs(s1,s2,m1-1,m2),lcs(s1,s2,m1,m2-1))

    }
    lcs(word1,word2,n1,n2);
    let res= n1+n2-2*dp[n1][n2]
    return res;   
};

// input 
let word1 = "sea", word2 = "eat";
console.log(minDistance(word1, word2));
