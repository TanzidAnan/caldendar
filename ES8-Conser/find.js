const arr = [21, 36, 52, 45, 85, 74];

let find = null;


for (let item of arr) {
    if (item > 50) {
        find = item;
        break;
    }
}

// console.log(find)
arr.filter

const result = arr.find((item) => item > 50 && item % 2 === 0);
console.log(result)