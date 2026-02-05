// 12 inch 1 feet

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}


const shuboHeight = inchToFeet(75);
console.log(shuboHeight)



// 75 ignor this one 

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch. ';
    return result;
}
const inToF = inchToFeet2(75)
console.log(inToF)



function mileToKM(mile){
    const kilo = mile * 1.60934
    return kilo;
}
console.log(mileToKM(10))

function kiloMeterTomiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
console.log(kiloMeterTomiles(10))