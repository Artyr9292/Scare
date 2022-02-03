//lesson12.Практика,ч.1.Начинаем создавать приложение

//Написания консольных приложений

//Задание№1
//Я предпологаю что наша программа хочет работать с цифрами ставим +  
// перед prompt и это уже будет числом
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//Задание№2
const personalMovieDB = { //это будет главный обьект куда мы будем помещать все данные
    count: numberOfFilms, 
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//Задание №3
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Один из последних просмотренных фильмов?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

