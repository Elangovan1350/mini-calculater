let num1 = Number(prompt("Number1"));
let num2 = Number( prompt("Number2")); 
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sum = document.getElementById("sum-el");


// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add(){
    let sums = num1 + num2;
    sum.innerHTML += "<br> "+ "Add ="+ sums ;
}
function subtract(){
    let sums = num1 - num2;
    sum.innerHTML += "<br> "+ "subtract ="+ sums ;
}
function divide(){
    let sums = num1 / num2;
    sum.innerHTML += "<br> "+ "divide ="+ sums ;
}
function multiply(){
    let sums = num1*num2;
    sum.innerHTML += "<br> "+ "multiply ="+ sums ;
}

