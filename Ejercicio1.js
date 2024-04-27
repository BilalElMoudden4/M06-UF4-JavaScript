function esDivisiblePorDos() {
    let numero = parseInt(prompt("Introduce un número para comprobar si es divisible por dos:"), 10);
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve(`El número ${numero} es divisible por dos.`);
        } else {
            reject(`El número ${numero} no es divisible por dos.`);
        }
    }).then(console.log).catch(console.log);
}
