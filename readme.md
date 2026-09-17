# Aplicación de Consola JavaScript

## Módulo 3: Fundamentos de programación en JavaScript

## Descripción

Este proyecto consiste en una aplicación de consola desarrollada en JavaScript.

El objetivo principal es aplicar los conocimientos fundamentales del lenguaje mediante una aplicación que permite realizar operaciones matemáticas y trabajar con diferentes estructuras de programación.

La aplicación funciona directamente desde la consola del navegador y utiliza prompt() para recibir información del usuario.

## Funcionalidades

La aplicación permite:

- Realizar sumas.
- Realizar restas.
- Realizar multiplicaciones.
- Realizar divisiones.
- Ver el historial de operaciones.
- Calcular el promedio de los resultados.
- Mostrar los resultados almacenados.
- Validar los datos ingresados.
- Finalizar la aplicación mediante una opción del menú.

## Tecnologías utilizadas

- HTML5
- JavaScript
- Consola del navegador
- Visual Studio Code

## Conceptos de JavaScript utilizados

Durante el desarrollo se aplicaron los siguientes conceptos:

### Variables

Se utilizaron variables mediante let y const.

### Funciones

Se crearon funciones independientes para realizar las operaciones matemáticas:

- sumar()
- restar()
- multiplicar()
- dividir()

También se crearon funciones para mostrar y almacenar información.

### Condicionales

Se utilizaron estructuras if y else para validar los datos ingresados y evitar errores.

Por ejemplo, se controla que el usuario ingrese números válidos y que no intente dividir por cero.

### Switch

Se utilizó switch para controlar las diferentes opciones del menú principal.

### Ciclo while

Se utiliza un ciclo while para mantener el menú activo hasta que el usuario seleccione la opción de salir.

### Ciclo for

Se utiliza un ciclo for para recorrer el historial y calcular el promedio de los resultados.

### Arreglos

Se utiliza el arreglo historial para almacenar las operaciones realizadas.

### Objetos

Cada operación se almacena como un objeto con las siguientes propiedades:

- nombre
- numero1
- numero2
- resultado

### forEach()

Se utiliza para recorrer el historial de operaciones y mostrar la información en la consola.

### map()

Se utiliza para obtener los resultados de las operaciones almacenadas.

## Validaciones

La aplicación realiza validaciones para evitar errores.

Se verifica que los valores ingresados sean números mediante isNaN().

También se controla la división por cero.

## Ejecución

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir el archivo index.html en un navegador.
3. Presionar F12.
4. Seleccionar la pestaña Console.
5. La aplicación comenzará a solicitar información mediante prompt().
6. Seleccionar las opciones del menú.

## Ejemplo de funcionamiento

Al iniciar la aplicación se muestra:

======================================
APLICACIÓN DE CONSOLA JAVASCRIPT
======================================

Luego aparece el menú:

1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Ver historial
6. Calcular promedio
7. Mostrar resultados
8. Salir

El usuario selecciona una opción e ingresa los datos solicitados.

## Conclusión

El proyecto permitió aplicar los fundamentos principales de JavaScript mediante una aplicación práctica.

Se utilizaron variables, funciones, condicionales, ciclos, arreglos y objetos. También se incorporaron validaciones para evitar errores durante la ejecución.

La organización mediante funciones permite que el código sea más ordenado, fácil de leer y mantener.