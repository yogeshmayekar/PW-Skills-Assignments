// Question 7**

// Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// **Examples:**

// > Input: str = “cd”
// > 
// > 
// > **Output:** cd dc
// > 
// > **Input:** str = “abb”
// > **Output:** abb abb bab bba bab bba

function printPermutations(str) {
    const permutations = [];

      function generatePermutations(currentPermutation, remainingChars) {
      if (remainingChars.length === 0) {
        permutations.push(currentPermutation);
        return;
      }
      for (let i = 0; i < remainingChars.length; i++) {
        const newPermutation = currentPermutation + remainingChars[i];
        const newRemainingChars = remainingChars.slice(0, i) + remainingChars.slice(i + 1);
        generatePermutations(newPermutation, newRemainingChars);
      }
    }
    generatePermutations("", str);
    return permutations;
}

console.log(printPermutations("cd"));