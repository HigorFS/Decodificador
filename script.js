var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");

function criptografar() {
    var text = textInput.value;
    var resultCripto = text.replace(/e/g, "enter").replace(/i/g, "imens").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultCripto + '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var text = textInput.value;
    var resultDescripto = text.replace(/enter/g, "e").replace(/imens/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultDescripto + '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textCop = document.getElementById('output').querySelector('textarea');
    textCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}