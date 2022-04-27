const elToShow = document.querySelectorAll('.show-on-scroll');
let isElInViewPort = function(el) {
    let rect = el.getBoundingClientRect();
    let viewHeight = window.innerHeight || document.documentElement.clientHeight

    return (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.top <= viewHeight && rect.bottom >= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight);
}

function loop() {
    elToShow.forEach((item) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } 
        else {
            item.classList.remove('start')
        }
    })
}
window.onscroll = loop;
loop();