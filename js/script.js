// СТРОГИЙ РЕЖИМ
'use strict';

// ПЕРЕМЕННЫЕ, ОБЪЕКТЫ, МАССИВЫ, ФУНКЦИИ
let filmRaiting,
    lastWatchedFilm,
    numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    alert('Нельзя пропустить вопрос либо оставить строку пустой! Так же ответ должен быть цыфрой.');
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }

  personalMovieDB.count = numberOfFilms;
}

function detectPersonalLevel() {
  switch (true) {
    case (numberOfFilms < 10):
      alert('Просмотрено довольно мало фильмов...');
      break;
    case (numberOfFilms > 30):
      alert('Вы киноман!!!');
      break;
    case (numberOfFilms > 10 && numberOfFilms < 30):
      alert('Вы классический зритель!');
      break;
  }
}

function rememberMyFilms() {
  for ( let i = 0; i < 2; i++) {
    lastWatchedFilm = prompt('Один из последних просмотренных фильмов?');
    filmRaiting = +prompt('Во сколько вы оцените его (от 1 до 10)?');

    if ( lastWatchedFilm != null && filmRaiting != null && lastWatchedFilm != '' && filmRaiting != '' && lastWatchedFilm.length < 50) {
      personalMovieDB.movies[lastWatchedFilm]  = filmRaiting;
    } else {
      alert('Нельзя отменить вопрос либо оставить строку пустой! Также длина названия фильма не может превышать 50-ти символов! Пожалуйста попробуйте еще раз.');
      i--;
    }
  }
}

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

// ВЫЗОВЫ ФУНКЦИЙ
start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);



/* ПРАКТИКА ЧАСТЬ 2 -- САМОСТОЯТЕЛЬНАЯ РАБОТА */

// for (let k = 1; k <=1; k++) {
//   numberOfFilms = prompt( 'Сколько фильмов вы уже посмотрели?', '' );

//   switch (true) {
//     case (numberOfFilms == null || numberOfFilms == ''):
//       alert('Нельзя пропустить вопрос либо оставить строку пустой!');
//       k--;
//       break;
//     case (numberOfFilms < 10):
//       alert('Просмотрено довольно мало фильмов...');
//       break;
//     case (numberOfFilms > 30):
//       alert('Вы киноман!!!');
//       break;
//     case (numberOfFilms > 10 && numberOfFilms < 30):
//       alert('Вы классический зритель!');
//       break;
//   }
// }

/* 1-Й СПОСОБ */
// for (let i = 1; i <= numberOfFilms; i++) {
//   lastWatchedFilm = prompt('Один из последних просмотренных фильмов?(Название)', '');
//   if ( lastWatchedFilm == null ) {
//     alert('Увы пропустить вопрос нельзя :(');
//     i--
//   } else if (lastWatchedFilm.length > 50 || lastWatchedFilm.length == 0 ) {
//     lastWatchedFilm = '';
//     alert('Длина текста не может превышать 50-ти символов либо равняться 0 символов. Попробуйте еще раз!');
//     i--;
//   } else {
//     for (let j = 1; j <= 1; j++) {
//       filmRaiting = prompt('Во сколько оцените его?(от 1 до 10)', '');

//       if (filmRaiting == null) {
//         alert('Увы пропустить вопрос нельзя :(');
//         j--;
//       } else if (filmRaiting.length > 50 || filmRaiting.length == 0 || Number(filmRaiting) >= 10) {
//         filmRaiting = '';
//         alert('Длина текста не может превышать 50-ти символов либо равняться 0 символов.Также оценка не может превышать число 10. Попробуйте еще раз!');
//         j--;
//       } else {
//         personalMovieDB.movies[lastWatchedFilm] = filmRaiting;
//       }
//     }
//   }
// }

/* 2-Й СПОСОБ */
// let i = 1;

// while (i <= numberOfFilms) {
//   lastWatchedFilm = prompt('Один из последних просмотренных фильмов?(Название)', '');

//   switch (true) {
//     case ( lastWatchedFilm == null ):
//       alert('Увы пропустить вопрос нельзя :(');
//     break;

