const sumEven = (array) => {
    let latestResult = 0;
    for (const element of array) {
        if (element % 2 == 0) {
            latestResult = latestResult + element;
        }
    }
    return latestResult;
}
const arr = [2, 4, 6, 5, 7, 4, 9];
const input = sumEven(arr);
console.log(input);