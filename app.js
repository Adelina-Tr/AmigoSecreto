// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos el array para almacenar los nombres
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminamos espacios innecesarios

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array y limpiar el campo de texto
    amigos.push(nombre);
    input.value = "";

    // Actualizar la lista visual
    actualizarLista();
}

// Función para actualizar la lista en el DOM
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista existente

    // Iteramos sobre el array para mostrar cada amigo
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo; // Añadimos el nombre
        lista.appendChild(li); // Lo agregamos a la lista
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que la lista no esté vacía
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el DOM
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

