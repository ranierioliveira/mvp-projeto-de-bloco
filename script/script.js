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
const mensagemDeValidacao = document.querySelectorAll('.span-required')

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

// Faz a marcação dos elementos do radio button
for(let i = 0; i < radio.length; i++){
    radio[i].addEventListener('click', marcarElementoDoRadio);

    function marcarElementoDoRadio(){
        this.classList.toggle('radio-selecionado');
        if(i === 0){
            radio[1].classList.remove('radio-selecionado');
            radio[2].classList.remove('radio-selecionado');
        } else if (i === 1){
            radio[0].classList.remove('radio-selecionado');
            radio[2].classList.remove('radio-selecionado');
        } else if (i === 2){
            radio[0].classList.remove('radio-selecionado');
            radio[1].classList.remove('radio-selecionado');
        }
    }
}

//Faz a marcação do checkbox no índice 0
check[0].addEventListener('click', marcarElementoDoCheckboxIndice0);

function marcarElementoDoCheckboxIndice0(){
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
}


//Faz a marcação do índice 1 e 2 do checkbox
for(let c = 1; c < check.length; c++){
    check[c].addEventListener('click', marcarElementoDoCheckboxIndice1e2);
    let a;
    let b;

    if(c === 1){
        a = c;
        b = c + 1;
    } else {
        a = c;
        b = c - 1;
    }

    function marcarElementoDoCheckboxIndice1e2(){
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

function exibirMenuSelect(){
    if(selectOpcoes.style.display === 'none'){
        selectOpcoes.style.display = 'block';
    } else {
        selectOpcoes.style.display = 'none';
    }
}

for(let j = 0; j < selectItem.length ; j++){
    selectItem[j].addEventListener('click', selecionaOpcaoDoSelect);

    function selecionaOpcaoDoSelect(){
        const selecionado = selectItem[j].textContent;
        textoSelect.innerHTML = selecionado;
    }
}

function retiraParentesesTracosEspacos(telefone){
    const semEspaco = telefone.replace(' ', '');
    const semPrimeiroParentese = semEspaco.replace('(', '');
    const semSegundoParentese = semPrimeiroParentese.replace(')', '');
    const semTraco = semSegundoParentese.replace('-', '')
    return semTraco;
}

function validaTelefone(){
    const telefoneFormatado = retiraParentesesTracosEspacos(campos[2].value);
    if( telefoneFormatado.length == 11){
        campos[2].value = telefoneFormatado;
        mensagemDeValidacao[2].style.display = 'none';
    } else {
        mensagemDeValidacao[2].style.display = 'block';
    }
}