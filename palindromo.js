
const cadena = prompt("Ingresa una cadena para verificar si es un palíndromo:");


const cadenaSinEspacios = cadena.replace(/\s/g, '').toLowerCase();


let cadenaInvertida = '';
for (let i = cadenaSinEspacios.length - 1; i >= 0; i--) {
  cadenaInvertida += cadenaSinEspacios[i];
}


if (cadenaSinEspacios === cadenaInvertida) {
  console.log(`"${cadena}" es un palíndromo.`);
} else {
  console.log(`"${cadena}" no es un palíndromo.`);
}
