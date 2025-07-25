// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 let amigos = []; // array para almacenar los nombes

function agregarAmigo() {
    const input = document.getElementById('amigo');   // capturamos el valor del campo de entrada
    const nombre = input.value.trim(); 

    // validación de que el array no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // actualiza el array
    amigos.push(nombre);

    // limpia el campo
    input.value = "";

    actualizarListaAmigos();
}

// mostrar la lista de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // valida que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // genera un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);

    // obtener el nombre del amigo sorteado
    const nombreSorteado = amigos[indice];

    // muestra el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}

 