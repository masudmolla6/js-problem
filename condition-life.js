const life = ['depression', 'sadness', 'happiness', 'tension', 'money', 'bad memories', 'satisfaction'];

life.map((partOfLife) => {
    if (partOfLife === 'happiness' || partOfLife === 'money' || partOfLife === 'satisfaction') {
        console.log(partOfLife);
    }
})