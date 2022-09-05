let openModalButton = document.getElementById('open-modal')
let closeModalButton = document.getElementById('close-modal')
let modal = document.getElementById('modal')
let fade = document.getElementById('fade')
let toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}
[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener('click', () => toggleModal())
});