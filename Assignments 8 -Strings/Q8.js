// Question 8**

// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

function strings(s, goal){
    if (s.length != goal.length) return false;
    if (s === goal && s.length === new Set([...s]).size) return false;
    if (s === goal && s.length > 1) return true;
  
    let diff = 0;
    let s1,s2,g1,g2;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        if (s1) s2 = s[i];
        else s1 = s[i];
  
        if (g1) g2 = goal[i];
        else g1 = goal[i];
        diff++;
      }
      if (diff > 2) return false;
    }
    return s1 === g2 && s2 === g1;
  }

//   inputs 
let s = "ab", goal = "ba";
console.log(strings(s, goal));