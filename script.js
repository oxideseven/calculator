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
const buttons = document.querySelectorAll('button');

const DEFAULT_DISPLAY = '0';
const currentDisplay = DEFAULT_DISPLAY;

displayOutput.textContent = currentDisplay;

//UI Functions

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
    });
});

//Functions

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;;
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2;
}

function operate(num1, op, num2) {

    switch (op) {
        case 'add':
            return addition(num1, num2);
            break;
        case 'sub':
            return subtraction(num1, num2);
            break;
        case 'mul':
            return multiplication(num1, num2);
            break;
        case 'div':
            return division(num1, num2);
            break;
    }
}

