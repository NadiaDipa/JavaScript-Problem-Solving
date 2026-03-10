// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'



// ============================= Solution 1: Using split(""), reverse(), join("") ==============================



// split → string to array
// reverse → reverse array [reverse() does not take any parameters, so there is no need to use quotation marks.]
// join → array to string

let reverseStr = 'Hello Nadia';

function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString(reverseStr));






// =============================== Solution 2: Using for loop ============================

function reverseString(str){
    let result = "";

    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }

    return result;
}

console.log(reverseString("Hello Bangladesh"));







// =============================== Solution 3: Using spread operator ================================


const result2 = (str) =>{
    return [...str].reverse().join('');
}

console.log(result2("Hello Coder"));