// class myName {


//     constructor(w) {

//         this.y = w,
//             this.x = w

//         console.log(this.y)
//     }
//     get arrea() {
//         var C = 5 / 9 * (this.y - 32)
//         return C;
// }

// set arrea(arrea) {
//     this.y = Math.sqrt(arrea)
//     this.x = this.y
// }

// }


// var result = new myName(50)
// console.log(result.arrea)
// result.arrea = 50

// console.log(result.y)
// console.log(result.x)



// class Thermostat {
//     constructor(a) {
//         this.f = a


//     }
//     get getter() {
//         var C = 5 / 9 * (this.f - 32)
//         console.log(C)
//         return C
//     }
//     set getter(getter) {

//         var F = C * 9.0 / 5 + 32
//         return F

//     }

// }
// const thermos = new Thermostat(76);

// console.log(thermos.getter)

// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius
// console.log(thermos.getter)

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig;
// // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line

// console.log(result)
// console.log(result.length)

// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) => previous + current)

// console.log(`Sum of array values is: ${arraySum}`)
// function countToFive() {
//     let firstFive = "12345";
//     let len = firstFive.length;
//     // Only change code below this line
//     for (let i = 1; i <= len; i++) {
//         // Only change code above this line
//         console.log(firstFive[i]);
//     }
// }

// countToFive();

// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
//     let row = [];
//     for (let i = 0; i < m; i++) {
//         row = []
//         console.log(row)
//             // Adds the m-th row into newArray
//             // console.log("ii", i)
//         newArray.push(i)
//         for (let j = 0; j < n; j++) {
//             // Pushes n zeroes into the current row to create the columns
//             row.push(0);
//             // console.log("jj", j)
//         }
//         // Pushes the current row, which now has n zeroes in it, to the array
//         newArray.push(row);
//     }
//     return newArray;
// }

// let matrix = zeroArray(3, 2);
// console.log(matrix);

// function number(m, n) {

//     for (var i = 0; i <= m; i++) {

//         for (var j = i; j <= n; j++) {
//             // console.log("* ", j + " ii " + i)

//             console.log("1")

//         }
//         console.log("end")

//     }

// }

// var result = number(4, 4)
// console.log(result)

// function greaterThanTen(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(i, arr)
//         if (arr[i] > 10) {
//             newArr.push(arr[i]);
//             // console.log(arr[i])
//         }
//     }
//     return newArr;
// }

// var num = greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
// console.log(num)

// var num2 = [1, 3, 5, 6, 7, 10, 14, 20]

// var num3 = num2.map(function(value, i, arr) {
//     if (arr[i] > 10) {
//         return value
//     }
//     return "sohekl"

// })
// console.log(num3)


// function filteredArray(arr, elem) {
//     let newArr = [];
//     // Only change code below this line

//     for (var i = 0; i <= arr.length; i++) {
//         if (arr[i].indexOf(elem) === -1) {
//             newArr.push(arr[i])
//         }

//     }
//     //Only change code above this line
//     return newArr;

// }

// console.log(filteredArray([
//     [3, 2, 3],
//     [1, 6, 3],
//     [3, 13, 26],
//     [19, 3, 9]
// ], 3));


// function findWord(str) {
//     var strS = str.split(' ');

//     var logword = strS.reduce((previous, current) => {

//             if (current.length > previous.length) {
//                 return current
//             } else {
//                 return previous
//             }

//         })
//         // var longestWord = strS.reduce((longest, currentWord) => {
//         //     if (currentWord.length > longest.length) {
//         //         return currentWord;
//         //     } else {

//     //         return longest;
//     //     }
//     // });
//     // return longestWord
//     return logword
// }
// console.log(findWord("The quick brown fox jumped over the lazy dog"))


// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for (var i = 0; i < strSplit.length; i++) {
//         if (strSplit[i].length > longestWord) {
//             longestWord = strSplit[i].length;
//         }
//     }
//     console.log(longestWord)
//     return longestWord;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");

// function findLongestWordLength(str) {
//     var num1 = str.split(" ");
//     //  console.log(num1)
//     var num2 = 0;

//     for (let i = 0; i < num1.length; i++) {
//         // console.log(num1.length)
//         if (num1[i].length > num2) {
//             num2 = num1[i].length
//             console.log(num2)
//         }
//     }
//     return num2
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

// function largestOfFour(arr) {
// console.log(arr)
//     var num = [0, 0, 0, 0]

//     for (let i = 0; i < arr.length; i++) {
//         console.log("jk-" + num[i])
//             // console.log(i)outer loop
//         for (let j = 0; j < arr[i].length; j++) {
//             // console.log(arr[i])
//             console.log("jklsdjkgf-" + num[i])
//             if (arr[i][j] > num[i]) {
//                 num[i] = arr[i][j]

//             }
//         }
//     }
//     return num
// }



function largestOfFour(str) {
    var largenUmeber = str.map(value => {

        var newlageNumber = value.reduce((previous, current) => {
            if (current > previous) {
                return current
            }
            return previous
        })
        return newlageNumber


    })
    return largenUmeber
    console.log(largenUmeber)
}
console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]))