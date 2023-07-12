// Question 7**

// Suppose an array of length n sorted in ascending order is **rotated** between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// - [4,5,6,7,0,1,2] if it was rotated 4 times.
// - [0,1,2,4,5,6,7] if it was rotated 7 times.

// Notice that **rotating** an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of **unique** elements, return *the minimum element of this array*.

// You must write an algorithm that runs in O(log n) time.

// **Example 1:**

// **Input:** nums = [3,4,5,1,2]

// **Output:** 1

// **Explanation:**

// The original array was [1,2,3,4,5] rotated 3 times.

function findMin(nums) {
    let low = 0, high = nums.length - 1;
    while(low <= high){
        let mid = parseInt((low + high)/2);
        if(nums[low] == nums[mid]){
            if(nums[low] > nums[low + 1]) return nums[low+1];
            else return nums[low];
        }
        else if(nums[high] == nums[mid]){
            if(nums[high] > nums[high -1]) return nums[high - 1];
            else return nums[high];
        }
        else if(nums[mid] > nums[high]){
            low = mid + 1;
        }
        else if(nums[mid] > nums[low]){
            high = mid - 1;
        }
        else if(nums[mid] < nums[low] && nums[mid] < nums[high]){
            high = high - 1;
        }
    }
};
// inputs 
let nums = [3,4,5,1,2];
console.log(findMin(nums));
