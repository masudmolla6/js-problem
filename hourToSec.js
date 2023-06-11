// Write a function that converts hours into seconds.
const convertHourToSec = (hours) => {
    const sec = hours * 60 * 60;
    return sec;
}
const result = convertHourToSec(2);
console.log(result);