// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrayAmigos = [];
let listaAmigos = document.querySelector('#listaAmigos');
let resultado = document.querySelector('#resultado');


let mostrarAmigos = () => {
    listaAmigos.innerHTML = "";
    for(let i = 0; i < arrayAmigos.length; i++) {
        listaAmigos.innerHTML += `<li>${arrayAmigos[i]}</li>`
    };
};

let agregarAmigo = () => {
    let amigo = document.querySelector('#amigo').value;
    if(amigo.trim() == ""){
        alert("El campo Nombre no puede ir vacío")
    }else{
        arrayAmigos.push(amigo.trim());
        document.querySelector('#amigo').value = ""
        console.log(arrayAmigos);
        mostrarAmigos();
        resultado.innerHTML = ""
    }
};


let indiceAlAzar = () => {
    let indiceAleatorio = Math.floor(Math.random() * (arrayAmigos.length))
    return indiceAleatorio
}

let sortearAmigo = () => {
    if(arrayAmigos.length <= 1) {
        alert("Ingresa más nombres para comenzar el sorteo.")
    } else {
        indiceAlAzar();
        let ganador = arrayAmigos[indiceAlAzar()];
        resultado.innerHTML = ganador
        arrayAmigos = [];
        listaAmigos.innerHTML = "";
    }
}