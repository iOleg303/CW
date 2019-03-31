stringExpansion('ss777D4ad22f');

function stringExpansion(s) {
    let arr = '';
   for (let i = 0; i < s.length; i++) {
       if (isNaN(s[i])) {
           arr += s[i];
       } else {                             //если первый символы - буквы, то просто вставляем их в arr
           if (!isNaN(s[i + 1])) continue; // если это цифра и за ней еще одна, то пропускаем шаг
           {
               for (let j = i + 1; j < s.length; j++ ){
                   console.log(s[i]);
                   arr += s[j].repeat(s[i]);
                   if (!isNaN(s[j + 1]) || s[j + 1] === undefined) {
                       i = j;
                       break;
                   }
               }
           }
       }
   }
    console.log (arr);
}