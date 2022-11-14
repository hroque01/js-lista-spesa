const listaSpesa = [ "cipolla" , "latte", "carne", "nutella"];

const miaLista = document.querySelector('.miaLista');

console.log(miaLista)

for ( let i = 0; i < listaSpesa.length; i++ ) {

    let elementi = listaSpesa[i];

    // creo l'elemento li
    let liElement = document.createElement("li");
    liElement.innerHTML = elementi;

    //aggiungiamo i li all'ul
    miaLista.append(liElement);

}