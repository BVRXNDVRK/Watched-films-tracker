
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

/* САМОСТОЯТЕЛЬНАЯ РАБОТА */
for (let k = 1; k <=1; k++) {
  numberOfFilms = prompt( 'Сколько фильмов вы уже посмотрели?', '' );

  switch (true) {
    case (numberOfFilms == null || numberOfFilms == ''):
      alert('Нельзя пропустить вопрос либо оставить строку пустой!');
      k--;
      break;
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

personalMovieDB.count = numberOfFilms;

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
if ( numberOfFilms != 0 && numberOfFilms != null && numberOfFilms != '' ) {
  let i = 1;

  do {
    lastWatchedFilm = prompt('Один из последних просмотренных фильмов?(Название)', '');

    switch (true) {
      case (lastWatchedFilm == null):
        alert('Увы пропустить вопрос нельзя :(');
        break;

      case (lastWatchedFilm.length > 50 || lastWatchedFilm.length == 0):
        lastWatchedFilm = '';
        alert('Длина текста не может превышать 50-ти символов либо равняться 0 символов. Попробуйте еще раз!');
        break;

      default:
        let j = 1;

        do {
          filmRaiting = prompt('Во сколько оцените его?(от 1 до 10)', '');

          switch (true) {
            case (filmRaiting == null):
              alert('Увы пропустить вопрос нельзя :(');
              break;

            case (filmRaiting.length > 50 || filmRaiting.length == 0 || Number(filmRaiting) > 10):
              alert('Длина текста не может превышать 50-ти символов либо равняться 0 символов.Также оценка не может превышать число 10. Попробуйте еще раз!');
              break;

            default:
              j++;
              personalMovieDB.movies[lastWatchedFilm] = filmRaiting;
              break;
          }
        } while (j <= 1);
        i++;
        break;
    }

  } while (i <= numberOfFilms);
}

console.log(personalMovieDB);