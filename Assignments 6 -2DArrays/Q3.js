// Given an array of integers arr, return *true if and only if it is a valid mountain array*.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
//     **Example 1:**

// **Input:** arr = [2,1]

// **Output:**

// false

function checkMountain(arr) {
    if (arr.length < 3) return false;
    let upEle;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i+1] && arr[i+1] > arr[i] && (upEle || upEle === undefined)){
            upEle = true;
        }else if(arr[i+1] && arr[i+1] < arr[i] && isGoingUp){
            upEle = false;
        }else if(arr[i+1] && arr[i+1] < arr[i] && isGoingUp === false){
            upEle = false;
        } else if (arr[i+1]) {
            return false;
        }
    }
    return upEle===false;
};

// inputs 
let arr = [2,1];
console.log(checkMountain(arr));