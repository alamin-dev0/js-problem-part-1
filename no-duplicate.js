/**
 * array has some duplicate elements 
 * []
 */


const biriyaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul']
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61]

function noDuplicate(array){
    const unique = []
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor)
console.log(uniqueArray)



function noDuplicateNumber(numbs){
    const uniqueValue = []
    for(const num of numbs){
        if(uniqueValue.includes(num)===false){
            uniqueValue.push(num)
        }
    }
    return uniqueValue;
}

const noDuplicateArrayNumbers = noDuplicateNumber(numbers)
console.log(noDuplicateArrayNumbers)