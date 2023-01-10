/**
 * 
 * const password = swordfish;
 * Bedingung; Passwort wahr oder falsch
 * 
 * let versuche = 0;
 * bei 3 Versuchen, sperre von 5 min
 * 
 * 
 */

const password = 'swordfish';
let versuche = 0;

// Zeitpunkt andem die Seite geladen wurde (statisch)
const timeOfPageLoad = new Date().getTime();

// Timstamp; Aktuelle Zeit als Wert der Variable (dynamisch durch die Funktion)
const currentTime = function() { return new Date().getTime() };

const warteZeit = 10; // in Sekunden
let neuerVersuchZeitpunkt = timeOfPageLoad; // Timestamp

function checkPwd(eingabe) {
    if(eingabe == password) {
        return true;
    } else {
        return false;
    }
}

function getEingabeAndCheckPwd() {

    if(versuche <= 3 && currentTime() > neuerVersuchZeitpunkt) {

        // Feld pwd auslesen
        let feldWert = document.getElementById('pwd').value;

        if(checkPwd(feldWert) == true) {
            console.log('passwort richtig');
            // window.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            versuche = 0;
        } else {

            if(versuche == 3) {
                neuerVersuchZeitpunkt = currentTime() + (warteZeit * 1000);
                console.log(neuerVersuchZeitpunkt);
            }

            versuche++;
            console.log('passwort falsch');
            // window.location.href="https://media.tenor.com/JPGUSOJ3QxEAAAAC/monkey-frustrated.gif";
        }

    } else {
        versuche = 0;
    }
}


function doSomethingWhenTrue () {
    // sdadsdasd
}


