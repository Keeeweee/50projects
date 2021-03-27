const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {

    if (load >= 100) {
        clearInterval(int);
        return;
    }

    load++;

    loadText.innerText = `${load}%`;

    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`
}

function scale(num, inMin, inMax, outMin, outMax) {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
