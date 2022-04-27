const iconLogin = document.querySelector('.top-header__login');
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__body');
const authForms = document.querySelectorAll('.auth-form');
const authFormSwitchs = document.querySelectorAll('.auth-form__switch');


function openModal() {
    modal.classList.add('open');
}
function closeModal() {
    modal.classList.remove('open');
}
//mở/đóng modal
iconLogin.addEventListener('click', openModal);
modal.addEventListener('click', closeModal);
modalBody.addEventListener('click', function(e) {
    e.stopPropagation();
    })
