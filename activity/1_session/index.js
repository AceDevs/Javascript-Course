// Ejercicio 1

import {} from "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2
console.log('Se ejecuta primero el contenido del fichero aboutme.js');

// Ejercicio 3
// Browser: Firefox Developer Edition 
// 1. Depurador: herramienta bastante util ya que te permite detener el codigo de javascript en los breakpoints y obtener las variables que esten activas en ese momento del breakpoint.
// 2. Inspector: En diseño este nos permite jugar con los estilos, las etiquetas e ir moviendo los elementos para optimizar los estilos
// 3. Red: obtienes todos los request que existieron en la sesion en la que te encuentras, bastante util para identificar tiempos de respuesta, tamaño de cada paquete y tambien poder trackear los posibles errores en llamadas externas.

// Ejercicio 4
console.log('Programa un script que imprima todos los números del 1 al 100 que sean divisibles por 7. ');
for(var i = 1; i <= 100; i++){
    if(i%7 == 0)
    console.log(i);
}

// Ejercicio 5
// Los modulos son singleton, por lo cual solo se cargaran y ejecutaran una vez.
// Los modulos pueden importar y exportar
// Los modulos siempre se ejecutan en strict mode
// Todos los objectos son privados al menos de que sean exportados explicitamente
// Los modulos son cargados async
// los modulos se cargan usando Access-Controll-Allow-Origin
// Los modulos no envian cookies ni informacion de autenticacion por default

// Ejercicio 6

var formatter = {
    prefix : 'Hello',
    append : function(text) {
        console.log(`${this.prefix} ${text}`);
    }
};
debugger;
formatter.append('World');
Object.prototype.toLowerString = function(text){
    return text.toLowerCase();
};

console.log(formatter.toLowerString("I'm Lucas"));