/**
 * Truthy:
 * 1.true
 * 2.any number (+ve -ve) any number other than 0
 * 3. any string other than empty string
 * 4. '0' ,'false'
 * 5.{}
 * 6.[]
 * 
 * 
 * 
 * Falsy:
 * 1. 0
 * 2. '' (empty string)
 * 3.null
 * 4.
 * */ 

const x= '0';

if(x){
    console.log('Value of x is truthy');
}
else{
    console.log('value of x is falsy')
}