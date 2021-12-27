
// $('.select2').dropdown({
//     values: [
//         {
//             name: 'Male',
//             value: 'male'
//         },
//         {
//             name: 'Female',
//             value: 'female',
//             selected: true
//         }
//     ]
// })


// let changeButton = document.querySelector('.select-swap');

// function chaangeSelect(e) {
//     let selectOne = document.querySelector('.select-1');
//     let selectTwo = document.querySelector('.select-2');
//     let valOne = selectOne.value;
//     selectOne.value = selectTwo.value
//     selectTwo.value = valOne
// }

// changeButton.addEventListener('click', chaangeSelect)

// $('.select').selectBox();


//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
// var langArray = [];
// $('.vodiapicker option').each(function () {
//     var img = $(this).attr("data-thumbnail");
//     var text = this.innerText;
//     var value = $(this).val();
//     var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
//     langArray.push(item);
// })

// $('#a').html(langArray);

// //Set the button value to the first el of the array
// $('.btn-select').html(langArray[0]);
// $('.btn-select').attr('value', 'en');

// //change button stuff on click
// $('#a li').click(function () {
//     var img = $(this).find('img').attr("src");
//     var value = $(this).find('img').attr('value');
//     var text = this.innerText;
//     var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
//     $('.btn-select').html(item);
//     $('.btn-select').attr('value', value);
//     $(".b").toggle();
//     //console.log(value);
// });

// $(".btn-select").click(function () {
//     $(".b").toggle();
// });

// //check local storage for the lang
// var sessionLang = localStorage.getItem('lang');
// if (sessionLang) {
//     //find an item with value of sessionLang
//     var langIndex = langArray.indexOf(sessionLang);
//     $('.btn-select').html(langArray[langIndex]);
//     $('.btn-select').attr('value', sessionLang);
// } else {
//     var langIndex = langArray.indexOf('ch');
//     console.log(langIndex);
//     $('.btn-select').html(langArray[langIndex]);
//     //$('.btn-select').attr('value', 'en');
// }


// // Функция очистки класса
// function cleanSelect (select) {
//     // Очищаем от стилей
//     return $(select).removeClass('icon-ok').removeClass('icon-error')
// }

// // Формируем select и его обработчики
// function formSelect() {
//     // получаем выпадающий список с уже очищенными классами
//     var select = cleanSelect('.select-events');

//     // Добавляем класс, который соответствует выбранному элементу
//     select.addClass(select.val() == '1' ? 'icon-ok' : 'icon-error');

//     // Добавляем стили, чтобы у списка не было видно полосы прокрутки
//     select.css({ height: 'auto', overflow: 'hidden', zIndex: '40000' });

//     // Определяем обработчик на событие ухода мышки с области элемента
//     select.on('mouseleave', function () {
//         // Устанавливаем обычный размер
//         this.size = 1;
//         // Добавляем класс стиля в соответствии с выбранным элементом
//         cleanSelect(this).addClass($(this).val() == '1' ? 'icon-ok' : 'icon-error');
//     });

//     // Определяем обработчик на событие ухода мышки с области элемента
//     select.on('mouseover', function () {
//         // Очищаем стиль списка, чтобы он не мешал отображению
//         cleanSelect(this);
//         // Устанавливаем размер, равный количеству элементов
//         this.size = $(this).find('option').length;
//     });
// }

// // После загрузки DOM - получаем список
// $(function () {
//     formSelect();
// });



