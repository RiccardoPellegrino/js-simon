// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 3 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,  tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const NUMBER_NUM = 5;
const numeriDaIndovinare = [];
const numeriUtente = [];
const inputHtml = document.getElementsByTagName('input');
const btn = document.querySelector('button');
const btnReset = document.getElementById('reset')
const arrayIndovinati = [];
const alertHtml = document.querySelector('.alert');
const scrittaHtml = document.getElementById('scritta');

function play() {
    let time = 3;
    const min = 1;
    const max = 50;
    let counter = 0;
    while (numeriDaIndovinare.length < NUMBER_NUM) {
        const num = getRndInteger(min, max);
        if (!numeriDaIndovinare.includes(num)) {
            numeriDaIndovinare.push(num);
            inputHtml[counter].value = num;
            counter++;
        }
    }
    const timer = setTimeout(resetAll, time * 1000);
}
play();

btnReset.addEventListener("click", function () {
    window.location.reload();
});

function resetAll() {
    for (let i = 0; i < inputHtml.length; i++) {
        inputHtml[i].value = '';
        scrittaHtml.innerHTML = 'Inserisci i numeri che ricordi'
        inputHtml[i].toggleAttribute('readonly');
    }
    btn.classList.toggle('d-none');
    btnReset.classList.toggle('d-none');
}

btn.addEventListener('click', click);

function click() {
    for (let i = 0; i < inputHtml.length; i++) {
        const userNum = parseInt(inputHtml[i].value);
        numeriUtente.push(userNum);
    }
    console.log(numeriUtente);
    document.getElementById("verifica").disabled = true;

}
btn.addEventListener('click', risultato);

function risultato() {
    for (let i = 0; i < inputHtml.length; i++) {
        const userNum = parseInt(inputHtml[i].value);
        numeriUtente.push(userNum);
    }

    for (let i = 0; i < numeriUtente.length; i++) {
        if (numeriDaIndovinare.includes(numeriUtente[i])) {
            if (!arrayIndovinati.includes(numeriUtente[i])) {
                arrayIndovinati.push(numeriUtente[i]);
            }

        }
    }
    alertHtml.classList.remove('d-none');
    if (numeriDaIndovinare.length === arrayIndovinati.length) {
        alertHtml.innerHTML = 'Bravo hai indovinato tutti i numeri';
    } else {
        alertHtml.innerHTML = `Hai indovinato ${arrayIndovinati.length} numeri ! I seguenti: ${arrayIndovinati}`
    }
}