// Question 5**

// We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.
// Input  : S = "abcab"
// Output : 7
// There are 15 substrings of "abcab"
// a, ab, abc, abca, abcab, b, bc, bca
// bcab, c, ca, cab, a, ab, b
// Out of the above substrings, there
// are 7 substrings : a, abca, b, bcab,
// c, a and b.

// Input  : S = "aba"
// Output : 4
// The substrings are a, b, a and aba

function countContiguousSubstrings(str) {
    let count = 0;
  
    // Helper function to check if a substring is valid
    function isContiguousSubstring(substring) {
      return substring[0] === substring[substring.length - 1];
    }
  
    // Generate all substrings and count the valid ones
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        const substring = str.substring(i, j + 1);
        if (isContiguousSubstring(substring)) {
          count++;
        }
      }
    }
  
    return count;
  }

  console.log(countContiguousSubstrings("aba"));