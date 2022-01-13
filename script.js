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
const btnDel = document.getElementById('btnDel');
const btnDec = document.getElementById('btnDec');
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
    if (classClicked == 'clrBtn') {
        reset();
    }

    if (classClicked == 'delBtn') {
        if (num2Selected == true) {
            num2 = num2.substring(0, num2.length - 1);
            if (num2.indexOf('.') == -1) {
                dec2Pressed = false;
            }
        }
        if ((num2Selected == false) && (opSelected == false)) {
            num1 = num1.substring(0, num1.length - 1);
            if (num1.indexOf('.') == -1) {
                dec1Pressed = false;
            }
        }
    }

    if (classClicked == 'decBtn') {
        if ((opSelected == true) && (dec2Pressed == false)) {
            num2 += contentClicked;
            dec2Pressed = true;
        }
        if ((opSelected == false) && (dec1Pressed == false) && equalPressed == false) {
            num1 += contentClicked;
            dec1Pressed = true;
        }
    }
    
    if ((classClicked == 'equBtn') && (num2Selected == true)) {
        equalPressed = true;
        operate(num1, op, num2);
        opSelected = false;
        num2Selected = false;
        dec1Pressed = false;
        dec2Pressed = false;
        
    }

    if (equalPressed == false) {

        if (classClicked == 'opBtn') {
            if (num2Selected == false) {
                op = contentClicked;
                opSelected = true;
            }
            if (num2Selected == true) {
                equalPressed = true;
                operate(num1, op, num2);
                num2Selected = false;
                op = contentClicked;
                opSelected = true;
                dec1Pressed = false;
                dec2Pressed = false;
            }
        }
        if (classClicked == 'numBtn') {
            if (opSelected == true) {
                num2 += contentClicked;
                num2Selected = true;
            }
            else {
                num1 += contentClicked;
            }
        }
        
    }
    
    if (equalPressed == true) {

        if (classClicked == 'opBtn') {
            if (num2Selected == false) {
                op = contentClicked;
                opSelected = true;
                num1 = result;
                num2 = '';
            }
            if (num2Selected == true) {
                operate(num1, op, num2);
                op = contentClicked;
                opSelected = true;
                num2Selected = false;
                num1 = result;
                num2 = '';
                dec1Pressed = false;
                dec2Pressed = false;
            }
        }
        if ((classClicked == 'numBtn') && (opSelected == true)) {
            num2 += contentClicked;
            num2Selected = true;
        }
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
    num2Selected = false;
    dec1Pressed = false;
    dec2Pressed = false;
    initialize();
}

//Function Variables
let opSelected = false;
let equalPressed = false;
let num2Selected = false;
let dec1Pressed = false;
let dec2Pressed = false;
let num1 = '';
let num2 = '';
let op = '';
let result;

//Functions

function addition(num1, num2) {
    result = parseFloat(num1) + parseFloat(num2);
    resultOutput.textContent = result;
}

function subtraction(num1, num2) {
    result = parseFloat(num1) - parseFloat(num2);
    resultOutput.textContent = result;
}

function multiplication(num1, num2) {
    result = parseFloat(num1) * parseFloat(num2);
    resultOutput.textContent = result;
}

function division(num1, num2) {
    result = parseFloat(num1) / parseFloat(num2);
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
