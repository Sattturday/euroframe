// маска для ввода номера телефона
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function (e) {
    let value = this.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    if (value.length > 10) value = value.slice(0, 10); // Ограничиваем до 10 цифр

    // Форматируем номер
    let formattedValue = '';
    if (value.length > 0) {
      formattedValue += '(' + value.substring(0, 3);
    }
    if (value.length >= 3) {
      formattedValue += ') ' + value.substring(3, 6);
    }
    if (value.length >= 6) {
      formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length >= 8) {
      formattedValue += '-' + value.substring(8, 10);
    }
    this.value = formattedValue;
  });
}

// burger menu
const burgerData = {
  // overlayClass: 'background',
  burgerClass: 'sat-burger',
  bgClass: 'sat-p-bg',
  // menuHeaderClass: 'nav-menu',
  // menuLinkClass: 'link',
};

const burger = document.querySelector(`.${burgerData.burgerClass}`);
const bg = document.querySelector(`.${burgerData.bgClass}`);
// const menuHeader = document.querySelector(`.${menuHeaderClass}`);
// const menuLinks = document.querySelectorAll(`.${menuLinkClass}`);
const burgerActiveClass = `${burgerData.burgerClass}_active`;
const bgActiveClass = `${burgerData.bgClass}_active`;
// const menuHeaderActiveClass = `${menuHeaderClass}_active`;

const toggleVisibility = () => {
  burger.classList.toggle(burgerActiveClass);
  bg.classList.toggle(bgActiveClass);
  // menuHeader.classList.toggle(menuHeaderActiveClass);
  document.body.classList.toggle('_lock');
};

const handleClickLink = () => {
  if (burger.classList.contains(burgerActiveClass)) {
    toggleVisibility();
  }
};

burger.addEventListener('click', toggleVisibility);
// const setEventListeners = () => {
// if (menuLinks.length > 0) {
//   menuLinks.forEach(link => {
//     link.addEventListener('click', handleClickLink);
//   });
// }
// menuHeader.addEventListener('click', evt => {
//   if (evt.target.classList.contains(menuHeaderActiveClass)) {
//     toggleVisibility();
//   }
// });
// };

// eventListeners
// burgerMenu.setEventListeners();
