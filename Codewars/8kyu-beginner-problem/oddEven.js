// Problem: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Platform: Codewars (8kyu)____Date: 04-03-2026



// ========================= Solution 1: Using if else ===============================

// Solution_1:

function evenOdd_if(number){
    if(number % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

console.log(evenOdd_if(7)); //odd
console.log(evenOdd_if(4)); //even




// ========================= Solution 2: Using Ternary ===============================


// Solution_2

function evenOdd_ternary(number){
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOdd_ternary(13)); //odd
console.log(evenOdd_ternary(47)); //odd
console.log(evenOdd_ternary(6)); // even





// ========================= Solution 3: Using Arrow Function ==========================

// Solution_3 

const evenOrOdd = (number) => {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(3));
