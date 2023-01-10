console.log('Hey!');
let temp = 0;

const display = document.getElementById('display');
display.innerText = temp + '°';

let interval = false;

function temperaturHoch() {
    
    if(temp < 30) {
        temp++;
        console.log(temp);
        display.innerText = temp + '°';

        checkTempAndSetColor();
        setTacho();
    }
}

function temperaturRunter() {

    if(temp > 0) {
        temp--;
        console.log(temp);
        display.innerText = temp + '°';

        checkTempAndSetColor();
        setTacho();
    }
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


function setTacho() {
    document.getElementById('pfeil').style.transform = 'rotate(' + ((180 / 30 * temp) - 180) + 'deg)';
}

