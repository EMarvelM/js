const out_box = document.getElementById('box');
const outputI = document.getElementById('editabelOutput');
const output = document.getElementById('output');

const firstBtns = document.querySelector('.btn123');
const secondBtns = document.querySelector('.btn456');
const thirdBtns = document.querySelector('.btn789');
const lastBtns = document.querySelector('.btn0dotac');
const signBtns = document.querySelector('.btnsign');
const leftBtns = document.querySelector('.btnleft');

const leftbtn = ["/", "="]
const signbtn = ["+", "-", "x"]
const lastbtn = ["0", ".", "AC"]
for (let i = 0; i < 3; i++) {
    signBtns.innerHTML += `<button type="button" class="btn" value="${signbtn[i]}">${signbtn[i]}</button>`;
    firstBtns.innerHTML += `<button type="button" class="btn" value="${i+1}">${i+1}</button>`;
    secondBtns.innerHTML += `<button type="button" class="btn" value="${i+4}">${i+4}</button>`;
    thirdBtns.innerHTML += `<button type="button" class="btn" value="${i+7}">${i+7}</button>`;
    lastBtns.innerHTML += `<button type="button" class="btn" value="${lastbtn[i]}">${lastbtn[i]}</button>`;
    if (i < 2){
        leftBtns.innerHTML += `<button type="button" class="btn" value="${leftbtn[i]}">${leftbtn[i]}</button>`
    }
}

function clearOuput () {
    output.innerText = '';
    outputI.value = '';
    outputI.innerText = '';
}

function textToDisplay(e, f) {
    e.style.display = 'block';
    e.innerText += f.value;
    f.style.display = 'none';
}

output.addEventListener('click', function() {
    textToDisplay(outputI, output);
});

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
    }
    else if (isNaN(Number(buttonValue)) && buttonValue !== ".") {
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

