//global
let var1="", var2="", operator;

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

function operate(){
    var1= parseInt(var1);
    var2= parseInt(var2);
    switch(operator){
        case '+': return add(var1, var2);
            break;
        case '-': return subtract(var1, var2);
            break;
        case '*': return multiply(num1,num2);
            break;
        case '/': return divide(var1, var2);
            break;
        default: console.log("The operator is:", operator);
    }
}

//DOM Manipulation

const numerical= document.querySelector(".numerical");
for(let i=1; i<=9; i++){
const numButton= document.createElement("button");
numButton.textContent= `${i}`;
numerical.appendChild(numButton);
}
const DisplayInput= document.querySelector(".input")
numerical.addEventListener("click", function(e){
    if(e.target.tagName !=="BUTTON") return console.log("wrong place!");
    var2= var2+ e.target.textContent;
    DisplayInput.textContent= `${var2}`;
})
const operater = document.querySelector(".operator");
operater.addEventListener("click", function(e){
    const oper= document.createElement("p");
    const operDisplay= document.querySelector(".up-display");
    oper.classList.add("oper");
    oper.textContent=`${e.target.textContent}`;
    var1=var2;
    var2="";
    operator= oper.textContent.trim();
    operDisplay.appendChild(oper);
    console.log(var1, var2);
})

const run= document.querySelector("#Equal");
run.addEventListener("click", function(){
    let result =operate();
    var1="";
    var2="";
    document.querySelector(".display .output").textContent=`${result}`;
});