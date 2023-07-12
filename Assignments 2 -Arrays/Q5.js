// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

function maxProduct(nums){
    const n = nums.length;
    let sortNums = nums.sort((a,b)=> a-b);
    const maxProduct1 = sortNums[0] * sortNums[1] * sortNums[n-1];
    const maxProduct2 = sortNums[n - 3] * sortNums[n - 2] * sortNums[n - 1];
    return Math.max(maxProduct1, maxProduct2);  
    }
// inputs 
let nums = [1,2,3];
console.log(maxProduct(nums));