let bg = document.querySelector('.promoPhoneImg');
let fog1 = document.querySelector('.promoPhoneImgCup');
let fog2 = document.querySelector('.promoPhoneImgChat');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 1 + 'px, -' + y * 0 + 'px)';
    fog1.style.transform = 'translate(+' + x * 10 + 'px, -' + y * 10 + 'px)';
    fog2.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
});

window.addEventListener("DOMContentLoaded", function() {
[].forEach.call( document.querySelectorAll('.tel'), function(input) {
var keyCode;
function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    var pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    var matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function(a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
    i = new_value.indexOf("_");
    if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
    }
    var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a) {
            return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
    if (event.type == "blur" && this.value.length < 5)  this.value = ""
}

input.addEventListener("input", mask, false);
input.addEventListener("focus", mask, false);
input.addEventListener("blur", mask, false);
input.addEventListener("keydown", mask, false)

});
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 12,
    spaceBetween: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 1500,
      },
  });
