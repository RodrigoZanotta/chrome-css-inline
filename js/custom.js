var elements = document.querySelectorAll('body *[style]');

for (var i = 0; i < elements.length; i++) {

    elements[i].classList.add("bb-line");
}