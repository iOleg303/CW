function stringExpansion(s) {
    let memor = 1;
    let newS = "";
    for (let i = 0; i <s.length; i++){
        if(s[i] == +s[i]){
            memor = +s[i];
            console.log(memor);
        }else{
            newS += s[i].repeat(memor);
        }
    }
    return newS;
}