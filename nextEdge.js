const nextEdge = (side1, side2) => {
    const thirdSide = (side1 + side2) - 1;
    return thirdSide;
}
const result = nextEdge(10, 8);
console.log(result);