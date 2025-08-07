// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];


let agregarAmigo = () => {
    let amigo = document.querySelector('#amigo').trim();
    if(amigo = ""){
        alert("El campo Nombre no puede ir vacío")
        return
    }else{
        listaAmigos.push(amigo);
    }
};

