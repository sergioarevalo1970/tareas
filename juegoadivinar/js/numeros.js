
let numeroSecreto = Math.floor(Math.random() * 9) + 1;
let intentos = 0;

function adivinarNumero() {
    let numeroUsuario = parseInt(document.getElementById('numero').value);
    intentos++;
    let mensaje = "";
    
    if (numeroUsuario < numeroSecreto) {
        mensaje = "El número es mayor. Intenta de nuevo.";
    } else if (numeroUsuario > numeroSecreto) {
        mensaje = "El número es menor. Intenta de nuevo.";
    } else {
        mensaje = `¡Felicidades! Adivinaste el número en ${intentos} intentos. El número secreto es: ${numeroSecreto}, Tú número es: ${numeroUsuario}`;
    }
    
    document.getElementById('resultado').textContent = mensaje;
}