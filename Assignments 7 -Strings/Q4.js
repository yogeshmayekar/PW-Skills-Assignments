// Question 4**

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"

function reverseWords(s) {
    let sArr = s.split(" ");
    let temp = [];
    for(let i=0; i<sArr.length; i++){
        temp.push(sArr[i].split("").reverse().join(""));
    }return temp.join(" ");
};

// inputs 
let s = "Let's take LeetCode contest";
console.log(reverseWords(s));