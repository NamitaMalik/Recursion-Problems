/**
 * Created by NamitaMalik on 9/14/2017.
 */

function sumOfNthPower(num) {
    var n = 0;
    var k = 0;
    var l = 0;
    if(k === num-1 && num ===1){
    }else{
        k = k+1;
        n = sumOfNthPower(num-1)+1;
    }
    return n;
}

console.log(sumOfNthPower(20));