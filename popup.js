'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {

    changeColor = document.getElementById('changeColor');

    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});