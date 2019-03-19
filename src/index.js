module.exports = function getZerosCount(number, base) {
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