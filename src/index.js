import _ from 'lodash'; // Lodash es una libreria de filtrado de objetos
import printMe from './print.js';

// Este archivo hace de entry point para webpack

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('div');

    var btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script

    // Lodash es usado aqui para concatenar
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

// Si un modulo cambia (osea un archivo o dependencia) se aceptara el cambio
// When a change inside print.js is detected we tell webpack to accept the updated module.
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}