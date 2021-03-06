//lesson12.Практика,ч.1.Начинаем создавать приложение

//Написания консольных приложений

//Задание№1
//Я предпологаю что наша программа хочет работать с цифрами ставим +  
// перед prompt и это уже будет числом
//стоит плюс перед prompt,плюс превращает строку в числовой тип данных
//если нам приходит пустая строка,то мы ее превращаем в 0
"use strict";

//let numberOfFilms; //переменная обьявлена глобально


//Задание№2
let personalMovieDB = { //это будет главный обьект куда мы будем помещать все данные
    count: 0, 
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() { //это была функция мы ее сделаем методом
        //мы будем ее менять в зависимости от того что ввел пользователь
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            //если пользователь ввел неправильные данные он будет повторять вопрос
            //наш цикл будет повторятся пока одно из этих условий будет правдивым
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        //Задание№3
      for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50) {
            //в проектах будем проверять открыто ли модальное окно, чекнул ли какую то фичу какой то пользователь
            //либо нажал ли на галочку,все это будет формироваться при помощи таких вот условий
            
            personalMovieDB.movies[a] = b; //если пользователь ввел все правильно,мызаписываем вбазу данных точтонамнадо
            console.log('done');//убедимся что у нас все выполнилось правильно
    
        } else {
            console.log('error');
            i--; //мне хотелось бы вернуть цикл на одно повторение назад
        }
        
      }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) { //функция по показу нашей базы данных
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            //переключаем рубильник в позицию true(false поменяется на true)
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        //цикл будет начинатся с единицы,когда мы записываем в базу данных
        //какие то вещи,когда мы работаем с пользователем так как он не программист,ему все равно что там 
        //начинается все с нуля,ему необходимо вывести номер по порядку так как он привык (1,2,3 и прочее)
        //for (let i = 1; i <= 3; i++) { //1способ реализования задачи
        for (let i = 1; i < 2; i++) {  //2способ реализования задачи

            /*
            //1способ реализования задачи
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                //const genre = prompt(`Ваш любимый жанр под номером ${i}`);
                personalMovieDB.genres[i - 1] = genre;
            } 
            */
           
            //2 способ реализования задачи но немного другого потхода
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
            //добавив toLowerCase() сообщит нам о том что пользователь будет вводить данные в одном регистре

            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                //метод split() берет эту строку и разбивает непосредственно эту строку на отдельные элементы массивов,
                //через определенный разделитель split(', ');
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort(); //немножко подсобьется жанр но у нас указано Любимый жанр№1 а не Жанр№1, 
                //такой код дополнительно отсортирует по алфавиту
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            //item это каждый элемент в массиве который мы перебираем genres[i - 1]жанр№1,жанр№2 и т.д,
            //i это номер по порядку жанр№1,жанр№2 по списку и т.д
            
            //все правильно отработает выведит в консоль,можем это проверить в браузере 
            //написав personalMovieDB.writeYourGenres(); открыв personalMovieDB видим что там лежит 3 элемента
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

//для того чтобы эта функция заработала не забывайте ее вызывать
//rememberMyFilms();


/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/