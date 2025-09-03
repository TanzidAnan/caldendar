const numbers = [1, 3, 6, 8, 4, 5, 1, 9, 7, 8, 5];










const sum = numbers.reduce((prev, current) => prev + current, 0);
console.log(sum)

const number = [
    { a: 1 },
    { a: 2 },
    { a: 3 },
    { a: 4 },

];
const total =number.reduce((prev,current) => prev +current.a,0);
console.log(total)