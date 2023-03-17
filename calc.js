let inputelemnt = document.getElementById("inputElement");
let delelement = document.getElementById("delete");
let equalelement = document.getElementById('equalId');
delelement.onclick = function() {
    if (inputelemnt.value === '') {
        alert('No Data Entered');
    }
    let stringelement = inputelemnt.value.toString().slice(0, -1);
    inputelemnt.value = stringelement;
}
equalelement.onclick = function() {
    if (inputelemnt.value === '') {
        alert('Invalid Data');
    } else if (inputelemnt.value.startsWith('*') || inputelemnt.value.startsWith('-') || inputelemnt.value.startsWith('+') || inputelemnt.value.startsWith('%') || inputelemnt.value.startsWith('/')) {
        alert('Invalid Calculation');
    } else if (inputelemnt.value.endsWith('*') || inputelemnt.value.endsWith('-') || inputelemnt.value.endsWith('+') || inputelemnt.value.endsWith('%') || inputelemnt.value.endsWith('/')) {
        alert('Invalid Calculation');
    } else {
        inputelemnt.value = eval(inputelemnt.value);
    }
}
//eval(inputelemnt);