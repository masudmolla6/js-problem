// 1. display all element.
const numbers = [1, 2, 3, 5, 6, 7, 8];
const newArray = numbers.map(Element => console.log(Element));

// if element is even number you have to square with tarnarery operator.
let array = [1, 2, 3, 4, 5, 6, 7, 8,9, 10];

const ifEvenSquare = array.map(Element => {
    return Element % 2 === 0 ? Element * Element : Element;
})
console.log(ifEvenSquare);

// add 5 with every element
const addFive = array.map(Element => {
    return Element + 5;
})
console.log(addFive);