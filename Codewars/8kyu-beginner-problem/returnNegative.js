// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


// Examples

// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12



// ============================= Solution 1: Using if else ==============================

// Solution_1 
function makeNegative_if(num){
    if(num > 0){
        return num * (-1);
    }else{
        return num;
    }
}

console.log(makeNegative_if(6));
console.log(makeNegative_if(-5));
console.log(makeNegative_if(0));




// ========================= Solution 2: Using Ternary ===============================

// Solution_2 
function makeNegative_ternary(num){
    return num > 0 ? -num : num
}

console.log(makeNegative_ternary(13));
console.log(makeNegative_ternary(0));
console.log(makeNegative_ternary(-5));




// ====================== Solution 3: Using Math Obj(), arrow function & ternary ======================

// Solution_3

// Math.abs() → returns the number without its sign (always positive). 
// example: Math.abs(5)   // 5
// Math.abs(-5)  // 5


const makeNegative_math = (num) => {
    return num > 0 ? -Math.abs(num) : num
}

console.log(makeNegative_math(25));
console.log(makeNegative_math(-25));