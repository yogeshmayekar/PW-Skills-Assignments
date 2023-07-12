// Question 7
// You are given an inclusive range [lower, upper] and a sorted unique integer array
// nums, where all elements are within the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in
// nums.

// Return the shortest sorted list of ranges that exactly covers all the missing
// numbers. That is, no element of nums is included in any of the ranges, and each
// missing number is covered by one of the ranges.

// Example 1:
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

// Explanation: The ranges are:
// [2,2]
// [4,49]
// [51,74]
// [76,99]

function findMissingRanges(nums, lower, upper) {
    const n = nums.length;
    const ans = [];
    if (n === 0) {
        ans.push(formatRange(lower, upper));
        return ans;
    }
    if (nums[0] > lower) {
        ans.push(formatRange(lower, nums[0] - 1));
    }
    for (let i = 1; i < n; ++i) {
        const a = nums[i - 1];
        const b = nums[i];
        if (b - a > 1) {
            ans.push(formatRange(a + 1, b - 1));
        }
    }
    if (nums[n - 1] < upper) {
        ans.push(formatRange(nums[n - 1] + 1, upper));
    }
    return ans;
}

function formatRange(a, b) {
    return a === b ? a.toString() :"["+ a + "," + b +"]";
}

// inputs 
let nums = [0,1,3,50,75];
let lower = 0;
let upper = 99;
console.log(findMissingRanges(nums, lower, upper));