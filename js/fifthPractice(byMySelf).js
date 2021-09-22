// СТРОГАЯ ТИПИЗАЦИЯ
'use strict';

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// ПЕРВОЕ ЗАДАНИЕ
const advsBlock = document.querySelector('.promo__adv');
const advs = advsBlock.getElementsByTagName('img');
const advsCount = advs.length;

for (let i = 0; i < advsCount; i++) {
    advs[0].remove();
}

// ВТОРОЕ ЗАДАНИЕ
const promoGenre = document.querySelector('.promo__genre');
promoGenre.textContent = 'ДРАМА';

// ТРЕТЬЕ ЗАДАНИЕ
const promoBG = document.querySelector('.promo__bg');
promoBG.style.background = 'url(../img/bg.jpg) center/cover no-repeat';

// ЧЕТВЕРТОЕ ЗАДАНИЕ
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт пилигрим против..."    
    ]
};

movieDB.movies.sort();

const interactiveItems = document.getElementsByClassName('promo__interactive-item');
const interactiveItemCount = interactiveItems.length;

for (let i = 0; i < interactiveItemCount; i++) {
    interactiveItems[i].textContent = movieDB.movies[i];
}

// ПЯТОЕ ЗАДАНИЕ

for (let i = 0; i < interactiveItemCount; i++) {
    interactiveItems[i].prepend(`${i + 1}. `);
}


