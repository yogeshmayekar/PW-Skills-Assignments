// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

var findMaxLength = function (nums) {
    let map = new Map();
    let sum = 0;
    let maxLength = 0;
    map.set(0, -1);
  
    for (let i = 0; i < nums.length; i++) {
      nums[i] === 0 ? sum-- : sum++;
        if (map.has(sum)) {
        maxLength = Math.max(maxLength, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
    return maxLength;
  };
  
// inputs 
let nums = [0,1];
console.log(findMaxLength(nums));
