module.exports = function getZerosCount(number, base) {
    let zero = number;

                                
    for (let i = 2; i <= base; i++) {
      if (base % i === 0) {                 //первое число, которое делиться без остатки(i)
        let X = 0;
        while (base % i === 0) {           
           base /= i;     
           X++;                             //степень числа, котороеделиться без остатка (i) 
        }
        let c = 0;
        let z = Math.floor(number / i);    //степень числа (i) в 10 системе 
        while (z > 0) {          
          c += z;     
          z = Math.floor(z / i);  
        }
        zero = Math.floor(c / X);
      }
    }
    return zero;
}

/* https://brilliant.org/wiki/trailing-number-of-zeros/
   https://www.geeksforgeeks.org/number-of-trailing-zeroes-in-base-b-representation-of-n/
   https://www.quora.com/How-do-I-find-the-number-of-trailing-zeroes-of-N-factorial-in-Base-B */

/*{
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
} */ 
