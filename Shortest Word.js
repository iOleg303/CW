console.log(findShort("turns out random test cases are easier than wrsdvsvsditing out basic ones"));

function findShort(s){
    return Math.min(...s.split(' ').map(item => item.length));
}