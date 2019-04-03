console.log(fakeBin(128938));

function fakeBin(x){
    return String(x).split('').map(item => (item < 5)? 0: 1).join('');
}