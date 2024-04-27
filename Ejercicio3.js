function esVocal() {
    let arr = ["a", "e", "i", "o", "u"];
    let letraIngresada = prompt("Introduce una letra para verificar si es una vocal:");
    let letra = letraIngresada.toLowerCase(); // Convertimos a minúscula para la comparación

    if (!letra || letra.length !== 1 || !isNaN(letra)) {
        console.log("Por favor, introduce una sola letra válida.");
        return;
    }

    new Promise((resolve, reject) => {
        if (arr.includes(letra)) {
            resolve(`La letra '${letra}' es una vocal.`);
        } else {
            reject(`La letra '${letra}' no es una vocal.`);
        }
    }).then(console.log).catch(console.log);
}
