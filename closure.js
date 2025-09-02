function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const sirstServer =(kitchen());
const serstServer1 =(kitchen())
console.log(sirstServer())
console.log(sirstServer())
console.log(serstServer1())