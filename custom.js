var elements = document.querySelectorAll('*[style]:not(body)');

for (var i = 0; i < elements.length; i++) {

    elements[i].classList.add("bb-line");
}