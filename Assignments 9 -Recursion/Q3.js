// Question 3**

// ****Given a positive integer, N. Find the factorial of N. 

// **Example 1:**

// Input: N = 5 

// Output: 120

// **Example 2:**

// Input: N = 4

// Output: 24
function factorial(n){
        var res = 1, i;
        for (i = 2; i <= n; i++)
            res *= i;
        return res;
    }
//   inputs       
        var num = 5;
        console.log(factorial(5));