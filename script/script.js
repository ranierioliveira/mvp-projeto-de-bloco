const radio = document.querySelectorAll('.radiobutton-item-circulo');
const menu = document.querySelector('.menu');

for (let i = 0; i < radio.length; i++){
    radio[i].addEventListener('click', marcar);

    function marcar(){
        radio[i].style.backgroundColor = "#2D2321";
        radio[i].style.boxShadow = "2px 2px 2px #1003005d";
        // if(i === 0){
        //     radio[1].classList.remove('radio-selecionado');
        //     radio[1].classList.remove('radio-selecionado')
        //     radio[2].classList.remove('radio-selecionado');
        //     radio[1].classList.remove('radio-selecionado')
        // } else if (i === 1){
        //     radio[0].classList.remove('radio-selecionado');
        //     radio[2].classList.remove('radio-selecionado');
        //     radio[0].classList.remove('radio-selecionado');
        //     radio[2].classList.remove('radio-selecionado');
        // } else if (i === 2){
        //     radio[0].classList.remove('radio-selecionado');
        //     radio[1].classList.remove('radio-selecionado');
        //     radio[0].classList.remove('radio-selecionado');
        //     radio[1].classList.remove('radio-selecionado');
        // }
    }

    // function marcar(){
    //     radio[i].classList.add('radio-selecionado');
    //     if(i === 0){
    //         radio[1].classList.remove('radio-selecionado');
    //         radio[2].classList.remove('radio-selecionado');
    //     } else if (i === 1){
    //         radio[0].classList.remove('radio-selecionado');
    //         radio[2].classList.remove('radio-selecionado');
    //     } else if (i === 2){
    //         radio[0].classList.remove('radio-selecionado');
    //         radio[1].classList.remove('radio-selecionado');
    //     }
    // }
}

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