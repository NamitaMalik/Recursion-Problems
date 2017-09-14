/**
 * Created by NamitaMalik on 9/13/2017.
 */

function even(num) {
    if(num === 1){
        return false;
    }else if(num === 0){
        return true;
    }else{
        num = num-2;
        return even(num);
    }

}

console.log (even(8));
