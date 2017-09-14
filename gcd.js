
function gcd (number1, number2) {
 if(!number2){
     return number1;
 }else{
     console.log(number1);
     console.log(number2);
     console.log(number1%number2);
     return gcd(number2, number1%number2);
 }
}

console.log(gcd(20,28));