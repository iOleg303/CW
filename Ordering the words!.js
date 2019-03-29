console.log(orderWord('aaNNA'));
function orderWord(s){
    if (s === '' || s === null){
        return 'Invalid String';
    }
    return s.split('').sort().join('');
}