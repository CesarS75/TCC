/*
1 - Pegar no JS o elemento correspondente ao botão
2 - Pegar também o elemento correspondente ao body
3 - Identificar quando o usuário tá clicando
4 - adicionar a classe darkMode no body
5 - trocar a imagem do sol pra lua e então fazer todo o sistema inverso pro modo lua trocar pro sol
*/
let botao = document.getElementById('botao');
let body = document.querySelector('body');
let imagem = document.querySelector('.imagemBotao')

botao.addEventListener("click", () => {
    if ((body.classList.contains("darkMode")) == true) {
        body.classList.remove("darkMode")
        imagem.setAttribute("src","./icons/imagens/sun.png")
    }else{
        body.classList.add("darkMode")
        imagem.setAttribute("src","./icons/imagens/moon.png")
    }
})

