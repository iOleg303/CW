console.log( vowelOne("vowelOne") );

function vowelOne(s) {
    let str = '';
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length; i++) {
        if (vowels.indexOf(s[i].toLowerCase()) >= 0) {
            str += '1';
        } else str += '0';
    }
    return str;
}