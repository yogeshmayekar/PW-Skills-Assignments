// Question 8**

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// **Example 1:**

// **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// **Output:** true

function straightLine(coordinates) {
    const findDiff = function(c1, c2){
        if((coordinates[0][0]-coordinates[1][0])===0)
        return  (c2[0] - c1[0])/(c2[1] - c1[1])
        else
        return (c2[1] - c1[1]) / (c2[0] - c1[0])
    }
    const diff =  findDiff(coordinates[0], coordinates[1])
    for (let i = 0; i < coordinates.length - 1; i++) {
        if (diff !== findDiff(coordinates[i], coordinates[i + 1]))
            return false
    }
    return true
};
// inputs 
let coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
console.log(straightLine(coordinates));