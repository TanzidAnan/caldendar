const myInfo={
    name:'mehedy',
    age:25,
    address:'rajshahi',
    sosurName:'katappa',
    sosurBari:'B.Baria',
    contact:{
        phone:25454554,
        email:'info@gmail.com'
    }
}

const obj2 ={...myInfo};
obj2.married =false;
// console.log(myInfo)
// console.log(obj2)


// object access : dot notation ,bracket notation

const myInfo1={
    name:'mehedy',
    age:25,
    address:'rajshahi',
    sosurName:'katappa',
    sosurBari:'B.Baria',
    contact:{
        phone:25454554,
        email:'info@gmail.com'
    }
}

for(let key in myInfo1){
    console.log(myInfo1[key])
}


// const x ='sosurName';
// console.log(myInfo1['sosurName'])
// console.log(myInfo1[x])