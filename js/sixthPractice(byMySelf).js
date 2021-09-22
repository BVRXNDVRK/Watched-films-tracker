// СТРОГАЯ ТИПИЗАЦИЯ
'use strict';

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};

const adv = document.querySelectorAll('.promo__adv img'),
  poster = document.querySelector('.promo__bg'),
  genre = poster.querySelector('.promo__genre'),
  movieList = document.querySelector('.promo__interactive-list');


adv.forEach(item => {
  item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

//ПЕРВОЕ ЗАДАНИЕ
const submitBtn = document.querySelector('button');
const inputField = document.querySelector('.adding__input');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // ВТОРОЕ ЗАДАНИЕ
  if (inputField.value.length > 21) {
    let sliceInput = inputField.value.slice(0, 20);
    sliceInput += '...';
    movieDB.movies.push(sliceInput);
  } else {
    movieDB.movies.push(inputField.value);
  }

  // ЧЕТВËРТОЕ ЗАДАНИЕ
  if (document.querySelector('[type = "checkbox"]').checked == true) {
    console.log("Добавляем любимый фильм");
  }

  movieList.innerHTML = "";
  generateMovieList();
});

function generateMovieList() {
  // ПЯТОЕ ЗАДАНИЕ
  movieDB.movies.sort();
  
  movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item" data-num="${i}">${i + 1}. ${film} 
            <div class = "delete"></div> 
        </li>
    `;
  });

  // ТРЕТЬЕ ЗАДАНИЕ (ВТОРОЙ СПОСОБ)
  const deleteBtns = document.querySelectorAll('.delete');

  deleteBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      movieDB.movies.splice(i, 1);
      movieList.querySelectorAll('li')[i].remove();
      movieList.innerHTML = "";
      generateMovieList();
    });
  });
}
generateMovieList();

// ТРЕТЬЕ ЗАДАНИЕ (ПЕРВЫЙ СПОСОБ)

// function generateDeleteBtns() {
//   const deleteBtns = document.querySelectorAll('.delete');
//   deleteBtns.forEach((btn, i) => {
//     btn.addEventListener('click', () => {
//       movieDB.movies.splice(i, 1);
//       movieList.querySelectorAll('li').forEach(listItem => {
//         if (listItem.dataset.num == i) {
//           listItem.remove();
//         }
//       });
//       movieList.innerHTML = "";
//       generateMovieList();
//       generateDeleteBtns();
//     });
//   });
// }
// generateDeleteBtns();



