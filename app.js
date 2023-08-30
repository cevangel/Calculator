const calcInput = document.querySelector('.calc-input') //calcInput will display the data-value when the key event listener is pressed
const allButtons = document.querySelectorAll('.button')

allButtons.forEach(button => { //when button pressed, use event listener when clicked to display in calcInput Inner text 
    button.addEventListener('click', (e) => {
        var value = e.target.dataset.value  //for use in if statements
        calcInput.innerText += value 
        console.log(e.target.dataset.value)
        console.log(value)
        if (value == '='){
            console.log(operate(firstNumber, secondNumber, operand));
            calcInput.innerText = operate(firstNumber, secondNumber, operand);
            
        } else if (value == '+'||value == '-'||value == '*'||value == '/'){
            operand = value;
            console.log(operand)
            //if click operand, then store the operand as value, and the number string as "a".
        } else if (value == 'clear') {//if value is clear, make everything blank/null
            calcInput.innerText = ''
            firstNumber = ''
            secondNumber = ''
            operand = null;
        
        } else if (operand == null){ //if operand has not been clicked yet
            firstNumber += value;
        } else {
            secondNumber += value; 
        }

    })


})

//store the 3 variables (a,b, operand)

let firstNumber = '';
let secondNumber = '';
let operand = null;

//append to first number (if statement, if operand is null, then append to firstNum, else 
// then click operand to set operand, 

//if operand is +/-/*/, then set operand to that (trying to make sure the first thing is a number)
//else if operand null, then append to firstNum,
//else

//Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
//add
function add(firstNumber,secondNumber){
    return Number(firstNumber) + Number(secondNumber);
}
//subtract
function subtract(firstNumber,secondNumber){
    return Number(firstNumber) - Number(secondNumber);
}
//multiply
function multiply(firstNumber,secondNumber){
    return firstNumber * secondNumber;
}
//divide
function divide(firstNumber,secondNumber){
    return firstNumber/secondNumber;
}

// 2.operate function (3 variables, a, b, operand) that calls one of the above functions
function operate(firstNumber, secondNumber, operand){
    switch(operand){
        case '+':
            return add(firstNumber,secondNumber);
        case '-':
            return subtract(firstNumber,secondNumber);
        case '*':
            return multiply(firstNumber,secondNumber);
        case '/':
            return divide(firstNumber,secondNumber);        
    }
}


//click number button, store it as a or b; click operand button, store it as operand variable
//keep appending a string number until it hits an operand number. 
//chaining stuff: 5x2 gets stored as new 'a'
//as clicking the buttons, (if anything other than operand or equal sign, would be appending)

//**important */
//You should already have the code that can populate the display, 
//so once operate() has been called, update the display with the ‘solution’ 
//to the operation.
//This is the hardest part of the project. 
    //usemethod: getelementbyID
    //OR set inner text to be result of the calculation

//You need to figure out how to store all the values and call the operate 
//function with them. Don’t feel bad if it takes you a while to figure out the logic.

//THERE IS A ROUNDING METHOD IN JS

//Clear? Delete a, b, and operand, as well as clear display

//decimal thing: index of __ or if contains "." then return nothing to help abort