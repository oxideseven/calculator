//UI Elements

const displayOutput = document.getElementById('displayOutput');
const resultOutput = document.getElementById('resultOutput');
const buttons = document.querySelectorAll('button');

//Keyboard Support

document.addEventListener('keyup', (event) => {
    const operators = {
        '+': 'btnAdd',
        '-': 'btnSub',
        '*': 'btnMul',
        '/': 'btn5--Div',
    }
    buttons.forEach((button) => { button.blur(); });
    if (!Number.isNaN(+event.key) && event.key !== ' ') {
      document.getElementById(`btn${event.key}`).click();
    } else if (event.key === 'Backspace') {
      document.getElementById('btnDel').click();
    } else if (event.key === 'Delete' || event.key === 'c' || event.key === 'C') {
      document.getElementById('btnClr').click();
    } else if (event.key === '.') {
      document.getElementById('btnDec').click();
    } else if (event.key === '=' || event.key === 'Enter') {
      document.getElementById('btnEqu').click();
    } else if (['+', '-', '*', '÷'].includes(event.key)) {
      document.getElementById(operators[event.key]).click();
    } else {
      console.log('Wrong key:', event.key);
    }
});

//Mouse Support

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        btnClicked(button.className, button.textContent);
    });
});

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

function btnClicked(classClicked, contentClicked){
    switch (classClicked) {
        
        case 'clrBtn':
            reset();
            break;
        
        case 'delBtn':
            if (num2Selected == true) {
                num2 = num2.substring(0, num2.length - 1);
                if (num2.indexOf('.') == -1) {
                    dec2Pressed = false;
                }
                if (num2 == '') {
                    num2Selected = false;
                }
            }
            if ((num2Selected == false) && (opSelected == false) ) {
                num1 = num1.substring(0, num1.length - 1);
                if (num1.indexOf('.') == -1) {
                    dec1Pressed = false;
                }
            }
            break;
        
        case 'decBtn':
            if ((opSelected == true) && (dec2Pressed == false)) {
                num2 += contentClicked;
                dec2Pressed = true;
            }
            if ((opSelected == false) && (dec1Pressed == false) && equalPressed == false) {
                num1 += contentClicked;
                dec1Pressed = true;
            }
            break;
        
        case 'equBtn':
            if (num2Selected == true) {
                if ((num2 == 0) && (op == '÷')) {
                    resultOutput.textContent = 'nonononono!';
                }
                else {
                    equalPressed = true;
                    operate(num1, op, num2);
                    num2Selected = false;
                    opSelected = false; 
                }
            }
            break;
        
        case 'opBtn':
            if (equalPressed == false) {
                if (num2Selected == false) {
                    op = contentClicked;
                    opSelected = true;
                }
                if (num2Selected == true) {
                    if ((num2 == 0) && (op == '÷')) {
                        resultOutput.textContent = 'nonononono!';
                    }
                    else {
                        equalPressed = true;
                        operate(num1, op, num2);
                        num2Selected = false;
                        op = contentClicked;
                        opSelected = true;
                    }
                }
            }
            if (equalPressed == true) {
                if (num2Selected == false) {
                    op = contentClicked;
                    opSelected = true;
                    num1 = result;
                    num2 = '';
                }
                if (num2Selected == true) {
                    if ((num2 == 0) && (op == '÷')) {
                        resultOutput.textContent = 'nonononono!';
                    }
                    else {
                        operate(num1, op, num2);
                        op = contentClicked;
                        num2Selected = false;
                        num1 = result;
                        num2 = '';
                        opSelected = true;
                    }
                }
            }
            break;
        
        case 'numBtn':
            if (equalPressed == false) {
                if (opSelected == true) {
                    num2 += contentClicked;
                    num2Selected = true;
                }
                else {
                    num1 += contentClicked;
                }
            }
            if ((equalPressed == true) && (opSelected == true)) {
                num2 += contentClicked;
                num2Selected = true;
            }
            break;
    }
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

//Calc Functions

function addition(num1, num2) {
    result = parseFloat(num1) + parseFloat(num2);
    cleanUP(result);
}

function subtraction(num1, num2) {
    result = parseFloat(num1) - parseFloat(num2);
    cleanUP(result);
}

function multiplication(num1, num2) {
    result = parseFloat(num1) * parseFloat(num2);
    cleanUP(result);
}

function division(num1, num2) {
    result = parseFloat(num1) / parseFloat(num2);
    cleanUP(result);
}

function cleanUP (result){
    result = result = Math.round((result + Number.EPSILON) * 1000000) / 1000000;
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
    dec1Pressed = false;
    dec2Pressed = false;
}

//Initialization
function initialize() {
    displayOutput.textContent = '0';
    resultOutput.textContent = '.';
}

initialize()
