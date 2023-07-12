// Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// **Example 1:**
// Input: nums = [1,3,5,6], target = 5

// Output: 2

//declaring the function to find the target with time complexty O(n)
// function findTarget(nums, target){
//     for(i=0; i<=nums.length; i++){
//         if(nums[i]===target){
//             return i;
//         }
//     }
// }

//declaring the function to find the target with time complexty O(log n)
function findTarget(nums, target){
    let start = 0;
    let end= nums.length - 1;
    
    while(start <= end){
        let mid = Math.floor(start +(end-start)/2);
        
        if(nums[mid] === target){
            return mid;
        }
        else if (nums[mid] < target){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return start;
    
};

// input 
let nums = [1,3,5,6];
let target = 5;
let ans = findTarget(nums, target);
console.log(ans);
