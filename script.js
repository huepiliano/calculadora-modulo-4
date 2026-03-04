/****************************************************
 PROYECTO: Aplicación de Consola
 Módulo 4 - Fundamentos de JavaScript
****************************************************/

console.log("=== Bienvenido a la Aplicación de Consola ===");
console.log("Abre la consola (F12) antes de que inicie la aplicación...");

// Espera 2 segundos antes de iniciar
setTimeout(iniciarAplicacion, 2000);


// ==============================
// FUNCIÓN PRINCIPAL
// ==============================

function iniciarAplicacion() {

    // ==============================
    // SALUDO INICIAL
    // ==============================

    let nombreUsuario = prompt("¿Cuál es tu nombre?");

    if (nombreUsuario === null || nombreUsuario.trim() === "") {
        nombreUsuario = "Usuario";
    }

    alert(`Bienvenido ${nombreUsuario}, disfruta la aplicación.`);
    console.log(`Usuario activo: ${nombreUsuario}`);

    // ==============================
    // VALIDACIÓN DE NÚMEROS
    // ==============================

    function solicitarNumero(mensaje) {
        let numero;
        
        while (true) {
            numero = prompt(mensaje);
            
            if (numero === null) {
                alert("Operación cancelada.");
                return null;
            }

            numero = Number(numero);

            if (!isNaN(numero)) {
                return numero;
            }

            alert("Por favor, ingrese un número válido.");
        }
    }

    // ==============================
    // FUNCIONES MATEMÁTICAS
    // ==============================

    function sumar(a, b) {
        return a + b;
    }

    function restar(a, b) {
        return a - b;
    }

    function multiplicar(a, b) {
        return a * b;
    }

    function dividir(a, b) {
        if (b === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return a / b;
    }

    // ==============================
    // MENÚ PRINCIPAL
    // ==============================

    function mostrarMenu() {
        return prompt(
            "Seleccione una operación:\n" +
            "1 - Sumar\n" +
            "2 - Restar\n" +
            "3 - Multiplicar\n" +
            "4 - Dividir\n" +
            "5 - Ver historial\n" +
            "6 - Ver números pares del historial\n" +
            "7 - Salir"
        );
    }

    // ==============================
    // HISTORIAL
    // ==============================

    let historial = [];

    const calculadora = {
        nombre: "Calculadora JS",
        version: "1.0",

        mostrarInfo: function() {
            console.log(`Aplicación: ${this.nombre} - Versión: ${this.version}`);
        },

        agregarAlHistorial: function(operacion, resultado) {
            historial.push({
                operacion: operacion,
                resultado: resultado
            });
        }
    };

    calculadora.mostrarInfo();

    // ==============================
    // CICLO PRINCIPAL
    // ==============================

    let opcion;

    while (true) {
        opcion = mostrarMenu();

        if (opcion === "7") {
            alert("Gracias por usar la aplicación.");
            break;
        }

        if (["1", "2", "3", "4"].includes(opcion)) {

            let num1 = solicitarNumero("Ingrese el primer número:");
            if (num1 === null) break;

            let num2 = solicitarNumero("Ingrese el segundo número:");
            if (num2 === null) break;

            let resultado;
            let descripcionOperacion;

            switch (opcion) {
                case "1":
                    resultado = sumar(num1, num2);
                    descripcionOperacion = `${num1} + ${num2}`;
                    break;

                case "2":
                    resultado = restar(num1, num2);
                    descripcionOperacion = `${num1} - ${num2}`;
                    break;

                case "3":
                    resultado = multiplicar(num1, num2);
                    descripcionOperacion = `${num1} * ${num2}`;
                    break;

                case "4":
                    resultado = dividir(num1, num2);
                    descripcionOperacion = `${num1} / ${num2}`;
                    break;
            }

            alert("Resultado: " + resultado);

            calculadora.agregarAlHistorial(descripcionOperacion, resultado);
        }

        else if (opcion === "5") {
            console.log("=== Historial de operaciones ===");

            if (historial.length === 0) {
                console.log("No hay operaciones registradas.");
            } else {
                historial.forEach((item, index) => {
                    console.log(`${index + 1}. ${item.operacion} = ${item.resultado}`);
                });
            }
        }

        else if (opcion === "6") {
            console.log("=== Resultados pares del historial ===");

            let resultadosPares = historial
                .filter(item =>
                    typeof item.resultado === "number" &&
                    item.resultado % 2 === 0
                )
                .map(item => item.resultado);

            if (resultadosPares.length === 0) {
                console.log("No hay resultados pares.");
            } else {
                resultadosPares.forEach(num => console.log(num));
            }
        }

        else {
            alert("Opción no válida.");
        }
    }

    console.log("Aplicación finalizada.");
}