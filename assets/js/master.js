// Hover Eff
const hoverBoxes = document.querySelectorAll('.hov-bx');
hoverBoxes.forEach(hoverBox => {
    let timeoutId;
    hoverBox.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
        hoverBox.classList.add("hov-eff");
    });

    hoverBox.addEventListener('mouseleave', function() {
        timeoutId = setTimeout(function() {
            hoverBox.classList.remove("hov-eff");
        }, 1000);
    });
});


// Flip Cards
const cards = document.querySelectorAll('.avai');
cards.forEach((card) => {
    card.addEventListener('click', function () {
        cards.forEach((c) => {
        if (c !== card) {
            c.classList.remove('flip');
        }
        });
        card.classList.toggle('flip');
    });
});


// Nav
(function($) { "use strict";
	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();

})(jQuery); 


// Hero Typing 
var typed = new Typed(".typing-text", {
    strings: ["Front-End Development", "Back-End Development", "Web Designing", "Full Stack Development", "Web Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 800,
});


// Back Hero Stars
const stars = document.getElementById('stars');
const stars2 = document.getElementById('stars2');
const stars3 = document.getElementById('stars3');

function generateStars(starElement, numStars, maxPosition) {
    let boxShadow = '';
    for (let i = 0; i < numStars; i++) {
        const x = Math.floor(Math.random() * maxPosition);
        const y = Math.floor(Math.random() * maxPosition);
        boxShadow += `${x}px ${y}px #FFF${i < numStars - 1 ? ', ' : ''}`;
    }
    starElement.style.boxShadow = boxShadow;
}

generateStars(stars, 700, 2000);
generateStars(stars2, 200, 2000);
generateStars(stars3, 100, 2000);
