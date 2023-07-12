// Q7.** Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.

// **Example 1:**
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// two pointr approach 
function moveZero(nums){
    let left = 0;
    let right = 0;
    while(left < nums.length){
        if(nums[left] !== 0){
            [nums[left],nums[right]] = [nums[right], nums[left]];
            right++
        }
        left++;
    } 
    return nums;
  };

// input 
let nums = [0,1,0,3,12];
console.log(moveZero(nums));