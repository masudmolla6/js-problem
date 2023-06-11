// Create a function that takes voltage and current and returns the calculated power.
const circuitPower = (current, voltage) => {
    const Power = current * voltage;
    return Power;
}
const result = circuitPower(10, 230);
console.log(result);