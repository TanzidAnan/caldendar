const name ='Tanzid Anan';
const age =45;
const job ='bekar';

const sentence =`amar name ${name}, amar boyos ${age} ami akhon ${job}`;

// console.log(sentence)


const myInfo1={
    name:'mehedy',
    age:25,
    address:'rajshahi',
    sosurName:'katappa',
    sosurBari:'B.Baria',
    subject :['bangla','english','math'],
    contact:{
        phone:25454554,
        email:'info@gmail.com'
    }
}

const sentence1 =`amar name ${name} amar subjects gulo ${myInfo1.subject.map((sub) =>sub).join('|')}`;

const user =`anar naem ${myInfo1.name} amar phone number ${myInfo1.contact.phone}`;
console.log(user)


console.log(sentence1)
