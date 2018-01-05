import { getRoot } from './modules/dom.js';
import './scss/style.scss';

const helloWorld = 'Programadores Chile!';
const nodeHelloWorld = document.createElement('div');
const textHelloWorld = document.createTextNode(helloWorld);

nodeHelloWorld.appendChild(textHelloWorld);

getRoot().appendChild(nodeHelloWorld);
