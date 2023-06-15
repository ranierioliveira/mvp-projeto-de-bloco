const menu = document.querySelector('.menu');
const radio = document.querySelectorAll('.radiobutton-item-circulo');
const check = document.querySelectorAll('.checkbox-item-selecao');
const certo = document.querySelectorAll('.check');
const traco = document.querySelector('.remove');
const selectOpcoes = document.querySelector('.select-opcoes');
const mostrarMais = document.querySelector('.mostrar-mais');
const mostrarMenos = document.querySelector('.mostrar-menos');
const selectItem = document.querySelectorAll('.select-opcoes-item');
const textoSelect = document.querySelector('.texto-select')
const campos = document.querySelectorAll('.campos');
const mensagemDeErro = document.querySelectorAll('.span-required');
const nomeRegEx = /[A-Z][a-z]* [A-Z][a-z]*/;
const emailRegEx = /[a-zA-Z0-9_#]+[@](hotmail|gmail|outlook|yahoo)[.](com)/
const botao = document.querySelector('.enviar-btn');
const areaDeTexto = document.querySelector('textarea');
const slider = document.querySelectorAll('.slider');
const botaoVoltar = document.getElementById('botao-voltar');
const botaoAvancar = document.getElementById('botao-avancar');

// Ativa / desativa menu no mobile
function clicarMenuMobile(){
    if(menu.style.display === 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

// Faz o menu aparecer quando aumentar para telas maiores de 768px
function mudouTamanho(){
    if(window.innerWidth > 768){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

radio.forEach((elemento, index) => {
    elemento.addEventListener('click', () => {
        marcaRadioButton(index);
    })
    // console.log(elemento, index);
});

function marcaRadioButton(indiceClicado){
    radio[indiceClicado].classList.toggle('radio-selecionado');
    if(indiceClicado === 0){
        radio[1].classList.remove('radio-selecionado');
        radio[2].classList.remove('radio-selecionado');
    } else if (indiceClicado === 1){
        radio[0].classList.remove('radio-selecionado');
        radio[2].classList.remove('radio-selecionado');
    } else if (indiceClicado === 2){
        radio[0].classList.remove('radio-selecionado');
        radio[1].classList.remove('radio-selecionado');
    }
}

check.forEach((elemento, index) => {
    elemento.addEventListener('click', () => {
        marcaCheckBox(index);
    })
});

function marcaCheckBox(indexSelecionado){
    if(indexSelecionado === 0){
        const isCheck1Selecionado = check[1].classList.contains('checkbox-selecionado');
        const isCheck2Selecionado = check[2].classList.contains('checkbox-selecionado');

        if(!isCheck1Selecionado && !isCheck2Selecionado){
            check.forEach((elemento, index) => {
                elemento.classList.add('checkbox-selecionado');
                certo[index].style.display = "block";
            });
        } else if (isCheck1Selecionado && !isCheck2Selecionado) {
            deselecionarTodosCheckboxes();
        } else if (isCheck2Selecionado && !isCheck1Selecionado){
            deselecionarTodosCheckboxes();
        } else  {
            deselecionarTodosCheckboxes();
        }
    } else {
        let meioEscolhido;
        let outroMeio;

        if(indexSelecionado === 1){
            meioEscolhido = 1;
            outroMeio = 2;
        } else {
            meioEscolhido = 2;
            outroMeio = 1;
        }

        const isCheck0Selecionado = check[0].classList.contains('checkbox-selecionado');
        const isOutroMeioSelecionado = check[outroMeio].classList.contains('checkbox-selecionado');


        if(!isCheck0Selecionado && !isOutroMeioSelecionado){
            check[meioEscolhido].classList.add('checkbox-selecionado');
            certo[meioEscolhido].style.display = "block";
            check[0].classList.add('checkbox-selecionado');
            traco.style.display = "block";
                
        } else if (isCheck0Selecionado && isOutroMeioSelecionado){
            if(check[meioEscolhido].classList.contains('checkbox-selecionado')){
                desmarcarCheckbox(meioEscolhido);
                certo[0].style.display = 'none';
                traco.style.display = 'block'
            } else {
                check[meioEscolhido].classList.add('checkbox-selecionado');
                certo[meioEscolhido].style.display = "block";
                traco.style.display = 'none';
                certo[0].style.display = 'block';
            }
        } else if (isCheck0Selecionado && !isOutroMeioSelecionado){
            desmarcarCheckbox(meioEscolhido);
            check[0].classList.remove('checkbox-selecionado');
            traco.style.display = 'none';
        }
    
    }
}
function deselecionarTodosCheckboxes(){
    check.forEach((elemento, index) => {
        elemento.classList.remove('checkbox-selecionado');
        certo[index].style.display = 'none';
        traco.style.display = 'none';
    });
}
function desmarcarCheckbox(indice){
    check[indice].classList.remove('checkbox-selecionado');
    certo[indice].style.display = 'none';
}

//Exibe e oculta as opções do select
function exibirMenuSelect(){
    if(selectOpcoes.style.display === 'none'){
        selectOpcoes.style.display = 'block';
    } else {
        selectOpcoes.style.display = 'none';
    }
}

//Seleciona a opção desejada do select
selectItem.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
       selecionaOpcaoDoSelect(evento.target.textContent);
    })
})

function selecionaOpcaoDoSelect(itemSelecionado){
    textoSelect.innerHTML = itemSelecionado;
}

//Retira pontos, parenteses e espaços vazios do input de telefone
function retiraParentesesTracosEspacos(telefone){
    const semEspaco = telefone.replace(' ', '');
    const semPrimeiroParentese = semEspaco.replace('(', '');
    const semSegundoParentese = semPrimeiroParentese.replace(')', '');
    const semTraco = semSegundoParentese.replace('-', '')
    return semTraco;
}

//Valida as informações inseridas no input de nome
function validaNome(){
    if(nomeRegEx.test(campos[0].value)){ 
        mensagemDeErro[0].style.display = 'none';
    } else {
        mensagemDeErro[0].style.display = 'block';
    }
}

//Valida as informações inseridas no input de email
function validaEmail(){
    if(emailRegEx.test(campos[1].value)){ 
        mensagemDeErro[1].style.display = 'none';
    } else {
        mensagemDeErro[1].style.display = 'block';
    }
}

//Valida as informações inseridas no input de telefone
function validaTelefone(){
    const telefoneFormatado = retiraParentesesTracosEspacos(campos[2].value);
    if( telefoneFormatado.length == 11){
        campos[2].value = telefoneFormatado;
        mensagemDeErro[2].style.display = 'none';
    } else {
        mensagemDeErro[2].style.display = 'block';
    }
}

//Possibilita o uso do botão após conferir algumas informações

function ativaBotao() {
    const nome = campos[0].value;
    const email = campos[1].value;
    const mensagemErroDisplay = mensagemDeErro[2].style.display;
    const isRadioSelecionado = radio[0].classList.contains('radio-selecionado') || radio[1].classList.contains('radio-selecionado') || radio[2].classList.contains('radio-selecionado');

    const isSelectEscolhido = textoSelect.textContent !== '--Escolher opções--';
    const isCheckboxSelecionado = check[0].classList.contains('checkbox-selecionado');
    const isTextAreaValido = areaDeTexto.value.length >= 5;

    if (nome.length !== 0 && nomeRegEx.test(nome) &&
        email.length !== 0 && emailRegEx.test(email) &&
        mensagemErroDisplay === 'none' &&
        isRadioSelecionado && isSelectEscolhido &&
        isCheckboxSelecionado && isTextAreaValido) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}

//Muda os slides
let slideAtual = 0;
botaoVoltar.addEventListener('click', slideAnterior);
botaoAvancar.addEventListener('click', slidePosterior);

function slidePosterior(){
    escondeSlide();
    if(slideAtual === slider.length - 1){
        slideAtual = 0;
    } else {
        slideAtual++
    }
    mostraSlide();
}

function slideAnterior(){
    escondeSlide();
    if(slideAtual === 0){
        slideAtual = slider.length - 1;
    } else {
        slideAtual--;
    }
    mostraSlide();
}

function escondeSlide(){
    slider.forEach(item => item.classList.remove('on'));
}

function mostraSlide(){
    slider[slideAtual].classList.add('on');
}