// Question 7
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:
// Input: nums = [1,2,2,3]
// Output: true

function monotonic(nums) {
    let increasing = true;
    let decreasing= true;
    for (let i = 1; i< nums.length; i++){
        let previous = nums[i-1]
        let current = nums[i]
        if (current < previous) {
            increasing = false;
        }
        if (current > previous) {
            decreasing = false
        }
    }
    return increasing || decreasing
}
// input 
let nums = [1,2,2,3];
console.log(monotonic(nums))

