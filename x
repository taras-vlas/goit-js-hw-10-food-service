const inputRef = document.querySelector("#validation-input");// визов селектора йде по -"#validation-input", по id # - значення елем.
      // const validLength = Number(inputRef.dataset.length);
const validLength = Number(inputRef.getAttribute("data-length"));

inputRef.oninput = function (event) {
  inputRef.classList.remove('invalid');
  inputRef.classList.remove('valid');

  if (this.value.length === validLength) {
        inputRef.classList.add('valid');
    
 } else if (this.value.length > 0  && this.value.length !== validLength) {
          inputRef.classList.add('invalid');
  }
}



// function changeTheme() {
//  if (refs.switch.hasAttribute('checked')) {
//    ligthTheme();
//  } else darkTheme();
// }
function changeTheme() {
  refs.body.classList.toggle(`${Theme.LIGHT}`); 
}




import './styles.css';

// Templating

import menu from './menu.json';

import template from './gallery-items.hbs';

const markup = template(menu);

const container = document.querySelector('.js-menu');

container.innerHTML = markup;

// Theme-adding

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const existingTheme = localStorage.getItem('Theme');
const parsedExistingTheme = JSON.parse(existingTheme);

if (existingTheme) {
  document.body.classList.add(parsedExistingTheme);
}

const refs = {
  switcher: document.querySelector('#theme-switch-toggle'),
};

if (existingTheme === JSON.stringify(Theme.DARK)) {
  refs.switcher.checked = true;
}

refs.switcher.addEventListener('change', changeTheme);

function changeTheme(event) {
  if (event.target.checked) {
    document.body.classList.remove(existingTheme);
    document.body.classList.add('dark-theme');
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    document.body.classList.remove(existingTheme);
    document.body.classList.remove('dark-theme');
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
}





