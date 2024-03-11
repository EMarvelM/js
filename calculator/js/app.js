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
