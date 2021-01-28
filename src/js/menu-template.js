import menu from '../menu.json';
import menuTemplate from '../templates/menu-items.hbs';

const markup = menuTemplate(menu);
    console.log(markup);

/* метод querySelector() возвращает первый элемент (Element)  */
const menuRef = document.querySelector('ul.js-menu');
    console.log(menuRef);

/* insertAdjacentHTML() разбирает указанный текст как HTML 
и вставляет полученный узел(nodes) в DOM дерево 
(в ul.js - menu) в указанную позицию. */
menuRef.insertAdjacentHTML('beforeend', markup);

