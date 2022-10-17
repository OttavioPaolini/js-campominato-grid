// **Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// prendo il bottone dall'html

const myBtn = document.getElementById("btn")
console.log(btn);
const maxUndred = 100;
const grid = document.querySelector(".grid");
console.log(grid);

// creo la funzione del bottone per far partire il gioco

for(let i = 0; i < maxUndred; i ++){
    myBtn.addEventListener("click", function(){
    const newSquare = document.createElement("div");
    newSquare.classList.add("box");
    grid.append(newSquare);
    })    
}


