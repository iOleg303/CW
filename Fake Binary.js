console.log(fakeBin(12893));

function fakeBin(x){
    res = '';
    for (let i = 0; i < String(x).length; i++){
    if (String(x)[i] < 5){
        res += 0;
    } else {
        res += 1;
    }
}
    return res;
}