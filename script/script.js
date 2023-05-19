const menu = document.querySelector('.menu');
const radio = document.querySelectorAll('.radiobutton-item-circulo');
const check = document.querySelectorAll('.checkbox-item-selecao');
const certo = document.querySelectorAll('.check');
const traco = document.querySelector('.remove');

// Ativar / desativar menu no mobile
function clicarMenuMobile(){
    if(menu.style.display === 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

// Fazer o menu aparecer quando aumentar para telas maiores de 768px
function mudouTamanho(){
    if(window.innerWidth > 768){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

// Fazer a marcação dos elementos do radio button
for (let i = 0; i < radio.length; i++){
    radio[i].addEventListener('click', marcar);

    function marcar(){
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

//Fazer a marcação do checkbox respeitando algumas condições
for(let i = 0; i < check.length; i++){
    check[i].addEventListener('click',  marcarCheck);

    function marcarCheck(){
        if(i === 0){
            //detecta se os elementos não estão selecionados
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

        } else if (i === 1){
            if(!(check[0].classList.contains('checkbox-selecionado')) && !(check[2].classList.contains('checkbox-selecionado'))){
                check[i].classList.add('checkbox-selecionado');
                check[0].classList.add('checkbox-selecionado');
                certo[i].style.display = "block";
                traco.style.display = "block";

            } else if (check[0].classList.contains('checkbox-selecionado') && check[2].classList.contains('checkbox-selecionado')){
                if(check[i].classList.contains('checkbox-selecionado')){
                    check[i].classList.remove('checkbox-selecionado');
                    certo[i].style.display = 'none';
                    certo[0].style.display = 'none';
                    traco.style.display = 'block'
                } else {
                    check[i].classList.add('checkbox-selecionado');
                    certo[i].style.display = "block";
                    traco.style.display = 'none';
                    certo[0].style.display = 'block';
                }
            } else if ((check[0].classList.contains('checkbox-selecionado') && !(check[2].classList.contains('checkbox-selecionado')))){
                check[i].classList.remove('checkbox-selecionado');
                certo[i].style.display = "none";
                check[0].classList.remove('checkbox-selecionado');
                traco.style.display = "none";
            } 

        } else if (i === 2){
            if(!(check[0].classList.contains('checkbox-selecionado')) && !(check[1].classList.contains('checkbox-selecionado'))){
                check[i].classList.add('checkbox-selecionado');
                check[0].classList.add('checkbox-selecionado');
                certo[i].style.display = "block";
                traco.style.display = "block";

            } else if (check[0].classList.contains('checkbox-selecionado') && check[1].classList.contains('checkbox-selecionado')){
                if(check[i].classList.contains('checkbox-selecionado')){
                    check[i].classList.remove('checkbox-selecionado');
                    certo[i].style.display = 'none';
                    certo[0].style.display = 'none';
                    traco.style.display = 'block'
                } else {
                    check[i].classList.add('checkbox-selecionado');
                    certo[i].style.display = "block";
                    traco.style.display = 'none';
                    certo[0].style.display = 'block';
                }
            } else if ((check[0].classList.contains('checkbox-selecionado') && !(check[1].classList.contains('checkbox-selecionado')))){
                check[i].classList.remove('checkbox-selecionado');
                certo[i].style.display = "none";
                check[0].classList.remove('checkbox-selecionado');
                traco.style.display = "none";
            } 
        }
    }
}
