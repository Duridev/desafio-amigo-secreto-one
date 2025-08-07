// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let amigo = document.querySelector('#amigo').value;
let listaAmigos = document.querySelector('#listaAmigos');

let agregarAmigo = () => {
    if(amigo = ""){
        alert("El campo Nombre no puede ir vacío")
        return
    }else{
        arrayAmigos.push(amigo);
    }
};

let mostrarAmigos = () => {
    for(let i = 0; i < arrayAmigos.length; i++) {
        listaAmigos.innerHTML += `<li>${arrayAmigos[i]}</li>`
    };
};

mostrarAmigos();