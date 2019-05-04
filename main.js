// operator buttons
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");



// clear button
var clear = document.getElementById("clear");
// clear click listener
clear.addEventListener('click', function() {
    clearClickUpdate();
});


// plus or minus button
var plusOrMinus = document.getElementById("plusOrMinus");
// plus or minus click listener
plusOrMinus.addEventListener('click', function() {
    plusOrMinusClickUpdate();
});


// number buttons
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

// click listeners for number buttons
zero.addEventListener('click', function() {
    numberClickUpdate(zero.innerText);
});
one.addEventListener('click', function() {
    numberClickUpdate(one.innerText);
});
two.addEventListener('click', function() {
    numberClickUpdate(two.innerText);
});
three.addEventListener('click', function() {
    numberClickUpdate(three.innerText);
});
four.addEventListener('click', function() {
    numberClickUpdate(four.innerText);
});
five.addEventListener('click', function() {
    numberClickUpdate(five.innerText);
});
six.addEventListener('click', function() {
    numberClickUpdate(six.innerText);
});
seven.addEventListener('click', function() {
    numberClickUpdate(seven.innerText);
});
eight.addEventListener('click', function() {
    numberClickUpdate(eight.innerText);
});
nine.addEventListener('click', function() {
    numberClickUpdate(nine.innerText);
});

// dot button
var dot = document.getElementById("dot");

// dot click listener
dot.addEventListener('click', function() {
    dotClickUpdate();
});

// input display element
var displayValElement = document.getElementById("calc-inputt");
// variable that has the value of the input display
var displayVal = '';
// operator


// update function for whenever a number button is clicked
function numberClickUpdate(num) {
    // do not append num to display input if the value of display input is empty and num is 0
    if(!(displayValElement.value == '' && num == 0)){
        displayVal += num;
        displayValElement.value = displayVal;
    }   
}

// function to handle dot button clicks
function dotClickUpdate() {
    // do not append num to display input if the value of display input is empty and num is 0
    if(!displayValElement.value.includes('.')){
        displayVal += '.';
        displayValElement.value = displayVal;
    }   
}

// function to handle clear button clicks
function clearClickUpdate() {
    displayVal = '';
    displayValElement.value = displayVal;
}

// function to handle plus or minus button clicks
function plusOrMinusClickUpdate() {
    // if displayVal is not empty
    if (displayVal != '') {
        // if displayVal is negative, then remove -
        if (displayVal.includes('-')){
            displayVal = displayVal.replace('-', '');
        // otherwise, insert - in front of the displayVal
        } else {
            displayVal = '-' + displayVal
        }
        displayValElement.value = displayVal;
    }
}
