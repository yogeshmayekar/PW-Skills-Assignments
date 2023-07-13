// Question 3**

// Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// **Example 1:**

// **Input:** num1 = "11", num2 = "123"

// **Output:**

// "134"

function addStrings(num1, num2){
    let carry = 0, result = []
    let str1 = num1.length > num2.length ? num1 : num2
    let str2 = num1.length > num2.length ? num2 : num1
    
    let last_index_1 = str1.length - 1, last_index_2 = str2.length - 1;
    for(let i = last_index_1, j = last_index_2; i >=0 ; i--, j-- ){
        let sum  = parseInt(str1[i]) + 
			( j >= 0 ? parseInt(str2[j]) : 0) + carry
		carry = 0;
		result.push( sum >= 10 ? (sum - 10) : sum)
		carry = sum >= 10 ? 1 :0 
    }
    if(carry) result.push(carry)
   return result.reverse().join("")
};

// inputs 
let num1 = "11", num2 = "123";
console.log(addStrings(num1, num2));