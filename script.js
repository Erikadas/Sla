//botao nao//
function fuja() {
    


var botaoNao = document.getElementById("nao")

var alturaJanela = window.innerHeight;
var larguraJanela = window.innerWidth;

var maxHeight = alturaJanela - botaoNao.offsetHeight;
var maxWidth = larguraJanela - botaoNao.offsetWidth;

var aleatorioX = Math.floor(Math.random() * maxWidth);
var aleatorioY = Math.floor(Math.random() * maxHeight);

botaoNao.style.left = aleatorioX + "px";
botaoNao.style.top = aleatorioY + "px";
}
