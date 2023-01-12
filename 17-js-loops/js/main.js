let artikel = [];

// Wenn ein artikelCookie gesetzt ist
if( typeof cookie.get('artikelCookie') != 'undefined' ) {
    // lies die Werte darin
    let cookieValue = cookie.get('artikelCookie');
    // mach daraus ein Array (trenne anhang der Beistriche die im String vorkommen)
    let artikelArray = cookieValue.split(',');

    console.log(artikelArray);

    artikel = artikelArray;
}


// For-Schleife mit Start-Variable + Bedingung + Variablen-Schritt-Zähler
for(let i = 0; i < 4; i++ ) {
    // console.log( 'Nr. ' + (i + 1) );
    console.log(`Nr. ${i+1}`);
    // console.log(artikel[i]);
}


function createHtml() {

    // Leeren String erzeugen
    let html = '';
    // Gewünschtes Ergebnis: html = html + '<li>' + 'Banane' + '</li>';

    // HTML dynamisch erzeugen
    artikel.forEach(element => {
        // console.log(element);
        html = html + '<li><input type="checkbox" value="gekauft">' + element + '</li>';
    });

    // HTML in die <ul id="ek_list">...</ul> einfügen
    document.getElementById('ek_list').innerHTML = html;

}
// beim Laden gleich einmal ausführen
createHtml();






document.getElementById('new_element').addEventListener('keydown', function(event) {

    if(event.key == 'Enter' && document.getElementById('new_element').value != '') {
        // console.log('füge das neue Element dazu und leere das Feld');

        console.log(document.getElementById('new_element').value);

        artikel.push(document.getElementById('new_element').value);
        
        document.getElementById('new_element').value = '';
        
        createHtml();

        // cookie.set('artikelCookie', artikel, 2);

    }

});


