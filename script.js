const number = document.querySelectorAll('.number');
const calculatorScreen = document.querySelector('.calculator-screen');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimal = document.querySelector('.decimal')


let prevNumb ='';
let calculationOperator = '';
let curNumb = '';

const updateScreen = (number) => {
    calculatorScreen.value = number;
}
const inputNumber = (number) => {
    if(curNumb === '0'){
        curNumb = number;
    }else{
        curNumb += number;
    }
}
const inputOperator = (operator) =>{
    if(calculationOperator === ''){
        prevNumb = curNumb;
    }
    calculationOperator = operator;
    curNumb = '0';
}

const calculate = () =>{
    let result = '';
    switch (calculationOperator){
        case "+":
            result = parseFloat(prevNumb)+parseFloat(curNumb);
            break;
        case "-":
            result = parseFloat(prevNumb)-parseFloat(curNumb);
            break;
        case "*":
            result = (parseFloat(prevNumb)*parseFloat(curNumb)).toFixed(3);
            break;
        case "/":
            result = (parseFloat(prevNumb)/parseFloat(curNumb)).toFixed(3);
            break;
        case "%":
            result = parseFloat(prevNumb)*0.01;
        default:
            break;
    }
    curNumb = result;
    calculationOperator ='';
}

const clearAll = () => {
    prevNumb = ''
    calculationOperator = ''
    curNumb = '0'
}

inputDecimal = (dot) => {
    if(curNumb !== ''){
        curNumb += dot;
    }
}

decimal.addEventListener("click", (event) =>{
    inputDecimal(event.target.value);
    updateScreen(curNumb);
    console.log(event.target.value);
})

clearBtn.addEventListener("click", () =>{
    clearAll();
    updateScreen(curNumb);
})

equal.addEventListener("click", () => {
    calculate();
    updateScreen(curNumb);
    console.log(curNumb);
})

number.forEach((number)=>{
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(curNumb);
        console.log(curNumb);

    })
})

operator.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        inputOperator(event.target.value);
        console.log(event.target.value);
    })
})