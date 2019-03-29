console.log(isAlt('wqaw'));
function isAlt(word) {
    let vowels = {'a':0, 'e':0, 'i':0, 'o':0, 'u':0};
    for (let i = 1; i < word.length; i++) {
        if (word[i] in vowels === word[i-1] in vowels) return false;
    }
    return true;
}