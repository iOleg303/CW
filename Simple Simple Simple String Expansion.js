stringExpansion('ss777D4ad22f');
stringExpansionn('ss777D4ad22f');

// 1 вариант
function stringExpansion(s) {
    let arr = '';
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            arr += s[i];
        } else {                             //если первый символы - буквы, то просто вставляем их в arr
            if (!isNaN(s[i + 1])) continue; // если это цифра и за ней еще одна, то пропускаем шаг
            {
                for (let j = i + 1; j < s.length; j++ ){
                    arr += s[j].repeat(s[i]);
                    if (!isNaN(s[j + 1]) || s[j + 1] === undefined) {
                        i = j;
                        break;
                    }
                }
            }
        }
    }
    return arr;
}



// 2 вариант
function stringExpansionn(x) {
    let memory = 1;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == +s[i]) {
            memory = +s[i];
        } else res += s[i].repeat(memory);
    }
    return res;
}