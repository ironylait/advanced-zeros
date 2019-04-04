module.exports = function getZerosCount(number, base) {
let zero = number;
var arr = [];


    for (let i = 2; i <= base; i++) {
      if (base % i === 0) {                     //первое число, которое делиться без остатка(i) 
        let powerBase = 0;
        while (base % i === 0) {           
           base /= i;     
           powerBase++;                         //степень числа(i) 
        }
        let powerNumber = 0;                    //степень числа (i) в number
        let z = Math.floor(number / i);    
        while (z > 0) {          
          powerNumber += z;     
          z = Math.floor(z / i);  
        }
        zero = Math.floor(powerNumber / powerBase);
        arr.push(zero);
      }
    }
const min = Math.min(...arr);
return min;
}

/* 
   https://brilliant.org/wiki/trailing-number-of-zeros/
   https://www.geeksforgeeks.org/number-of-trailing-zeroes-in-base-b-representation-of-n/
   https://www.quora.com/How-do-I-find-the-number-of-trailing-zeroes-of-N-factorial-in-Base-B
*/


/* 
  //First try
  {
  if (1 > number || number > 10000000) throw new Error({error: 'Eror'});
  var b; 
  var a = number; 
  var counter=0;
  
 
 function factorial(numb) {
  var fact=1;
     for (var i = 2; i <= numb; i++)
         fact = fact * i;
     return fact; 
 }                                 //находим факториал
   
 b = factorial(a).toString(base); //перевод системы счисления 
 b = +b;                          //преобразвание в число
 do {
    counter++;
    b = b /10; 
 } while (b % 10 == 0);        
 
   
 return counter;   
} 
*/ 
