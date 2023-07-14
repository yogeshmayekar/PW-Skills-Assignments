// Question 3**

// ****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**

// Input :  set = “abc”

// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**

// Input : set = “abcd”

// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

function printSubsets(set) {
    const subsets = [];
    function generateSubsets(subset, index) {
      if (index === set.length) {
        subsets.push(subset);
        return;
      }
      generateSubsets(subset, index + 1);
      generateSubsets(subset + set[index], index + 1);
    }
    generateSubsets("", 0);
    return subsets;
  }

  console.log(printSubsets("abc"));