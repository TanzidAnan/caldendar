/**
 * 8.ways to get undefine
 * 1.variable that is not initialized will give undefined
 * 2.function with is not passed will be undefined
 * 3. if return has nothing on the right side will return undefined
 * 4.property that doesn't exists on an object will give you undefined
 * 5.accessing array elements outside of the index range
 * 6.deleting an element inside an array
 * 7. set a value directly to undefined
 * */ 

function noNagative(a,b){
    if(a<0|| b<0){
        return
    }
    return a+b
}

const total=noNagative(-4,-2);
// console.log(total)


const fifth ={id:1, name:'ponchom',age:30};
console.log(fifth.ages)