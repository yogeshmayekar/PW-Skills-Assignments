// Question 6**

// Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

// A **shift** on s consists of moving the leftmost character of s to the rightmost position.

// - For example, if s = "abcde", then it will be "bcdea" after one shift.

// **Example 1:**

// **Input:** s = "abcde", goal = "cdeab"

// **Output:**

// true

function rotateString(s, goal) {
    let str=s
    if(s.length!==goal.length){
        return false
    }
    for(let i=0;i<s.length;i++){
      if(str==goal) return true
      else str=s.substring(i,s.length)+s.substring(0,i)
  }if(str==goal) return true
  return false  
};

// inputs 
let  s = "abcde", goal = "cdeab";
console.log(rotateString(s, goal));
