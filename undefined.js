/**
 * 8.ways to get undefine
 * 1.variable that is not initialized will give undefined
 * 2.function with 
 * */ 

function noNagative(a,b){
    if(a<0|| b<0){
        return
    }
    return a+b
}

const total=noNagative(-4,-2);
console.log(total)