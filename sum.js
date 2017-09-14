/**
 * Created by NamitaMalik on 9/12/2017.
 */

function sum(arr) {
    var total = 0;
    if (arr.length)
        total = arr.shift() + sum(arr);
    return total;
}
var a = [1, 2, 3, 4, 5];
console.log(sum(a));