// array like Object

function sum(a, b, c) {
    const args =[...arguments];
    let sum =0
    for(const arg of args){
        console.log(arg)
    }
    console.log(args)
    const result = a + b + c;
    return result
}

const total = sum(41, 36, 36, 36, 45, 37);
console.log(total)