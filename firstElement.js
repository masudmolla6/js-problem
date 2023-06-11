// Create a function that takes an array containing only numbers and return the first element.

const FirstElementOfAnArray = (array) => {
    const firstElement = array[0];
    return firstElement;
}
const arr = [3, 2, 4, 56, 8, 4, 8];
const result = FirstElementOfAnArray(arr);
console.log(result);