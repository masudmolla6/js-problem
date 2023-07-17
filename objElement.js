const obj = { name: 'masud', id: 23, address: 'dhaka' };
for (const element in obj) {
    console.log(`${element}:${obj[element]}`);
}