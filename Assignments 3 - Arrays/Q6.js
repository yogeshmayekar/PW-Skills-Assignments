// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

function findSingleNum(nums) {
    let arr = nums.sort((a, b) => a - b); 
  
    for (let i = 0; i <= nums.length - 1; i += 2) { 
      if (arr[i] !== arr[i + 1]) {
        return arr[i];
      }
    }
    return arr[arr.length - 1];
  };

//   inputs 
let nums = [2,2,1];
console.log(findSingleNum(nums));