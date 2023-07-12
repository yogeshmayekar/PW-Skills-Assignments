// Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// **Example 1:**
// Input: nums = [1,2,2,4]
// Output: [2,3]

function findError(nums) {
    let sum = (nums.length * (nums.length + 1)) / 2;
    let duplicate = 0;
    let arr = Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++){
        if (arr[nums[i] - 1] === nums[i]){
            duplicate = nums[i];
        }
        else{
            arr[nums[i] - 1] = nums[i];
            sum -= nums[i];
        }
    }

    return [duplicate, sum];
};
// inputs 
let nums =  [1,2,2,4];
console.log(findError(nums))
