const radio = document.querySelectorAll('.radiobutton-item-circulo');

for (let i = 0; i < radio.length; i++){
    radio[i].addEventListener('click', marcar);

    function marcar(){
        radio[i].classList.toggle('radio-selecionado');
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