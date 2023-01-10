// let i = 1;



// if(typeof i == 'undefined') {
//     console.log('i ist leider noch nicht definiert worden.');
// }

let alter = 10;
let geschlecht = 'm';

if(alter >= 18) {
    console.log('du bist volljährig');
} else {
    console.log('du bist zu jung');
}

// https://www.w3schools.com/js/js_comparisons.asp

if(alter === 11) {
    console.log('Du bist in der Schule');
} else if (alter == 12) {
    console.log('Die Schulzeit wird anstrengend :-) ');
} else {
    console.log('nichts was mir dazu noch einfällt...');
}

// Shorthand Methode (Wenn ? dann : ansonsten)
console.log(alter == 10 ? 'stimmt' : 'stimmt nicht');



if( geschlecht == 'm' && alter == 10 ) {
    console.log('Ein Junge im Alter von 10');
}

if ( geschlecht == 'm' || alter == 10 ) {

}

if(!1234) {
    console.log('das passwort ist falsch');
}




