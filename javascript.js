/*const book  = {
    title: "El Hobbit",
    pages: "400",
    read: false,
}*/


function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let contador = 0;
const biblioteca = [];

function crearlibro() {

    contador++;

    let libro = new book(
        document.getElementById("libro_nombre").value,
        document.getElementById("libro_autor").value,
        document.getElementById("libro_paginas").value,
        document.getElementById("libro_leido").checked)

    biblioteca[contador] = libro;
    console.log(contador);
    console.log(biblioteca[contador]);

    let crear_div = document.createElement("div");
    if (libro.read == true) {
        crear_div.className = "book_readed";
    }
    else {
        crear_div.className = "book";
    }
    let crear_nombre = document.createElement("p");
    crear_nombre.innerHTML = libro.title;

    let crear_autor = document.createElement("p");
    crear_autor.innerHTML = libro.author;

    let crear_paginas = document.createElement("p");
    crear_paginas.innerHTML = libro.pages + " pages";

    crear_div.append(crear_nombre);
    crear_div.append(crear_autor);
    crear_div.append(crear_paginas);

    document.getElementById("books").appendChild(crear_div);
}