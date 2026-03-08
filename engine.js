//global
let var1, var2, operator;

//declaration

function add(num1,num2){//adds two numbers
    return num1+num2;
}

function subtract(num1, num2){//substracts second number from the first
    return num1-num2;
}

function multiply(num1,num2){//multiplies two numbers
    return num1*num2;
}

function divide(num1,num2){//divides the first number with respect to the second number[0 is taken care of]
    if(num2!=0) return num1/num2;
    else return "Nice try, I prepared for that"
}