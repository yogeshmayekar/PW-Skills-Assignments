// Question 4**

// Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

// - answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
// - answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

// **Note** that the integers in the lists may be returned in **any** order.

// **Example 1:**

// **Input:** nums1 = [1,2,3], nums2 = [2,4,6]

// **Output:** [[1,3],[4,6]]

// **Explanation:**

// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
function findDiff(nums1, nums2) {
    let result = [[],[]]
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    for(let val of nums1) {
        if(!nums2.includes(val)) {
            result[0].push(val)
        }
    }
    for(let val of nums2) {
        if(!nums1.includes(val)) {
            result[1].push(val)
        }
    }
    return result
};

// inputs 
let nums1 = [1,2,3];
let nums2 = [2,4,6];
console.log(findDiff(nums1, nums2));