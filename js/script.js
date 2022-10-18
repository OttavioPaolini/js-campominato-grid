// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

/** 
 * SVOLGIMENTO
 * quando l'utente clicca sul bottone:
 *  creare 100 square
 *      creare l'elemento
*       aggiungere la classe
        inserire il numero nello span interno
        aggiungo il click listener dello square
     ----> al click colorare lo square cliccato di azurro e scrivere in log il numero
        appendo lo square alla griglia
        mostrare la griglia

.*
*/

document.getElementById("btn").addEventListener("click", startGame);

const grid = document.getElementById("grid");


function startGame () {
    grid.innerHTML = "";
    for( let i = 1; i <= 100; i ++){
        const newSquare = createBox(i);
        newSquare.addEventListener("click", handleSquareClick);
        grid.append(newSquare);
    }
}

/**
 * Description funzione che crea un elemento che rappresenta un quadrato della griglia
 * @param {number} innerNumber - numero da mostrare nel quadrato
 * @returns {object} elemento html del quadrato
 */
function createBox (innerNumber){
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `<span>${innerNumber}</span>`
    return box
}


function handleSquareClick() {
    console.log(parseInt(this.textContent));
    this.classList.add("clicked");
  }



// prendo il bottone dall'html

// const myBtn = document.getElementById("btn")
// console.log(btn);
// const maxUndred = 100;
// const grid = document.querySelector(".grid");
// console.log(grid);

// // creo la funzione del bottone per far partire il gioco

// for(let i = 0; i < maxUndred; i ++){
//     myBtn.addEventListener("click", function(){
//     const newSquare = document.createElement("div");
//     newSquare.classList.add("box");
//     grid.append(newSquare);
//     const cellNumber = i
//     })    
// }



// TEST

// FUNCTION
