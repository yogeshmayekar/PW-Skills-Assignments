// Question 6**

// The [tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.
// Input:
// N = 2
// Output:
// move disk 1 from rod 1 to rod 2
// move disk 2 from rod 1 to rod 3
// move disk 1 from rod 2 to rod 3
// 3
// Explanation:For N=2 , steps will be
// as follows in the example and total
// 3 steps will be taken.

function towerOfHanoi(n, sourceRod, destinationRod, auxiliaryRod) {
    if (n === 1) {
      console.log(`Move disk 1 from rod ${sourceRod} to rod ${destinationRod}`);
      return 1;
    }
    let moves = 0;
    moves += towerOfHanoi(n - 1, sourceRod, auxiliaryRod, destinationRod);
    console.log(`Move disk ${n} from rod ${sourceRod} to rod ${destinationRod}`);
    moves++;
    moves += towerOfHanoi(n - 1, auxiliaryRod, destinationRod, sourceRod);
    return moves;
  }
  
  const n = 2;
  const sourceRod = 1;
  const destinationRod = 3;
  const auxiliaryRod = 2;
  
  const totalMoves = towerOfHanoi(n, sourceRod, destinationRod, auxiliaryRod);
  console.log(`Total moves: ${totalMoves}`);