//UI Elements

const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btnAdd = document.getElementById('btnAdd');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
const btnEqu = document.getElementById('btnEqu');
const btnClr = document.getElementById('btnClr');
const displayOutput = document.getElementById('displayOutput');
const resultOutput = document.getElementById('resultOutput');
const buttons = document.querySelectorAll('button');

//UI Functions

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        btnClicked(button.className, button.textContent);
    });
});

function btnClicked(classClicked, contentClicked){
    if (equalPressed == false) {
        if (classClicked == 'clrBtn') {
            reset();
        }
        if (classClicked == 'equBtn') {
            equalPressed = true;
            operate(num1, op, num2);
            opSelected = false;
        }
        if (classClicked == 'opBtn') {
            op = contentClicked;
            opSelected = true;
        }
        if (classClicked == 'numBtn') {
            if (opSelected == true) {
                num2 += contentClicked;
            }
            else {
                num1 += contentClicked;
            }
        } 
    }
    
    if (equalPressed == true) {
        if (classClicked == 'opBtn') {
            num1 = result;
            op = contentClicked;
            num2 = '';
            opSelected = true;
        }
        if ((classClicked == 'numBtn') && (opSelected == true)) {
        num2 += contentClicked;
        }
        if (classClicked == 'equBtn') {
            operate(num1, op, num2);
            opSelected = false;
        }
        if (classClicked == 'clrBtn') {
            reset();
        }
    }
    if (classClicked == 'clrBtn') {
        reset();
    }
    updateDisplay();
}

function updateDisplay() {
    displayOutput.textContent = `${num1} ${op} ${num2}`;
}

function reset() {
    num1 = '';
    num2 = '';
    op = '';
    opSelected = false;
    equalPressed = false;
    initialize();
}

//Function Variables
let opSelected = false;
let equalPressed = false;
let num1 = '';
let num2 = '';
let op = '';
let result;

//Functions

function addition(num1, num2) {
    result = parseInt(num1) + parseInt(num2);
    resultOutput.textContent = result;
}

function subtraction(num1, num2) {
    result = parseInt(num1) - parseInt(num2);
    resultOutput.textContent = result;
}

function multiplication(num1, num2) {
    result = parseInt(num1) * parseInt(num2);
    resultOutput.textContent = result;
}

function division(num1, num2) {
    result = parseInt(num1) / parseInt(num2);
    resultOutput.textContent = result;
}

function operate(num1, op, num2) {

    switch (op) {
        case '+':
            return addition(num1, num2);
            break;
        case '-':
            return subtraction(num1, num2);
            break;
        case '*':
            return multiplication(num1, num2);
            break;
        case '÷':
            return division(num1, num2);
            break;
    }
    
}

//Initialization
function initialize() {
    displayOutput.textContent = '0';
    resultOutput.textContent = '.';
}

initialize()
