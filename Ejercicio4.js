function divideix() {
    let num1 = parseFloat(prompt("Introduce el numerador:"));
    let num2 = parseFloat(prompt("Introduce el denominador:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, introduce números válidos.");
        return;
    }

    new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("No se puede dividir por cero.");
        } else {
            resolve(`El resultado de dividir ${num1} entre ${num2} es ${num1 / num2}.`);
        }
    }).then(console.log).catch(console.log);
}
