console.log(pigIt('Pig o Latin !'));

function pigIt(str){
    let array = ['!', '?', '.'];
    let a, b, c, d;
    let res = '';
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++){
        a = arr[i].slice(1);
        if (array.indexOf(arr[i]) < 0) {
            b = arr[i][0];
            c = '';
        } else {
            b = '';
            c = arr[i][0];
        }
        if (i === arr.length - 1){
            d = '';
        } else {
            d = ' ';
        }
        if (array.indexOf(arr[i]) >= 0) {
            res += c;
        } else res += a + b + 'ay' + d + c;
        }
    return res;
}