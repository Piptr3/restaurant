export function loadMenu() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const para = document.createElement('p');

    header.textContent = 'Menu';
    para.textContent = 'Some text glazing the menu';

    content.appendChild(header);
    content.appendChild(para);
}
