const refs = {
    body: document.querySelector('body'),
    switch: document.getElementById('theme-switch-toggle'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');

if (savedTheme === JSON.stringify(Theme.DARK)) {
  refs.body.classList.add(`${Theme.DARK}`);
  refs.switch.setAttribute('checked', 'true');
} else {
  refs.body.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function darkTheme() {
  refs.body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
  refs.switch.setAttribute('checked', 'true');  
  localStorage.setItem('theme', JSON.stringify(Theme.DARK));
}

function ligthTheme() {
  refs.body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
  refs.switch.removeAttribute('checked');  
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function changeTheme() {
  if (refs.switch.hasAttribute('checked')) {
    ligthTheme();
  } else darkTheme();
}

refs.switch.addEventListener('change', changeTheme);




// const refs = {
//   body: document.querySelector('body'),
//   switch: document.querySelector('.js-switch-input'),
// };


// refs.switch.addEventListener('change', setClassList);
// refs.switch.addEventListener('change', setLocalStorage);

// function setClassList(e) {
//   const check = refs.switch.checked;

//   if (check) {
//     refs.body.classList.add(Theme.DARK);
//     refs.body.classList.remove(Theme.LIGHT);
//   } else {
//     refs.body.classList.add(Theme.LIGHT);
//     refs.body.classList.remove(Theme.DARK);
//   }
// }

// function setLocalStorage(e) {
//   const check = refs.switch.checked;

//   if (check) {
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     localStorage.removeItem('theme');
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }

// const themeInLocal = localStorage.getItem('theme');

// if (themeInLocal === Theme.DARK) {
//     refs.body.classList.add(Theme.DARK);
//     refs.switch.checked = true;
// }












// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// const bodyRef = document.querySelector('body');
// const switchRef = document.querySelector('theme-switch-toggle');

// switchRef.addEventListener('change', toggleBox);


// defaultTheme();

// function toggleBox() {
//   if (switchRef.checked) {
//     toggleBoxOn();
//   } else {
//     toggleBoxOff();
//   }
// }

// function toggleBoxOff() {
//   document.body.classList.replace(Theme.DARK, Theme.LIGHT);
//   localStorage.setItem('theme', 'light-theme');
// }

// function toggleBoxOn() {
//   document.body.classList.replace(Theme.LIGHT, Theme.DARK);
//   localStorage.setItem('theme', 'dark-theme');
// }



