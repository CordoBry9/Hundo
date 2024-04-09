// collect user input, 
// entry point of app 
function getValues() {

    //get the <input> element for startNumber and grab its value
    // let startInputElement = document.getElementById('startNumber');
    let startNumber = document.getElementById('startNumber').value;
    //do the same thing for endNumber

    let endNumber = document.getElementById('endNumber').value;

    startNumber = Number(startNumber);
    endNumber = Number(endNumber);

    let generatedNumbers = generateValues(startNumber, endNumber);

    displayValues(generatedNumbers);


}
//generate a list of numbers between those two values

function generateValues(start, end) {

    let numbers = [];

    for (let i = start ; i <= end ; i = i + 1){
        numbers.push(i);
    }


    return numbers;
}

//display them in my results table.

function displayValues(numberArray) { 
    //numberArray = [0,1,2 etc]

    let tableHtml = '';
    
    for(let index = 0; index < numberArray.length; index + 1); {

        let number = numberArray[index];

        tableHtml = tableHtml + '<tr><td>' + number + '</td></tr>';
    }

    let tbody = document.getElementById('results')

}

