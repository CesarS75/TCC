const getElement = (... queries) => document.querySelector(... queries);

const button = getElement('.open-modal-button');
const button2 = getElement('.open-modal-button2');

const closeButton = getElement('.close-btn');
const closeButton2 = getElement('.close-btn2');

const container = getElement ('.modal-container');
const container2 = getElement ('.modal-container2');
const container3 = getElement ('.modal-container3');
const container4 = getElement ('.modal-container4');
const container5 = getElement ('.modal-container5');

const modal = getElement ('.modal');

const activeModalClass = 'modal-container-show';
const activeModalClass2 = 'modal-container-show2';
const activeModalClass3 = 'modal-container-show3';
const activeModalClass4 = 'modal-container-show4';
const activeModalClass5 = 'modal-container-show5';


const openModal = () => container.classList.add(activeModalClass);
const openModal2 = () => container2.classList.add(activeModalClass2);
const openModal3 = () => container3.classList.add(activeModalClass3);
const openModal4 = () => container4.classList.add(activeModalClass4);
const openModal5 = () => container5.classList.add(activeModalClass5);

const closeModal = () => container.classList.remove(activeModalClass);
const closeModal2 = () => container2.classList.remove(activeModalClass2);
const closeModal3 = () => container3.classList.remove(activeModalClass3);
const closeModal4 = () => container4.classList.remove(activeModalClass4);
const closeModal5 = () => container5.classList.remove(activeModalClass5);


button.addEventListener('click', () => {
    console.log("botao foi clicado");
    openModal();
});

button2.addEventListener('click', () => {
    console.log("botao foi clicadao");
    openModal2();
});

container.addEventListener('click', (event) => {
    if (modal.contains(event.target)) return;

    closeModal();
});
closeButton.addEventListener('click', () => {
    closeModal();
});
closeButton2.addEventListener('click', () => {
    closeModal2();
});