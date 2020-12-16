// Создаем переменную, в которую положим кнопку "menu"
let menuToggle = document.querySelector('#menu-toggle');
// создаем переменную, в которую положим "menu"
let menu = document.querySelector('.sidebar');
// Отслеживаем клик по кнопке "menu" и запускаем функцию
menuToggle.addEventListener('click', function (event) {
  // Отменяем стандартное поведение ссылки
  event.preventDefault()
  // Вешаем класс на "menu", когда кликнули по кнопке
  menu.classList.toggle('visible')
})