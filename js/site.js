// collect user input, 
// entry point of app 
//first thing in call stack is get values
function getValues() {

    //get the <input> element for startNumber and grab its value
    // let startInputElement = document.getElementById('startNumber');
    let startNumber = document.getElementById('startNumber').value;
    //do the same thing for endNumber

    let endNumber = document.getElementById('endNumber').value;

    startNumber = Number(startNumber);
    endNumber = Number(endNumber);

    if ( isNaN(startNumber) || isNaN(endNumber)) { //NaN = Not a Number, isNaN checks if the value stored is not a number
        //display an error message
        Swal.fire({
        icon: 'error', 
        title: 'Oops!', 
        text: 'Please enter valid numbers for Hundo to use.', 
        backdrop: false,
        });
    }

    else if ((startNumber > endNumber) || (startNumber < 0) || (endNumber > 100) ) {
       
        Swal.fire({
            icon: 'error', 
            title: 'Oops!', 
            text: 'Please make sure start number is less than end number, and that they are between 0-100.', 
            backdrop: false,
        });
    }
 
    else {
        //display numbers
        let generatedNumbers = generateValues(startNumber, endNumber);
        displayValues(generatedNumbers);
    }
 


}
//generate a list of numbers between those two values

function generateValues(start, end) {

    let numbers = [];

    for (let i = start ; i <= end ; i++){
        numbers.push(i);
    }


    return numbers;
}

//display them in my results table.

function displayValues(numberArray) { 
    //numberArray = [0,1,2 etc]

    let tableHtml = '';
    
    for(let index = 0; index < numberArray.length; index += 1) { //incrementing for loop

        let number = numberArray[index];

        let className='';

        if (number % 2 == 0) { // % = modulus operator
            // use the class even in the html
            //boolean logic (true or false)
            className = 'even';
        } else {
            // use the odd class in the html
            className = 'odd';
        }

        // tableHtml = tableHtml + '<tr><td>' + number + '</td></tr>';
        tableHtml += `<tr><td class="${className}">${number}</td></tr>`;//string template literal
        //${} is string interpolation, in JS neend ${} and back ticks around ur result
    }

    let tbody = document.getElementById('results');
    tbody.innerHTML = tableHtml;

}

