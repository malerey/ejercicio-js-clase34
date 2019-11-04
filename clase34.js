let nombreTienda = "Happy Seeds";
let producto1 = "suculentas";
let producto2 = "cactus";
let precioProd1 = 20;
let precioProd2 = 25;
let codigoDescuento = "adalovelace";
let descuento = 0.15;


const cliente = prompt(`Buen dia! Bienvenid@ a nuestro vivero ${nombreTienda}! 💐🌱🌳

Por favor, ingrese su nombre:`);


alert(`${cliente}, contamos con los siguientes productos en promocion: 

1. 🌿 suculentas
2. 🌵 cactus`);


const compraProd1 = prompt(`Desea adquirir nuestra 🌿 suculenta?`);

const producto1Cant = compraProd1 == "si" && prompt(`Cuantas unidades desea llevar?`) || 0;


const compraProd2 = prompt(`Desea adquirir nuestro 🌵 cactus?`);

const producto2Cant = compraProd2 == "si" && prompt(`Cuantas unidades desea llevar?`) || 0;


const total = (producto1Cant * precioProd1) + (producto2Cant * precioProd2);

// muy buena idea este alert! 
total == 0 && alert("No ha realizado ninguna compra");


alert(`${cliente}, el detalle de su compra es el siguiente 🛒:

SUBTOTAL

1. 🌿 suculentas = ${producto1Cant} x $ ${precioProd1}
2. 🌵 cactus = ${producto2Cant} x $ ${precioProd2}

TOTAL

total a abonar: $ ${total}`);



const tarjCred = total != 0 && prompt(`💳 Desea abonar con tarjeta de credito?`);

const cuotas = tarjCred == "si" && prompt(`Cantidad de cuotas:`) || 0;

const valorCuota = total / cuotas;

// esta condicion no funciona asi
// valorCuota == Number nunca va a ser verdadero
// en todo caso deberia ser 
// typeof valorCuota == "number" 
// En este caso, siempre evalua a "false"
// No tiene consecuencias en el codigo porque no estamos haciendo nada con el valor
// de esta operacion: js solo ve un "false" en el codigo y listo
// si lo que queremos es chequear si valorCuota es un numero, y si no lo es, 
// asignarle el valor 0, deberia ser una asignacion, asi:
// valorCuota = typeof(valorCuota) == "number" || 0

valorCuota == Number || 0;

const cuotaConDesc = (total - (total * descuento)) / cuotas;

// misma observacion que antes 
cuotaConDesc == Number || 0;


alert(`${cliente}, el detalle final de su compra es el siguiente 🛒:

SUBTOTAL

1. 🌿 suculentas = ${producto1Cant} x $ ${precioProd1}
2. 🌵 cactus = ${producto2Cant} x $ ${precioProd2}

TOTAL

total a abonar: $ ${total}

- cantidad de cuotas = ${cuotas}
- valor de cada cuota = $ ${valorCuota}`);


const codigo = prompt(`cuenta con un codigo de descuento?`);

const codigoIngresado = codigo == "si" && prompt(`Por favor, ingrese el codigo`);

// esto no funciona, porque si el codigo es distinto a adalovelace, lo que se retorna
// es un string "codigo incorrecto" y no el alerta "codigo incorrecto"
// codigoIngresado == "adalovelace" && alert(`Codigo aceptado`) || alert(`Codigo incorrecto`);
codigoIngresado == "adalovelace" && alert(`Codigo aceptado`) || `Codigo incorrecto`;


// este alerta se va a mostrar aunque el codigo ingresado sea incorrecto
// deberiamos mostrar solo el subtotal si el descuento es aceptado, por ejemplo 
// haciendo la siguiente variable
// codigoAceptado = codigoIngresado == "adalovelace" || false
// despues en el alert, solo hacemos el descuento si codigoAceptado == true
alert(`${cliente}, el detalle final de su compra es el siguiente 🛒:

SUBTOTAL

1. 🌿 suculentas = ${producto1Cant} x $ ${precioProd1}
2. 🌵 cactus = ${producto2Cant} x $ ${precioProd2}

TOTAL

total a abonar: $ ${total}
su descuento del 15% es: $ ${total * descuento}
subtotal: $ ${total - (total * descuento)}

- cantidad de cuotas = ${cuotas}
- valor de cada cuota = $ ${cuotaConDesc}`);

alert(`${cliente}, muchas gracias por su compra 🛍️, que tenga buen dia!`)
