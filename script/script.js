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
    let a;
    let b;
    if(indexSelecionado === 0){
        if(!(check[1].classList.contains('checkbox-selecionado')) && !(check[2].classList.contains('checkbox-selecionado'))){
            for(let j = 0; j < check.length; j++){
                check[j].classList.add('checkbox-selecionado');
                certo[j].style.display = "block";
            }
            
        } else if (check[1].classList.contains('checkbox-selecionado') && !(check[2].classList.contains('checkbox-selecionado'))) {
            for(let j = 0; j < check.length; j++){
                check[j].classList.remove('checkbox-selecionado');
                certo[j].style.display = "none";
                traco.style.display = "none";
            }
        } else if (check[2].classList.contains('checkbox-selecionado') && !(check[1].classList.contains('checkbox-selecionado'))){
            for(let j = 0; j < check.length; j++){
                check[j].classList.remove('checkbox-selecionado');
                certo[j].style.display = "none";
                traco.style.display = "none";
            }
        } else  {
            for(let j = 0; j < check.length; j++){
                check[j].classList.remove('checkbox-selecionado');
                certo[j].style.display = "none";
            }
        }
    } else {
        if(indexSelecionado === 1){
            a = 1;
            b = 2;
        } else {
            a = 2;
            b = 1;
        }
        if(!(check[0].classList.contains('checkbox-selecionado')) && !(check[b].classList.contains('checkbox-selecionado'))){
            check[a].classList.add('checkbox-selecionado');
            check[0].classList.add('checkbox-selecionado');
            certo[a].style.display = "block";
            traco.style.display = "block";
                
        } else if (check[0].classList.contains('checkbox-selecionado') && check[b].classList.contains('checkbox-selecionado')){
            if(check[a].classList.contains('checkbox-selecionado')){
                check[a].classList.remove('checkbox-selecionado');
                certo[a].style.display = 'none';
                certo[0].style.display = 'none';
                traco.style.display = 'block'
            } else {
                check[a].classList.add('checkbox-selecionado');
                certo[a].style.display = "block";
                traco.style.display = 'none';
                certo[0].style.display = 'block';
            }
        } else if ((check[0].classList.contains('checkbox-selecionado') && !(check[b].classList.contains('checkbox-selecionado')))){
            check[a].classList.remove('checkbox-selecionado');
            certo[a].style.display = "none";
            check[0].classList.remove('checkbox-selecionado');
            traco.style.display = "none";
        }
    
    }
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
    textoSelect.innerHTML = itemSelecionado
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
function ativaBotao(){
    if(campos[0].value.length !== 0 && nomeRegEx.test(campos[0].value)){
        if(campos[1].value.length !== 0 && emailRegEx.test(campos[1].value)){
            if(mensagemDeErro[2].style.display === 'none'){
                if(radio[0].classList.contains('radio-selecionado') || radio[1].classList.contains('radio-selecionado') || radio[2].classList.contains('radio-selecionado')){
                  if(textoSelect.textContent !== '--Escolher opções--'){
                    if(check[0].classList.contains('checkbox-selecionado')){
                        if(areaDeTexto.value.length >= 5){
                            botao.disabled = false;
                        } else {
                            botao.disabled = true;
                        }
                    } else {
                       botao.disabled = true;
                    }
                } else {
                   botao.disabled = true;
                }  
            }  else {
               botao.disabled = true;
            }
        } else{
           botao.disabled = true;
        }
    } else {
       botao.disabled = true;
    }
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