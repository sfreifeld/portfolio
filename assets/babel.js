// elements
const text = document.getElementById('special');
const input = document.getElementById('input');

// add spans
function addSpans(el, special) {
    let letters = special.split('');
    let html = '';
    for (var i = 0; i < letters.length; i++) { 
        html += '<span>' + letters[i] + '</span>';
    }
    el.innerHTML = html;
}
addSpans(special, special.innerText);

// setup timeline
const tl = new TimelineLite();
tl.staggerFromTo("#special span", 2.5, {
    y: -window.innerHeight / 10 - 100,
    x: -window.innerHeight / 6 - 100,
}, {
    y: 0,
    x: 0,
    ease: Bounce.easeOut,
}, 0.18, "stagger"); 

window.addEventListener('click', () => {
     tl.restart();
});

tl.play();



