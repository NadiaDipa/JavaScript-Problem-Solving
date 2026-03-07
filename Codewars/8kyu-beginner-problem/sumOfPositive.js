// You get an array of numbers, return the sum of all of the positives ones.

// Example

//[1, -4, 7, 12] =>1 + 7 + 12 = 20




// ========================= Solution 1: Using for of & Ternary ===============================

// Solution_1

function positiveSum(arr){
    let sum = 0;

    for(const num of arr){
        num > 0 ? sum = sum + num : sum;
    }

    return sum;

}

console.log(positiveSum([1, -6, 3, 7, 13])); //24






// ========================= Solution 2: Using for of & if-else ===============================

// Solution_2 

function positiveSum_if(arr){
    let sum = 0;

    for (let i of arr){
        if(i > 0){
            sum += i; // sum = sum + i;
        }
    
    }

    return sum;
}

console.log(positiveSum_if([1, 9, 3, -6, 3, 8, 23])); //47






// ========================= Solution 3: Using for loop ===============================

function positiveSum_forLoop(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++){
       arr[i] > 0 ? sum += arr[i] : sum;
    }

    return sum;
}

console.log(positiveSum_forLoop([3, 5, 66, 7, 8]));









// ========================= Solution 4: Using normal function + arrow function & reduce & ternary===============================
// reduce for loop er alternate

// Solution_4

const positiveSum_reduce = (arr) =>{
   return arr.reduce(function(sum, num){
    return num > 0 ? sum + num : sum;
   }, 0)
}

console.log(positiveSum_reduce([2, 4, 5]));


// or using arrow 
const positiveSum_reduce1 = (arr) =>{
    return arr.reduce((sum, num)=>{
        return num > 0 ? sum + num : sum;
    }, 0)

}

console.log(positiveSum_reduce1([1, 3, 94, -2, 6]));