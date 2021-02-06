const refs = {
    body: document.querySelector('body'),
    switch: document.getElementById('theme-switch-toggle'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const savedTheme = localStorage.getItem('theme');
      console.log('savedTheme', savedTheme); 

if (savedTheme === JSON.stringify(Theme.DARK)) {
  refs.body.classList.add(`${Theme.DARK}`);
  refs.switch.setAttribute('checked', 'true');
} else {
  refs.body.classList.add(`${Theme.LIGHT}`);
  localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

// function darkTheme() {
//   refs.body.classList.replace(`${Theme.LIGHT}`, `${Theme.DARK}`);
//   refs.switch.setAttribute('checked', 'true');  
//   localStorage.setItem('theme', JSON.stringify(Theme.DARK));
// }

// function ligthTheme() {
//   refs.body.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`);
//   refs.switch.removeAttribute('checked');  
//   localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
// }

function changeTheme() {
  refs.body.classList.toggle(`${Theme.DARK}`); 
}

refs.switch.addEventListener('change', changeTheme);


