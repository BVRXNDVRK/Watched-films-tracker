const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const lastWatchedFilm = prompt('Один из последних просмотренных фильмов?(Название)', '');
const filmRaiting = +prompt('Yf сколько оцените его?(от 1 до 10)', '');

personalMovieDB.movies[lastWatchedFilm] = filmRaiting;


console.log(personalMovieDB.count);
console.log(personalMovieDB.movies);