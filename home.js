function runFunk1() {
    const element = document.getElementById('submit');
    if (element.innerHTML == "Submit") {
        element.innerHTML = "Done!";
        document.getElementById('testing').innerHTML = "HAHA BYE!";
    } else {
        element.innerHTML = "Submit";
        document.getElementById('testing').innerHTML = "CYB-DEC";
    }
    return false;
}

function runFunk2() {
    const element = document.getElementById('clear');
    if (element.innerHTML == "Clear") {
        element.innerHTML = "Bhag!";
        document.getElementById('testing2').innerHTML = "OK!";
    } else {
        element.innerHTML = "Clear";
        document.getElementById('testing2').innerHTML = "CYB-DEC";
    }
    return false;
}
function hex(input) {
    var value;
    // value = computation on input
    return value;
}