function main(numOne, numTwo) {
   
    var quotient;
    if(numTwo === 0){
        quotient = 'devide by zero! Can not devide by zero';
    } else{
    quotient = numOne / numTwo;


    }
    

  return quotient;  
}

console.log(main(15, 3));
console.log(main(25, 5));
console.log(main(420, 10));
console.log(main(55, 0));

modul.exports=main;