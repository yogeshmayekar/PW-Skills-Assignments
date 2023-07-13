// You are given an m x n integer matrix matrix with the following two properties:

// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

// You must write a solution in O(log(m * n)) time complexity.

// **Example 1:**
// **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

// **Output:** true

function searching(matrix, target) {
    let start = 0;
    let m = matrix[0].length;
    let n = matrix.length; 
    let end = m*n-1;
    let mid = start + parseInt((end - start)/2);
    while(start <= end){
        let col = mid % m;
        let row = parseInt(mid / m);
        if(matrix[row][col] == target){
            return true;
        }
        if(matrix[row][col] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
        mid = start + parseInt((end - start)/2);
    }
    return false;
};

// input 
let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
console.log(searching(matrix, target));