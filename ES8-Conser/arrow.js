function info() {
    return 'ki chai....?'
}




const result = info();
// console.log(result)



const double =(x) => x*2;

const result1=double(3);
// console.log(result1)

const add=(x,y) =>{
    const total =x+y;
    return total
}

const result2 =add(5,9);
// console.log(result2)

const add1=(x=0,y=0)=>{
    const total =x+y;
    return total
}

const result3=add1(5);
console.log(result3)