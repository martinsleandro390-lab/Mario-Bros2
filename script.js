const formulario = document.querySelector('.formulario-fale-conosco');
const mascara = document.querySelector('.mascara-formulario');

function cliqueiNoBotao() {
    formulario.style.left = '500px';
formulario.style.transform = 'translatey(-50%)';
mascara.style.visibility = 'visible';
}
function fecharformulario() {
    formulario.style.left = '-330px';   
    formulario.style.transform = 'translatey(-50%)';
    mascara.style.visibility = 'hidden';}


