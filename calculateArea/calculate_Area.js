let length;
let width;

function calculateArea() {
    length = parseFolat(document.getElementById("length").value);
    width = parseFolat(document.getElementById("width").value);
    let area = length * width;
    document.getElementById("result").innerHTML = `The area of the rectangle is: ${area}`;
}