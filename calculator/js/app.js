const out_box = document.getElementById('box');
const ouputI = document.getElementById('editabelOutput');
const output = document.getElementById('output');

function textToDisplay(e) {
    e.classList.remove('hide');
    e.classList.add('show');
}

output.addEventListener('click', function() {
    textToDisplay(outputI);
});

function clearOuput () {
    output.innerText = '';
    outputI.value = '';
    outputI.innerText = '';
}

let atFirst = true;
let result = 0;
let allowChange = true;
let current = 0;
let lastpressed = "";
const allBtn = Array.from((document.querySelectorAll('.btn')));
allBtn.forEach( (btns) => btns.addEventListener('click', function (buttonKey) {
    let buttonValue = buttonKey.target.value;
    if (buttonValue === "x") {
        buttonValue = "*";
    }

    if (buttonValue === '.' || !(isNaN(Number(buttonValue)))) {
        if (output.innerText.split('').filter( (num) => num === "." ).length < 1 || buttonValue !== ".") {
            output.innerText += buttonValue;
            outputI.value += buttonValue;
            outputI.innerText += buttonValue;
            console.log(buttonValue);
            allowChange = true;
        }
    } else if (isNaN(Number(buttonValue)) && buttonValue !== ".") {
        if (buttonValue !== "=" && buttonValue !== "AC"){
            lastpressed = buttonValue;
        }

        if (buttonValue === "+") {
            result += Number(outputI.value);
            clearOuput();
        } else if (buttonValue === "AC") {
            clearOuput();
            atFirst = true;
            allowChange = true;
            result = 0;
        } else if (buttonValue === "-") {
            // if number is at first do not minus but plus
            if (atFirst === true) {
                result += Number(outputI.value);
                atFirst = false;
                clearOuput();
            } else {
                result -= Number(outputI.value);
                clearOuput();
            }
        } else if (buttonValue === "*") {
            if (atFirst === true) {
                result += Number(outputI.value);
                atFirst = false;
                clearOuput();
            } else {
                result *= Number(outputI.value);
                clearOuput();
            }
        } else if (buttonValue === "/") {
            if (atFirst === true) {
                result += Number(outputI.value);
                atFirst = false;
                clearOuput();
            } else {
                result /= Number(outputI.value);
                clearOuput();
            }
        } else if (buttonValue === "=") {
            if (lastpressed !== "") {
                if (allowChange === true){
                    current = Number(outputI.value);
                    allowChange = false;
                }
                console.log(current);

                if (lastpressed === "+") {
                    result += current
                } else if (lastpressed === "-") {
                    result -= current;
                } else if (lastpressed === "*") {
                    result *= current;
                } else if (lastpressed === "/") {
                    result /= current;
                }
            } else if (lastpressed === "") {
                result = Number(outputI.value);
            }
            clearOuput();
            output.innerText += result;
            outputI.value += result;
            outputI.innerText += result;
        }
    }

    //start calculating

}));

