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
    toggleMenu_button.classList.toggle('close-icon');
    body.classList.toggle('no-scroll');
    navigationMenu.classList.toggle('is-visible');
  });

  const options = {
    threshold: .5
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (this.window.innerWidth >= 1000 && !entry.isIntersecting &&
          entry.target.classList.contains('show-content')) {
        entry.target.classList.remove('show-content');
      }
    });
  }, options);

  for(let btn of menuContentToggler_buttons) {
    observer.observe(btn);
    btn.addEventListener('click', (event) => {
      for (let button of menuContentToggler_buttons) {
        if (button != event.target) {
          button.classList.remove('show-content');
        }
      }
      btn.classList.toggle('show-content');
    })
  }

});
