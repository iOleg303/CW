console.log( getCount('aaadda') );

function getCount(str) {
    let vowelsCount = 0;
let vowels = ['a', 'e', 'i', 'o', 'u'];
for (let i = 0; i < str.length; i++){
    if (vowels.indexOf(str[i]) >= 0){
        vowelsCount++;
    }
}
    return vowelsCount;
}