let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        const btnText = b.target.innerText;
        if (btnText == '=') {
            string = String(eval(string));
            inputBox.value = string;
        }
        else if (btnText == 'AC') {
            string = '';
            inputBox.value = "0";
        }
        else if (btnText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string || "0";
        }
        else if (b.target.id == 'plusminus') {
            string = String(-eval(string));
            inputBox.value = string;
        }
        else {
            string += btnText;
            inputBox.value = string;
        }
    });
});
