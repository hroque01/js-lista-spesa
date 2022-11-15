const listaSpesa = [ "cipolla" , "latte", "carne", "nutella",];

const miaLista = document.querySelector('.miaLista');


// console.log(miaLista)


// **************PRIMA VERSIONE*******************

// for ( let i = 0; i < listaSpesa.length; i++ ) {

//     let elementi = listaSpesa[i];

//     // creo l'elemento li
//     let liElement = document.createElement("li");
//     liElement.innerHTML = elementi;

//     //aggiungiamo i li all'ul
//     miaLista.append(liElement);

// }

// **************SECONDA VERSIONE*******************
// let i
// while ( let i = 0; i < listaSpesa.length; i++ ) {

//     let elementi = listaSpesa[i];

//     // creo l'elemento li
//     let liElement = document.createElement("li");
//     liElement.innerHTML = elementi;

//     //aggiungiamo i li all'ul
//     miaLista.append(liElement);

//     i++

// }

// ****************CON INNER HTML*************************
const myButton = document.getElementById("btn");

myButton.addEventListener('click', function() {
    let aggiungi = prompt('inserisci quello che devi aggiungere');

    // per far in modo che quello che si ha scritto nel prompt venga aggiunto all'array
    listaSpesa.push(aggiungi);
    miaLista.innerHTML += `
    <li>
    <input type="checkbox" name="" id="">
    <span> ${aggiungi} </span>
    </li>
    `
    console
})



let i = 0;
while (  i < listaSpesa.length ) {

    miaLista.innerHTML += `
    <li>
    <input type="checkbox" name="" id="">
    <span> ${listaSpesa[i]} </span>
    </li>
    `

     i++ 
}