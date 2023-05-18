const menu = document.querySelector('.menu');
const radio = document.querySelectorAll('.radiobutton-item-circulo');
const check = document.querySelectorAll('.checkbox-item-selecao');
const certo = document.querySelectorAll('.check');
const traco = document.querySelector('.remove');

console.log(check)

function clicarMenuMobile(){
    if(menu.style.display === 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

function mudouTamanho(){
    if(window.innerWidth > 768){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

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
            } else if (check[0].classList.contains('checkbox-selecionado') && check[2].classList.contains('checkbox-selecionado') && !(check[i].classList.contains('checkbox'))){

                check[i].classList.add('checkbox-selecionado');
                certo[i].style.display = "block";
                traco.style.display = "none";
                certo[0].style.display = "block";

            } else if (check[i].classList.contains('checkbox-selecionado') && check[0].classList.contains('checkbox-selecionado')){
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
            } else if (check[0].classList.contains('checkbox-selecionado') && check[1].classList.contains('checkbox-selecionado') && !(check[i].classList.contains('checkbox'))){
                check[i].classList.add('checkbox-selecionado');
                certo[i].style.display = "block";
                traco.style.display = "none";
                certo[0].style.display = "block";
            } else if (check[i].classList.contains('checkbox-selecionado') && check[0].classList.contains('checkbox-selecionado')){
                check[i].classList.remove('checkbox-selecionado');
                certo[i].style.display = "none";
                check[0].classList.remove('checkbox-selecionado');
                traco.style.display = "none";
            }
        }
    }
}
