 // Lista de palabras
const palabras = [
   "Cordon umbilical", "Cesárea", "Parto", "Cambiar el pañal", "Calentar la mamadera",
  "Abrir el Cochecito", "Epidural", "Mecoño", "Pediatra", "Calostro", "Partera", "Oleo Calcareo", "Algodon", "chupete"
];

let disponibles = [...palabras];

// Referencias al DOM
const palabraDiv = document.getElementById("palabra");
const btnPalabra = document.getElementById("btn-palabra");
const puntosADiv = document.getElementById("puntosA");
const puntosBDiv = document.getElementById("puntosB");
const sumarA = document.getElementById("sumarA");
const sumarB = document.getElementById("sumarB");

let puntosA = 0;
let puntosB = 0;

// --- Funciones ---
btnPalabra.addEventListener("click", () => {
  if (disponibles.length === 0) {
    palabraDiv.textContent = "¡No quedan palabras!";
    btnPalabra.disabled = true;
    return;
  }

  const indice = Math.floor(Math.random() * disponibles.length);
  const palabra = disponibles.splice(indice, 1)[0];
  palabraDiv.textContent = palabra;
});

sumarA.addEventListener("click", () => {
  puntosA++;
  puntosADiv.textContent = puntosA;
});

sumarB.addEventListener("click", () => {
  puntosB++;
  puntosBDiv.textContent = puntosB;

});
