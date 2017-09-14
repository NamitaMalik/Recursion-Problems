function range(num1, num2) {
    var arr = [];
    if(num2-num1 === 1){
        return arr;
    }else{
        arr = range(num1, num2-1);
        arr.push(num2-1);
    }
    return arr;
}

console.log(range(4,10));