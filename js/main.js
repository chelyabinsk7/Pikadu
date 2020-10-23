// console.log('Файл подключен')
// Создание переменной, в которой будет находиться кнопка меню
let menuToggle = document.querySelector('#menu-toggle');
// Создание переменной, в которой будет лежать меню
let menu = document.querySelector('.sidebar');
// console.log(menuToggle);

// Остлеживание клика по кнопке меню и запуск функции
menuToggle.addEventListener('click', function (event){
    // console.log('Клик по кнопке меню')

    // Отмена обычного поведения ссылки (больше никуда не ведёт)
    event.preventDefault();
    // Присвоение класса на меню при клике
    menu.classList.toggle('visible');
})