// Question 6**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

function squreNum(nums) {
    let start = 0;
    let end = nums.length - 1;
    let i = end;
    let powerArr = [];

    while (i > -1) {
        if (Math.abs(nums[start]) > Math.abs(nums[end])) {
            powerArr[i--] = nums[start] * nums[start];
            start++;
        } else {
            powerArr[i--] = nums[end] * nums[end];
            end--;
        }
    }
    return powerArr;
};

// inputs 
let nums = [-4,-1,0,3,10];
console.log(squreNum(nums));