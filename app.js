// =====================================================
// PROYECTO: APLICACIÓN DE CONSOLA JAVASCRIPT
// MÓDULO 3: FUNDAMENTOS DE PROGRAMACIÓN EN JAVASCRIPT
// =====================================================


// -----------------------------------------------------
// ARREGLO PRINCIPAL
// Guarda las operaciones realizadas por el usuario.
// -----------------------------------------------------

const historial = [];


// -----------------------------------------------------
// ELEMENTOS DEL HTML
// -----------------------------------------------------

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

const resultadoHTML = document.getElementById("resultado");
const contadorHTML = document.getElementById("contador");
const promedioHTML = document.getElementById("promedio");

const listaHistorial = document.getElementById("listaHistorial");
const mensajeHTML = document.getElementById("mensaje");

const botonesOperacion = document.querySelectorAll(".btn[data-operacion]");
const btnLimpiar = document.getElementById("btnLimpiar");


// -----------------------------------------------------
// FUNCIONES MATEMÁTICAS
// -----------------------------------------------------

function sumar(numero1, numero2) {
    return numero1 + numero2;
}


function restar(numero1, numero2) {
    return numero1 - numero2;
}


function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}


function dividir(numero1, numero2) {

    if (numero2 === 0) {
        return null;
    }

    return numero1 / numero2;
}


// -----------------------------------------------------
// FUNCIÓN PARA MOSTRAR MENSAJES
// -----------------------------------------------------

function mostrarMensaje(texto, tipo) {

    mensajeHTML.textContent = texto;
    mensajeHTML.className = "mensaje " + tipo;

}


// -----------------------------------------------------
// FUNCIÓN PARA GUARDAR OPERACIÓN
// Utiliza un objeto dentro de un arreglo.
// -----------------------------------------------------

function guardarOperacion(nombre, numero1, numero2, resultado) {

    const operacion = {
        nombre: nombre,
        numero1: numero1,
        numero2: numero2,
        resultado: resultado
    };

    historial.push(operacion);
}


// -----------------------------------------------------
// FUNCIÓN PARA REALIZAR UNA OPERACIÓN
// Utiliza switch para seleccionar la operación.
// -----------------------------------------------------

function realizarOperacion(tipo) {

    const valor1 = Number(numero1.value);
    const valor2 = Number(numero2.value);


    // -------------------------------------------------
    // VALIDACIÓN DE LOS DATOS
    // -------------------------------------------------

    if (
        numero1.value.trim() === "" ||
        numero2.value.trim() === ""
    ) {

        mostrarMensaje(
            "Debe ingresar los dos números.",
            "error"
        );

        return;
    }


    if (isNaN(valor1) || isNaN(valor2)) {

        mostrarMensaje(
            "Los valores ingresados deben ser números.",
            "error"
        );

        return;
    }


    let resultado;
    let nombreOperacion;


    // -------------------------------------------------
    // SWITCH
    // -------------------------------------------------

    switch (tipo) {

        case "sumar":

            resultado = sumar(valor1, valor2);
            nombreOperacion = "Suma";

            break;


        case "restar":

            resultado = restar(valor1, valor2);
            nombreOperacion = "Resta";

            break;


        case "multiplicar":

            resultado = multiplicar(valor1, valor2);
            nombreOperacion = "Multiplicación";

            break;


        case "dividir":

            if (valor2 === 0) {

                mostrarMensaje(
                    "No es posible dividir por cero.",
                    "error"
                );

                return;
            }

            resultado = dividir(valor1, valor2);
            nombreOperacion = "División";

            break;


        default:

            mostrarMensaje(
                "La operación seleccionada no es válida.",
                "error"
            );

            return;
    }


    // -------------------------------------------------
    // MOSTRAR RESULTADO
    // -------------------------------------------------

    resultadoHTML.textContent = resultado;


    // -------------------------------------------------
    // GUARDAR OPERACIÓN
    // -------------------------------------------------

    guardarOperacion(
        nombreOperacion,
        valor1,
        valor2,
        resultado
    );


    // -------------------------------------------------
    // ACTUALIZAR LA INFORMACIÓN
    // -------------------------------------------------

    actualizarHistorial();
    actualizarEstadisticas();


    mostrarMensaje(
        "Operación realizada correctamente.",
        "exito"
    );


    // Mostrar también información en la consola
    console.log(
        nombreOperacion +
        ": " +
        valor1 +
        " y " +
        valor2 +
        " = " +
        resultado
    );
}


// -----------------------------------------------------
// FUNCIÓN PARA ACTUALIZAR EL HISTORIAL
// Utiliza forEach().
// -----------------------------------------------------

function actualizarHistorial() {

    if (historial.length === 0) {

        listaHistorial.innerHTML = `
            <div class="sin-resultados">
                <span>📊</span>
                <p>Aún no hay operaciones realizadas.</p>
            </div>
        `;

        return;
    }


    listaHistorial.innerHTML = "";


    historial.forEach(function(operacion) {

        const elemento = document.createElement("div");

        elemento.classList.add("operacion");


        elemento.innerHTML = `
            <div class="operacion-info">
                <strong>${operacion.nombre}</strong>
                <span>
                    ${operacion.numero1} y ${operacion.numero2}
                </span>
            </div>

            <div class="operacion-resultado">
                = ${operacion.resultado}
            </div>
        `;


        listaHistorial.appendChild(elemento);

    });
}


// -----------------------------------------------------
// FUNCIÓN PARA ACTUALIZAR LAS ESTADÍSTICAS
// Utiliza map() y for.
// -----------------------------------------------------

function actualizarEstadisticas() {

    contadorHTML.textContent = historial.length;


    if (historial.length === 0) {

        promedioHTML.textContent = "0";

        return;
    }


    // map() obtiene solamente los resultados
    const resultados = historial.map(function(operacion) {

        return operacion.resultado;

    });


    // for calcula la suma de los resultados
    let total = 0;


    for (let i = 0; i < resultados.length; i++) {

        total = total + resultados[i];

    }


    const promedio = total / resultados.length;


    promedioHTML.textContent = promedio.toFixed(2);
}


// -----------------------------------------------------
// FUNCIÓN PARA LIMPIAR EL HISTORIAL
// -----------------------------------------------------

function limpiarHistorial() {

    if (historial.length === 0) {

        mostrarMensaje(
            "El historial ya está vacío.",
            "error"
        );

        return;
    }


    // while para eliminar los elementos del arreglo
    while (historial.length > 0) {

        historial.pop();

    }


    resultadoHTML.textContent = "0";

    actualizarHistorial();
    actualizarEstadisticas();


    mostrarMensaje(
        "El historial fue eliminado correctamente.",
        "exito"
    );


    console.log("Historial eliminado.");
}


// -----------------------------------------------------
// EVENTOS DE LOS BOTONES
// -----------------------------------------------------

botonesOperacion.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const operacion = boton.dataset.operacion;

        realizarOperacion(operacion);

    });

});


btnLimpiar.addEventListener("click", function() {

    limpiarHistorial();

});


// -----------------------------------------------------
// MENSAJE INICIAL EN LA CONSOLA
// -----------------------------------------------------

console.log("======================================");
console.log("   APLICACIÓN DE CONSOLA JAVASCRIPT");
console.log("======================================");
console.log("Aplicación iniciada correctamente.");
console.log("Seleccione una operación en la página.");
console.log("======================================");