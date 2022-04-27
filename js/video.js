const videoBtn = document.querySelector('.clip','.clip-img');
const video = document.querySelector('.video');
const videoBody = document.querySelector('.video__body');

function openVideo() {
    video.classList.add('open');
}

function closeVideo() {
    video.classList.remove('open');
}
videoBtn.addEventListener('click', openVideo);
video.addEventListener('click', closeVideo);
videoBody.addEventListener('click', function(e) {
    e.stopPropagation();
})