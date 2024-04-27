function verificarRango() {
    let valorIngresado = prompt("Introduce un valor entre 0 y 10:");
    let valor = parseInt(valorIngresado, 10);

    if (isNaN(valor)) {
        console.log("Por favor, introduce un número válido.");
        return;
    }

    let promesaRango = new Promise((resolve, reject) => {
        if (valor >= 0 && valor <= 10) {
            resolve(`El valor ${valor} está dentro del rango de 0 a 10.`);
        } else {
            reject(`El valor ${valor} no está dentro del rango de 0 a 10.`);
        }
    });

    // Manejo de la promesa
    promesaRango.then(console.log).catch(console.log);
}
