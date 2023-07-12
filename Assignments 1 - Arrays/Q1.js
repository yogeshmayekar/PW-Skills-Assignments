// Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// **Example:**
// Input: nums = [2,7,11,15], target = 9
// Output0 [0,1]

// **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

// declaring a function to find the two numbers sum of the targets index
function findTarget(num, target){
    for(let i=0; i<=num.length; i++){
        for(let j=i+1; j<=num.length; j++){
            if(target===num[i]+num[j]){
                return `[${i},${j}]`;
            }
        }
    }
}

// given input 
let numbers = [2, 7, 11, 15];
let target = 9;
let result = findTarget(numbers, target);
console.log(result);

// time complexity O(n^2)