// jQuery().ready(function () {
//     /* Custom select design */
//     jQuery('.drop-down').append('<div class="button"></div>');
//     jQuery('.drop-down').append('<ul class="select-list"></ul>');
//     jQuery('.drop-down select option').each(function () {
//         var bg = jQuery(this).css('background-image');
//         jQuery('.select-list').append('<li class="clsAnchor"><span value="' + jQuery(this).val() + '" class="' + jQuery(this).attr('class') + '" style=background-image:' + bg + '>' + jQuery(this).text() + '</span></li>');
//     });
//     jQuery('.drop-down .button').html('<span class="select-last" style=background-image:' + jQuery('.drop-down select').find(':selected').css('background-image') + '>' + jQuery('.drop-down select').find(':selected').text() + '</span>' + '<a href="javascript:void(0);" class="select-list-link">Arrow</a>');
//     jQuery('.drop-down ul li').each(function () {
//         if (jQuery(this).find('span').text() == jQuery('.drop-down select').find(':selected').text()) {
//             jQuery(this).addClass('active');
//         }
//     });
//     jQuery('.drop-down .select-list span').on('click', function () {
//         var dd_text = jQuery(this).text();
//         var dd_img = jQuery(this).css('background-image');
//         var dd_val = jQuery(this).attr('value');
//         jQuery('.drop-down .button').html('<span style=background-image:' + dd_img + '>' + dd_text + '</span>' + '<a href="javascript:void(0);" class="select-list-link">Arrow</a>');
//         jQuery('.drop-down .select-list span').parent().removeClass('active');
//         jQuery(this).parent().addClass('active');
//         $('.drop-down select[name=options]').val(dd_val);
//         $('.drop-down .select-list li').slideUp();
//     });
//     jQuery('.drop-down .button').on('click', 'a.select-list-link', function () {
//         jQuery('.drop-down ul li').slideToggle();
//     });
//     /* End */
// });


// let changeButton = document.querySelector('.select-change');

// function chaangeSelect(e) {
//     let selectOne = document.querySelector('.select1');
//     let selectTwo = document.querySelector('.select2');
//     let valOne = selectOne.value;
//     selectOne.value = selectTwo.value
//     selectTwo.value = valOne
// }

// changeButton.addEventListener('click', chaangeSelect)



// let changeButton = document.querySelector('.select-swap');

// function chaangeSelect(e) {
//     let selectOne = document.querySelector('.airport-select__departure');
//     let selectTwo = document.querySelector('.airport-select__departure2');
//     let valOne = selectOne.value;
//     selectOne.value = selectTwo.value
//     selectTwo.value = valOne
// }

// changeButton.addEventListener('click', chaangeSelect)

$("ul.faq__filters").on("click", "li:not(.active)", function () {
  $(this)
    .addClass("active")
    .siblings()
    .removeClass("active")
    .closest("div.faq__inner")
    .find("div.questions")
    .removeClass("active")
    .eq($(this).index())
    .addClass("active");
});



$('.question__item').click(function () {
  $(this).toggleClass('active');
  $(this).find('.question__item-title').next().slideToggle('fast');
});


// $('.contacts__form-button').click(function () {
//     if ($('.contacts__form').find('.input-email').find('.input').val() == '') {
//         $('.contacts__form').find('.input-email').find('.error-text'.html('Заполните поля'))
//     }
//     // if ($(this).parent().find('.input-name').find('.input').val() == '') {
//     //     $(this).parent().find('.input-name').addClass('error');
//     // }
// });


$(document).ready(function () {
  $('#contacts__form').submit(function (e) {
    e.preventDefault();
    var name = $('#contacts__form-name').val();
    var email = $('#contacts__form-email').val();

    $(".error").remove();
    $(".input").removeClass('input-error');

    if (name.length < 1) {
      $('#contacts__form-name').addClass('input-error');
      $('#contacts__form-name').after('<span class="error">Заполните поле</span>');
    }
    if (email.length < 1) {
      $('#contacts__form-email').addClass('input-error');
      $('#contacts__form-email').after('<span class="error">Заполните поле</span>');
    } else {
      var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#contacts__form-email').addClass('input-error');
        $('#contacts__form-email').after('<span class="error">Заполните правильно</span>');
      }
    }
  });
});



$('.dropdown').dropdown();



$('.hamburger').click(function () {
  $('.header').toggleClass('mobile');
});


