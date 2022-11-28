/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// the ~ allows you to reference things in node_modules
import './styles/root.scss';
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';


/* // returns the final, public path to this file
// path is relative to this file - e.g. assets/images/logo.png
import logoPath from '../images/logo.png';

let html = `<img src="${logoPath}" alt="ACME logo">`; */
const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});