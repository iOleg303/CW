stringExpansion('ss777D4ad22f');

function stringExpansion(s) {
    let memory = 1;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == +s[i]) {
            memory = +s[i];
        } else res += s[i].repeat(memory);
    }
    console.log(res);
}