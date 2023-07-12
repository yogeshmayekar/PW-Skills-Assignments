// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

function placeFlower(flowerbed, n) {
    const lengths = flowerbed.length;
    if (n === 0 || (n === 1 && flowerbed[0] === 0 && lengths === 1)) {
      return true;
    }
    for (let i = 0; i < lengths; i++) {
      if (flowerbed[i] === 1) continue;
      const c1 = i === 0 && i + 1 < lengths && flowerbed[i + 1] === 0;
      const c2 = i === lengths - 1 && i - 1 >= 0 && flowerbed[i - 1] === 0;
      const c3 = i > 0 && i < lengths - 1 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0;
      if (c1 || c2 || c3) {
        flowerbed[i] = 1;
        n--;
      }
      if (n === 0) return true;
    }
    return false;
  }

//   input 
let flowerbed = [1,0,0,0,1];
let n = 1;
console.log(placeFlower(flowerbed, n));