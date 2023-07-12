// Question 6
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise,
// return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4
function searchTarget(nums, target) {
    let start = 0, end = nums.length-1;
    while (start < end) {
        let mid = start + Math.floor((end-start+1)/2);
        if (target < nums[mid]) {
            end = mid - 1
        } else {
            start = mid; 
        }
    }
    return nums[start]==target?start:-1;
}
// input 
let nums = [-1,0,3,5,9,12];
let target = 9;
console.log(searchTarget(nums, target))