"use strict";
const button = document.querySelectorAll('.swipe__panel-item');

for (let key of button) {
    key.addEventListener('click', function() {
        key.style.backgroundColor = '#ff8b38';
    });
}