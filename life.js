const life = (age) => {
    if (age < 18) {
        return ('Book:Money Can not buy Happiness');
    }
    else if(age>=18){
        return ('Me:My Books Was Wrong,Need money to Buy Happiness');
    }
}
const reality = life(18);
console.log(reality);