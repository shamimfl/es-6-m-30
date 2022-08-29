
// module 30 

// problem 1
// Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.

const multiply = (num1, num2, num3) => num1 * num2 * num3;

// console.log(multiply(3,6,4))



// problem 2 
// Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const threeLine = `I am a web developer.
I love to code.
I love to eat biryani.
`
// console.log(threeLine)

// Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.


const sum = (a, b = 0) => {
    const math = a + b;
    return math;
}


// console.log(sum(10))


const friends = ['ontor shamim', 'Labib', 'tuhin', 'sumaiya', 'suborna', 'sathi', 'akkash']


const newArr = []
//     for (let i = 0; i < friends.length; i++) {
//         const element = friends[i];
//        console.log(element.length)
//        if(element.length % 2 == 0){
//             newArr.push(element)
//        }

//     }
// console.log(newArr)



friends.map(friend => {
    if (friend.length % 2 == 0) {
        newArr.push(friend)
    }
})

// console.log(newArr)



// problem no 3 

// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements
// Print the result.



const square = (nums) => {
    const newArray = []
    for (const num of nums) {
        const sq = num ** 2;
        newArray.push(sq)
    }
    // const total = newArray.reduce((pv, cu)=> pv + cu, 0)
    // return total ;
    let sum = 0
    newArray.map(arr => {
        sum = sum + arr
    })

    const av = sum / newArray.length ;
    const average = av.toFixed(2)

    return average ;
}


const number = [3, 4, 5, 6, 7, 8]
// console.log(square(number))




//     let moeny = 10 ;

// function add(tk){

//     moeny = moeny + tk
//     return moeny
// }

// console.log(20);





// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,problem 4 >>>>>>>>>>>>>>>>>>

// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result



// const makeArray=(arr1, arr2)=>{
//     const newArray = arr1.concat(arr2)
//     const max = Math.max(...newArray);
//     return max ;
// }


const makeArray=(arr1, arr2)=>Math.max(...(arr1.concat(arr2)));
console.log(makeArray([6,5,4], [3,1,7]));