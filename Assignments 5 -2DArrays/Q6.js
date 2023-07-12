// Question 6**

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// **Example 1:**

// **Input:** nums = [4,3,2,7,8,2,3,1]

// **Output:**

// [2,3]

var findDuplicates = function(nums) {
    const Obj = {};
    return nums.filter(num => {
        Obj[num] = (Obj[num] || 0) + 1;
        return Obj[num] > 1;
    })
};
// inputs 
let nums = [4,3,2,7,8,2,3,1];
console.log(findDuplicates(nums));