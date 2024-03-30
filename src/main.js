const display = document.getElementById('display');

function appendNumber(number){
    display.value += number;
}

function clearDisplay(){
    display.value = "";
}

function appendOperator(operator){
    display.value += operator;
}

function calculate(){
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
}

function del(){
    const exp = display.value;
    display.value = exp.slice(0,-1);
}