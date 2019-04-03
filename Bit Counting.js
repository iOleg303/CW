let countBits = function(n) {
let double = n.toString(2);
console.log(double);
let qulity = 0;
for (let i = 0; i < double.length; i++){
    if (+double[i]) qulity++ ;
}
return qulity;
};

console.log(countBits(123));