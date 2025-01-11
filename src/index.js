import "./styles.css";
import {loadHome} from './modules/home';
import {loadMenu} from './modules/menu';
import {loadAbout} from './modules/about';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');


homeButton.addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    loadHome();
});

menuButton.addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    loadMenu();
});

aboutButton.addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    loadAbout();
});

document.addEventListener('DOMContentLoaded', () => {
    loadHome();
});