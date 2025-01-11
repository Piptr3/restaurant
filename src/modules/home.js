export function loadHome() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const para = document.createElement('p');

    header.textContent = 'Restaurant';
    para.textContent = 'Some text glazing the restaurant';

    content.appendChild(header);
    content.appendChild(para);
}
