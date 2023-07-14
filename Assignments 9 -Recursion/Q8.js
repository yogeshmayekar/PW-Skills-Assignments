// Question 8**

// Given an array, find a product of all array elements.

// **Example 1:**

// Input  : arr[] = {1, 2, 3, 4, 5}
// Output : 120
// **Example 2:**

// Input  : arr[] = {1, 6, 3}
// Output : 18

function productArray(nums) {
    const resultArr = []
    for(let i=0; i<nums.length; i++){
        let productVal = nums[i]
        if(resultArr.length !== 0)
            productVal = productVal * resultArr[i-1]
        resultArr.push(productVal)
    }
    let productVal = 1
    let i=nums.length-1
    for(i; i > 0; i--){
        resultArr[i] = resultArr[i-1] * productVal
        productVal = nums[i] * productVal
    }
    resultArr[i] = productVal
    return resultArr
};

let arr = [1,2,3,4,5];
console.log(productArray(arr));