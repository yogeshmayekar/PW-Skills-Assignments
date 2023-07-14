// Question 7**

// Given a string S, the task is to write a program to print all permutations of a given string.

// **Example 1:**

// ***Input:***

// *S = “ABC”*

// ***Output:***

// *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

// **Example 2:**

// ***Input:***

// *S = “XY”*

// ***Output:***

// *“XY”, “YX”*

function permute(s, l, r){
    if (l == r){
    console.log(s+"<br>");
    }else{
        for(let i = l; i <= r; i++){
            s = swap(s, l, i);
            permute(s, l + 1, r);
            s = swap(s, l, i);
        }
    }
}
 
function swap(a, i, j){
    let temp;
    let charArray = a.split("");
    temp = charArray[i] ;
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
}
 
let s = "ABC";
let n = s.length;
permute(s, 0, n-1);