// Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

function anagram(s, p){
    let sLength = s.length;
    let pLength = p.length; 
    let result = []
    let sArray = new Array(26).fill(0)
    let pArray = new Array(26).fill(0)
    for(let i=0; i<pLength; i++){
        sArray[s.charCodeAt(i)-97]++;
        pArray[p.charCodeAt(i)-97]++;
    }
    for(let i=0; i<sLength; i++){
        if(isAnagram(sArray,pArray)){
            result.push(i)
        }
        sArray[s.charCodeAt(i)-97]--
        sArray[s.charCodeAt(i+pLength)-97]++;
    }
    function isAnagram(sArray,pArray){
        for(let i=0;i<pArray.length;i++){
            if(sArray[i]!==pArray[i]){
                return false;
            }
        }
        return true;
    }
    return result; 
};

// input 
let s = "cbaebabacd", p = "abc";
console.log(anagram(s, p));