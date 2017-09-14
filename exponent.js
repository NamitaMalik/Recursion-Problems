/**
 * Created by NamitaMalik on 9/12/2017.
 */

function exponent(number,base) {
    var result = number;
    if(base !== 1){
        result = result * exponent(number, base-1)
    }
    return result
}

console.log(exponent(8,2));