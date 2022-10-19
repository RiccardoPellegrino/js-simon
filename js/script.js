// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 3 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,  tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// <== aggiungi un tag nell html per visualizzare i numeri.

// Funzione random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// creo array numeri per accogliere i numeri random
let numeri = [];
//creo variabile per stabilire quanti numeri randomici (5 numeri casuali).
let numeriRandom = 5;
let numeriGenerati = document.getElementById('numeri');


while (numeri.length < numeriRandom) {
    let numeroGenerato = getRndInteger(1, 50);
    console.log(numeroGenerato);
    if (!numeri.includes(numeroGenerato)) {
        numeri.push(numeroGenerato);
    }
}
numeriGenerati.innerHTML = numeri;

const timer = 3;
const millisecondi = 1000;
const tempo = setTimeout(tempoDisponibile, timer * millisecondi);

function tempoDisponibile() {
    // creo h1
    const h1Html = document.createElement('h1');
    //inserisco il tessto nell h1
    h1Html.innerText = 'Tempo finito!';
    //prendo il div app dell html 
    const app = document.getElementById('app');
    //appendo l h1 al div dell html
    app.appendChild(h1Html);

    clearTimeout(tempo);
    nascondiNumeri();
    inserisciInput();
    inserisciBottone()
}


function nascondiNumeri() {
    document.getElementById('numeri').style.visibility = "hidden";
}

function inserisciInput() {
    const x = document.createElement("INPUT");
    x.setAttribute("type", "number");
    x.className=('mt-5');
    const app = document.getElementById('app');
    //appendo l h1 al div dell html
    app.appendChild(x);
}
function inserisciBottone() {
    const x = document.createElement("BUTTON");
    x.className=('mt-5');
    const t = document.createTextNode("Click me");
    x.appendChild(t);
    const app = document.getElementById('app');
    //appendo l h1 al div dell html
    app.appendChild(x);
}


















//uso un ciclo while per generare i 5 numeri e popolare l array.
//(numeri.lenght < numeriRandom)
//metto in una variabile = numRandom (genero numero random)
//if (!numeri.includes(numRandom))
//pusho nell array numeri[]
//prendo il div dall Html con document.getElementById e lo assegno ad una variabile.
//ciclo for per stampare nel mio div uno ad uno.

//setTimeout(function,3000)
//function nascondere i numeri dallo schermo
//chiedere i numeri all utente (input text) e schiaccia un bottone
//se numero inserito incluso nel vecchio array
// numeri inseriti 
