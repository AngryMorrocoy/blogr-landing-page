document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu_button = document.getElementById('toggle-nav-menu-btn');
  const navigationMenu = document.getElementById('nav-menu');
  const menuContentToggler_buttons = document.getElementsByClassName('nav-menu-item_btn');
  const body = document.getElementsByTagName('body')[0];

  if (navigationMenu.classList.contains('is-visible')) {
    toggleMenu_button.classList.toggle('close-icon')
    body.classList.toggle('no-scroll')
  };

  toggleMenu_button.addEventListener('click', (event) => {
    navigationMenu.classList.toggle('is-visible');
    toggleMenu_button.classList.toggle('close-icon')
    body.classList.toggle('no-scroll')
  });


  for(let btn of menuContentToggler_buttons) {
    btn.addEventListener('click', (event) => {
      btn.classList.toggle('show-content');
    })
  }

});
