// function confirmEnding(str, target) {
//     if (target <= 0) {
//         return ""
//     }
//     if (target === 1) {
//         return str
//     } else {
//         return str + confirmEnding(str, target - 1)
//     }

// }
// console.log(confirmEnding("*", 0));
// function truncateString(str, num) {
//     if (str.length <= num) {
//         return str
//     }
//     return str.slice(0, num) + "..."
// }
// console.log(
//     truncateString("A-tisket a-tasket A green and yellow basket", 10));

var letter = "my name is sohel"
    // var sensetive = letter[0].toUpperCase() + letter.slice(1).toLowerCase()


function capilization(str) {
    var result = "";

    result = str[0].toUpperCase() + str.slice(1).toLowerCase()
    return result
}
var result1 = (str) => str.split('').map(capilization).join('')


console.log(capilization(letter))