//     case (lastWatchedFilm.length > 50 || lastWatchedFilm.length == 0 ):
//       lastWatchedFilm = '';
//       alert('Длина текста не может превышать 50-ти символов либо равняться 0 символов. Попробуйте еще раз!');
//       break;

//     default:
//       let j = 1;

//       while (j <= 1) {
//         filmRaiting = prompt('Во сколько оцените его?(от 1 до 10)', '');

//         switch (true) {
//           case (filmRaiting == null):
//             alert('Увы пропустить вопрос нельзя :(');
//             break;

//           case (filmRaiting.length > 50 || filmRaiting.length == 0 || Number(filmRaiting) >= 10):
//             alert('Длина текста не может превышать 50-ти символов либо равняться 0 символов.Также оценка не может превышать число 10. Попробуйте еще раз!');
//             break;

//           default:
//             j++;
//             personalMovieDB.movies[lastWatchedFilm] = filmRaiting;
//             break;

//         }
//       }

//       i++;
//       break;
//   }
// }

/* 3-Й СПОСОБ */
// if (numberOfFilms != 0 && numberOfFilms != null && numberOfFilms != '') {
//   let i = 1;

//   do {
//     lastWatchedFilm = prompt('Один из последних просмотренных фильмов?(Название)', '');

//     switch (true) {
//       case (lastWatchedFilm == null):
//         alert('Увы пропустить вопрос нельзя :(');
//         break;

//       case (lastWatchedFilm.length > 50 || lastWatchedFilm.length == 0):
//         lastWatchedFilm = '';
//         alert('Длина текста не может превышать 50-ти символов либо равняться 0 символов. Попробуйте еще раз!');
//         break;

//       default:
//         let j = 1;

//         do {
//           filmRaiting = prompt('Во сколько оцените его?(от 1 до 10)', '');

//           switch (true) {
//             case (filmRaiting == null):
//               alert('Увы пропустить вопрос нельзя :(');
//               break;

//             case (filmRaiting.length > 50 || filmRaiting.length == 0 || Number(filmRaiting) > 10):
//               alert('Длина текста не может превышать 50-ти символов либо равняться 0 символов.Также оценка не может превышать число 10. Попробуйте еще раз!');
//               break;

//             default:
//               j++;
//               personalMovieDB.movies[lastWatchedFilm] = filmRaiting;
//               break;
//           }
//         } while (j <= 1);
//         i++;
//         break;
//     }

//   } while (i <= numberOfFilms);
// }


/* ПРАКТИКА ЧАСТЬ 3 -- САМОСТОЯТЕЛЬНАЯ РАБОТА */

/* 1 задание --- Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - виводить в консоль главный объект программы. */
// function showMyDB() {
//   if ( personalMovieDB.privat == false ) {
//     console.log(window/*personalMovieDB*/);
//   }
// }

// showMyDB();

/* 2 задание --- Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос "Ваш любимый жанр под номером ${Номер по порядку}". Каждый ответ записывается в массив данных genres. */

// const genres = [];

// function writeYourGenres() {
//   for ( let i = 1; i <= 3; i++ ) {
//     let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//     genres[i-1] = genre;
//     console.log(genres);
//   }
// }

// writeYourGenres();

/* РЕШИЛ ПОПЫТАТЬСЯ НАПИСАТЬ СВОЙ МЕТОД Object.keys() И ВОТ ЧТО ПОЛУЧИЛОСЬ ( Получилось! )*/
// const tatata = {
//   name: "kavo",
//   surname: "gde",
//   age: 18,
//   hobbies: {
//     programming: "1",
//     running: "2"
//   }
// };

// function keysArr (anyObject) {
//   let counter = 0;
//   let optionsArr = [];

//   for ( let key in anyObject ) {
//     counter++;

//     for ( let i = 0; i < counter; i++ ) {
//       if ( i == optionsArr.length ) {
//         optionsArr[i] = `${key}`;
//       }
//     }
//   }
//   return optionsArr;
// }

// keysArr(tatata);

// console.log(keysArr(tatata).length);