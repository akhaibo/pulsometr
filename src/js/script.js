$(document).ready(function(){
    $('.carousel__inner').slick({
        // dots: true - кружки
        speed: 1200,
        adaptiveHeight: true,
        // подстройка под высоту картинки
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/slides/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/slides/right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    // function toggleSlide(item) {
    //     $(item).each(function(i) {
    //         $(this).on('click', function(e) {
    //             e.preventDefault();
    //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //         })
    //     });
    // };

    // toggleSlide('.catalog-item__link');
    // toggleSlide('.catalog-item__back');
});

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     controls: false,
//     nav: false
//     /* controlsText: [
//         '<img src="../img/slides/left.png">',
//         '<img src="../img/slides/right.png">'    
//     ] */
// });  

// document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });

// document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });

// var name ="Ivan"; /* не используется */

// let number = 7;   /* цифры могут меняться */
// const pi = 3.14; /* невозможно заменить значение */

// number = 4;
// /* pi = 5; /* так нелья так как пи констант */

// let leftBorderWidth = 200;

/* типы данных */ 
// number /* для обозначения цифровых данных: зарплаты и т.д */
// string - "", '' /* строка */
// true/false /* логический тип данных */
// null /* несуществующий тип данных */
// underfined /* существует но значение никакого не имеет */
// let obj = {
//    name: 'apple',
//    color: 'green',
//    wight: 200,
// }
//Symbol
// alert(1234)
// console.log('tuktuk') /* таким образом можно неспосредственно общаться с разаработчиком js */
// let answer = confirm("вам есть 18?");
// console.log(answer);
// let answer = prompt("вам есть 18?", "");
// console.log(answer);
// console.log(4+4)
// console.log(4 + 'fdd'); называется конкатенация (сцепление) в консоле выйдет как 4fdd
// let isChecked = true, /* логические операторы "и, и/или" */
    // isClose = false;

// console.log(isChecked && isClose); /* логический оператор "и" */

// console.log(isChecked || isClose); /* оператор "или" */

// if (2*6 == 8*1) {
//     console.log('Верно')
// } else {
//     console.log('Ошибка')
// }

// let answer = confirm("вам есть 18?");
// if (answer) {
//     console.log('Проходите')
// } else {
//     console.log('Запрещено')
// }

// const num = 50; 

// if (num < 49) {
//     console.log('Неправильно')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Верно')
// }

/* основной цикл js "for" */
// for (let i = 1; i < 8; i++) { /* i - переменная "итератор" */
//     console.log(i);
// }

/* "функция" - "function": */
// function logging(a, b) { /* logging - это просто название функции */
//     console.log(a + b)
// }

// logging(3, 5);

// logging(6, 8);

