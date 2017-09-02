import _ from 'lodash'; // Lodash es una libreria de filtrado de objetos
import './style.css';
import Icon from './icon.png';

// Este archivo hace de entry point para webpack

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script

    // Lodash es usado aqui para concatenar
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // Le agregamos al elemento div creado una clase css
    element.classList.add('hello');

    // Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());