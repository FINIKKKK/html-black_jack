// FAQ табы
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



// Открытие элемента question
$('.question__item').click(function () {
  $(this).toggleClass('active');
  $(this).find('.question__item-title').next().slideToggle('fast');
});



// Select-Плагин
$('.dropdown').dropdown();



// Кнопка Hamburger
$('.hamburger').click(function () {
  $('.header').toggleClass('mobile');
  $('html').toggleClass('mobile');
});



// Кнопка копирования текста
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



// Маска для input'a кредитная карточка
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
}).mask("9999999999999999", { "placeholder": "" });
$('.input-creditCard').mask("9999999999999999", { "placeholder": "" });



// Проверка валидации 
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


// Проверка валидации 
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


// Проверка валидации 
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


// Проверка валидации 
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



//Кнопка поднятия на вверх
document.addEventListener("DOMContentLoaded", function () {
  let gototop = document.querySelector(".ufive_uptop");
  let body = document.documentElement;

  window.addEventListener("scroll", check);

  function check() {
    pageYOffset >= 500 && gototop.classList.add("ufive_upview");
    pageYOffset < 500 && gototop.classList.remove("ufive_upview");
  }

  gototop.onclick = function () {
    animate({
      duration: 700,
      timing: gogototopEaseOut,
      draw: (progress) => (body.scrollTop = body.scrollTop * (1 - progress / 7))
    });
  };

  let circ = (timeFraction) =>
    1 -
    Math.sin(Math.acos(timeFraction > 1 ? (timeFraction = 1) : timeFraction));

  let makeEaseOut = (timing) => (timeFraction) => 1 - timing(1 - timeFraction);
  let gogototopEaseOut = makeEaseOut(circ);
});

function animate(options) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / options.duration;
    timeFraction > 1 && (timeFraction = 1);

    let progress = options.timing(timeFraction);

    options.draw(progress);
    timeFraction < 1 && requestAnimationFrame(animate);
  });
}