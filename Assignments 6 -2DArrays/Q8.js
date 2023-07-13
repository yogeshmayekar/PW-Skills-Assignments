// Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// **Example 1:**
// Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

// **Output:**

// [[7,0,0],[-7,0,3]

function multiply(mat1, mat2) {
    const r1 = mat1.length;
    const c1 = mat1[0].length;
    const c2 = mat2[0].length;
    const res = new Array(r1).fill(0).map(() => new Array(c2).fill(0));
    const mp = new Map();
  
    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c1; j++) {
            if (mat1[i][j] !== 0) {
                if (!mp.has(i)) {
                    mp.set(i, []);
                }
                mp.get(i).push(j);
            }
        }
    }

    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            if (mp.has(i)) {
                const cols = mp.get(i);
                for (let k = 0; k < cols.length; k++) {
                    const col = cols[k];
                    res[i][j] += mat1[i][col] * mat2[col][j];
                }
            }
        }
    }

    return res;
}

// inputs 
let mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]];
console.log(multiply(mat1, mat2));