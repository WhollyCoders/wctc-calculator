var addCounter = 0;
var firstValue = 0;
var secondValue = 0;
var result = 0;
function addToOutputArea(event){

    console.log(event);
    console.log(event.type);
    console.log(event.path);
    console.log(event.srcElement.classList);
    if(outputArea.innerHTML == 0){
      var btnValue = event.target.innerHTML;
      outputArea.innerHTML = btnValue;
      console.log(btnValue);
      console.log('I was clicked with zero value!!!');
    }else{
      var btnValue = event.target.innerHTML;
      outputArea.innerHTML += btnValue;
      console.log(btnValue);
      console.log('I was clicked!!!');
    }

}

function additionOperation(){
    if(addCounter == 0){
      firstValue = parseInt(outputArea.innerHTML);
      outputArea.innerHTML = '';
      console.log('firstValue: '+firstValue);
    }
}

function evaluateExpression(){
    var secondValue = parseInt(outputArea.innerHTML);
    console.log(firstValue);
    console.log(secondValue);
    outputArea.innerHTML = '';
    firstValue = parseInt(firstValue);
    secondValue = parseInt(secondValue);
    result = addValues(firstValue, secondValue);
    console.log(result);
}

function addValues(firstValue, secondValue){
    result = firstValue + secondValue;
    outputArea.innerHTML = result;
}


var outputArea = document.getElementById('output-area');
// OPERATION BUTTONS
document.getElementById('btn-add').addEventListener('click', additionOperation);
//When the ADD button is clicked, 1) the contents of the OUTPUT AREA will
//be saved into a variable (FIRST VALUE) 2) The OUTPUT AREA will be cleared of its contents
// 3) All OPERATION BUTTONS will be disabled, 4) OUTPUT AREA will be 'listening'
// for a SECOND VALUE 5) OUTPUT AREA will receive the SECOND VALUE 6) The ENTER BUTTON (=)
// will be clicked to store the contents of the OUTPUT AREA into a SECOND variable
// 7) Result will be evaluated and displayed in the OUTPUT AREA
document.getElementById('btn-subtract').addEventListener('click', addToOutputArea);
document.getElementById('btn-multiply').addEventListener('click', addToOutputArea);
document.getElementById('btn-divide').addEventListener('click', addToOutputArea);

// SEVEN
document.getElementById('btn-seven').addEventListener('click', addToOutputArea);
// EIGHT
document.getElementById('btn-eight').addEventListener('click', addToOutputArea);
// NINE
document.getElementById('btn-nine').addEventListener('click', addToOutputArea);
// FOUR
document.getElementById('btn-four').addEventListener('click', addToOutputArea);
// FIVE
document.getElementById('btn-five').addEventListener('click', addToOutputArea);
// SIX
document.getElementById('btn-six').addEventListener('click', addToOutputArea);
// ONE
document.getElementById('btn-one').addEventListener('click', addToOutputArea);
// TWO
document.getElementById('btn-two').addEventListener('click', addToOutputArea);
// THREE
document.getElementById('btn-three').addEventListener('click', addToOutputArea);
// ZERO
document.getElementById('btn-zero').addEventListener('click', addToOutputArea);


document.getElementById('btn-enter').addEventListener('click', evaluateExpression);
document.getElementById('btn-clear').addEventListener('click', function(event){
  outputArea.innerHTML = 0;
});
