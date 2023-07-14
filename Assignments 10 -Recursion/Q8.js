// Question 8**

// Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

// **Examples :**
// Input : abc de
// Output : 3
// There are three consonants b, c and d.

// Input : geeksforgeeks portal
// Output : 12

function countConsonants(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonantCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i]) && str[i] !== ' ') {
        consonantCount++;
      }
    }
  
    return consonantCount;
}

console.log(countConsonants("abc de"));
