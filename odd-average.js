/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array 
 */


function oddAverage(numbers) {
    let sum = 0;
    const oddArray = []
    // const avgeCount = numbers.length;
    for (const number of numbers) {
        if (number % 2 === 1) {
            oddArray.push(number)

        }
    }
    // odds is the array that contains only the odd numbers 
    // console.log(oddArray)
    for (const number of oddArray) {
        sum = sum + number;
    }
    const count = oddArray.length;
    const avg = sum / count
    return avg;
}


const numbers = [12, 13, 42, 65, 81, 58, 77, 99,1,3,5]
const avg = oddAverage(numbers)
console.log('average of the odd numbers is', avg)