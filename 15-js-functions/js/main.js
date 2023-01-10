console.log('Hey!');
let temp = 24;

const display = document.getElementById('display');
display.innerText = temp + '°';


function temperaturHoch() {
    // code innerhalb der Funktion
    temp++;
    console.log(temp);
    display.innerText = temp + '°';

    checkTempAndSetColor();
}

function temperaturRunter() {
    temp--;
    console.log(temp);
    display.innerText = temp + '°';

    checkTempAndSetColor();
}

function checkTempAndSetColor() {
    
    let bodyColor;

    if(temp > 18) {
        bodyColor = 'lightgreen';
    } else {
        bodyColor = 'lightblue';
    }

    document.getElementsByTagName('body')[0].style.backgroundColor = bodyColor;
}