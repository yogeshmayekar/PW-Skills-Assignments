// Question 7**
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return *the number of maximum integers in the matrix after performing all the operations*

// **Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

// **Output:** 4
function maxCount(m, n, ops) {
    if(ops.length === 0) return m*n;
    let min = [m,n];
    for(let [x,y] of ops) {
        min = [Math.min(x, min[0]), Math.min(y, min[1])];
    }
    return min[0]*min[1];
};
// inputs 
let m = 3, n = 3, ops = [[2,2],[3,3]];
console.log(maxCount(m, n, ops));