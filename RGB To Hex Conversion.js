console.log(rgb(7, 25, 255));

function rgb(r, g, b){
    let arr = [];
    arr.push(r, g, b);
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 255){
            arr[i] = (255).toString(16).toUpperCase();
        } else if (arr[i] <= 0){
            arr[i] = '00';
        } else if(arr[i] < 16) {
            arr[i] = '0' + arr[i].toString(16).toUpperCase();
        } else arr[i] = arr[i].toString(16).toUpperCase();
        }
    return arr.join('');
}