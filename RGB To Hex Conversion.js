console.log(rgb(7, 25, 255));

function rgb(r, g, b){
    function toHex(x){
        if (x >= 255) return 'FF';
        else if (x <= 0) return '00';
        else if (x < 16) return '0' + x.toString(16).toUpperCase();
        return x.toString(16).toUpperCase();
    }
    return toHex(r) + toHex(g) + toHex(b);
}