$('.trade__copy-btn').click(function () {
  var $text_copy = $(this).parent().find('.trade__title');
  var $copy_message = $(this).parent().find('.trade__copy-message');
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($text_copy.text()).select();
  document.execCommand("copy");
  $temp.remove();
  $copy_message.fadeIn(400);
  setTimeout(function () {
    $copy_message.fadeOut(400);
  }, 3000);
});



// document.querySelector("input[type='number']").addEventListener("keypress", function (evt) {
//   if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
//     evt.preventDefault();
//   }
// });


// Маска для input'a телефона
$.fn.setCursorPosition = function (pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};
$('.input-creditCard').click(function () {
  $(this).setCursorPosition(0);
}).mask("9999 9999 9999 9999");
$('.input-creditCard').mask("9999 9999 9999 9999");



$(document).ready(function () {
  $('#trade__form').submit(function (e) {
    e.preventDefault();
    var num1 = $('#trade__form-num1').val();
    var card1 = $('#trade__form-card1').val();
    var card2 = $('#trade__form-card2').val();
    var email = $('#trade__form-email').val();

    $(".error").remove();
    $(".input").removeClass('input-error');


    if (num1.length < 1) {
      $('#trade__form-num1').addClass('input-error');
      $('#trade__form-num1').after('<span class="error">Заполните поле</span>');
    } else {
      var num1Value = $('#trade__form-num1').val();
      if (num1Value <= 0 || num1Value > 10) {
        $('#trade__form-num1').addClass('input-error');
        $('#trade__form-num1').after('<span class="error">Должно быть между 0.001 до 10</span>');
      }
    }

    if (card1.length < 1) {
      $('#trade__form-card1').addClass('input-error');
      $('#trade__form-card1').after('<span class="error">Заполните поле</span>');
    }

    if (card2.length < 1) {
      $('#trade__form-card2').addClass('input-error');
      $('#trade__form-card2').after('<span class="error">Заполните поле</span>');
    }

    if (email.length > 1) {
      var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#trade__form-email').addClass('input-error');
        $('#trade__form-email').after('<span class="error">Заполните правильно</span>');
      }
    }

  });
});


$(document).ready(function () {
  $('#top__form').submit(function (e) {
    e.preventDefault();
    var num1 = $('#top__form-num1').val();

    $(".error").remove();
    $(".input").removeClass('input-error');


    if (num1.length < 1) {
      $('#top__form-num1').addClass('input-error');
      $('#top__form-num1').after('<span class="error">Заполните поле</span>');
    } else {
      var num1Value = $('#top__form-num1').val();
      if (num1Value <= 0 || num1Value > 10) {
        $('#top__form-num1').addClass('input-error');
        $('#top__form-num1').after('<span class="error">Заполните правильно</span>');
      }
    }
  });
});



$('#trade__form-change').click(function () {
  let valOne = $('#trade__form-select1').find('.text').html();
  let valTwo = $('#trade__form-select2').find('.text').html();

  let menuOne = $('#trade__form-select1').find('.menu.hidden').html();
  let menuTwo = $('#trade__form-select2').find('.menu.hidden').html();
  

  $('#trade__form-select1').find('.text').html(valTwo);
  $('#trade__form-select2').find('.text').html(valOne);

  $('#trade__form-select1').find('.menu').html(menuTwo);
  $('#trade__form-select2').find('.menu').html(menuOne);
});


$('#top__form-change').click(function () {
  let valOne = $('#top__form-select1').find('.text').html();
  let valTwo = $('#top__form-select2').find('.text').html();

  let menuOne = $('#top__form-select1').find('.menu.hidden').html();
  let menuTwo = $('#top__form-select2').find('.menu.hidden').html();
  

  $('#top__form-select1').find('.text').html(valTwo);
  $('#top__form-select2').find('.text').html(valOne);

  $('#top__form-select1').find('.menu').html(menuTwo);
  $('#top__form-select2').find('.menu').html(menuOne);
});
