// Question 1**
// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.

function findCommon(arr1, arr2, arr3){
       let length1 =arr1.length;
       let length2 =arr2.length;
       let length3 =arr3.length;

        var i = 0,j = 0,k = 0;
        while (i < length1 && j < length2 && k < length3){
          if (arr1[i] == arr2[j] && arr2[j] == arr3[k]){
            console.log(arr1[i])
            i++;
            j++;
            k++;
          }
          else if(arr1[i] < arr2[j]){
            i++;
          }else if (arr2[j] < arr3[k]){
            j++;
          }else k++;
        }
      }
// input 
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,5,7,9];
let arr3 = [1,3,4,5,8];
let ans = findCommon(arr1, arr2, arr3);
