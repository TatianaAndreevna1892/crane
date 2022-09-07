



$(document).ready(function () {
   $("a.menu__link").click(function () {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + -100,
      }, {
         duration: 1000,
         easing: "swing"
      });
      return false;
   });
});
$(document).ready(function () {
   $(".headertop__text a").click(function () {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + -100,
      }, {
         duration: 1000,
         easing: "swing"
      });
      return false;
   });
});

$(document).ready(function () {
   $(".work__content a").click(function () {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + -100,
      }, {
         duration: 1000,
         easing: "swing"
      });
      return false;
   });
});

const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu__list");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   menuList.classList.toggle("active");
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   menuList.classList.remove("active");
}));

$(function () {
   var mixer = mixitup('.rent__galery-content');
});



const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+38 (999) 999-99-99');
inputMask.mask(telSelector);

new window.JustValidate('.form', {
   rules: {

      tel: {
         required: true,
         function: () => {
            const phone = telSelector.inputmask.unmaskedvalue();
            return Number() && phone.length === 10;
         }
      },
   },
   colorWrong: '#F0C018',
   messages: {
      name: {
         required: 'Введіть імя',
         minLength: 'Введіть не менше 3-х символів',
         maxLength: 'Введіть не більше 15 символів',
      },
      email:{
         email: 'Введіть email',
         required: 'Введіть коректний email',
      },
      tel:{
         required: 'Введіть telephone',
         function:'Введіть не менше  10 символів',
      }
   },

   SubmitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }
    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();

   }
});
