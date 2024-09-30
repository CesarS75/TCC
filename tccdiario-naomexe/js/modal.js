const getElement = (... queries) => document.querySelector(... queries);

const button1 = getElement('.open-modal-button');
const closeButton = getElement('.close-btn');
const container = getElement ('.modal-container');
const modal = getElement ('.modal');

const activeModalClass = 'modal-container-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button1.addEventListener('click', () => {
    console.log("botao foi clicado");
    openModal();
});
container.addEventListener('click', (event) => {
    if (modal.contains(event.target)) return;

    closeModal();
});
closeButton.addEventListener('click', () => {
    closeModal();
});

/* agora é botão de copiar */ 

function copiarTexto() {
    var textoCopiado = document.getElementById("texto");

    navigator.clipboard.writeText('text to be copied');
    console.log(`O texto copiado é ${textoCopiado.value}`);
}