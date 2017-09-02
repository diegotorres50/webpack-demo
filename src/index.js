import _ from 'lodash'; // Lodash es una libreria de filtrado de objetos
import printMe from './print.js';
import './styles.css';

// Este archivo hace de entry point para webpack

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

// Hot Module Replacement
let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

// Si un modulo cambia (osea un archivo o dependencia) se aceptara el cambio
// When a change inside print.js is detected we tell webpack to accept the updated module.
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}