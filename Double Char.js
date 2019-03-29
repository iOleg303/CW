console.log(doubleChar('Hello'));

function doubleChar(str) {
    return str.split("").map(c => c + c).join("");
}