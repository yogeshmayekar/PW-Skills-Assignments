// Question 7**

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Example 1:**

// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

function generateMatrix(n) {
    let save = Array.from(Array(n),()=>new Array(n).fill(0))
    let count =1;
    let left =0;
    let right =n-1;
    let bottom = n-1;
    let top = 0;
    let dir = 0;

    while(count <= n*n){
        if(dir == 0){
            for(let i =left; i<=right; i++){
                save[top][i] = count;
                count++
            }
            top++
            dir++
        }
        if(dir == 1){
            for(let i =top; i<=bottom; i++){
                save[i][right] = count;
                count++
            }
            right--
            dir++        
        }
        if(dir == 2){
            for(let i =right; i>=left; i--){
                save[bottom][i] = count;
                count++
            }
            bottom--
            dir++        
        }
        if(dir == 3){
            for(let i =bottom; i>=top; i--){
                save[i][left] = count;
                count++
            }
            left++
            dir++        
        }
        dir = 0;
    }
    return save;
};

// inputs 
let n = 3;
console.log(generateMatrix(n))
