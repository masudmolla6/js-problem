const life = (age) => {
    if (age <= 20) {
        return ('Book:Money Can not buy Happiness');
    }
    else if(age>20){
        return ('Me:My Books Was Wrong,Need money to Buy Happiness');
    }
}
const reality = life(24);
console.log(reality);