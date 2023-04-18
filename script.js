var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");

function Criptografar(){
	var texto = textInput.value;
	
	var resultCripto = texto.replace(/e/g, "Elena").replace(/i/g, "Ignis").replace(/a/g, "Aerith").replace(/l/g, "Lightning").replace(/k/g, "Kaine");

	document.getElementById('output').innerHTML = '<textarea readonly id"input-text">' + resultCripto + 
	'</textarea>' + '<button class="bt-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function Descriptografar(){
	var texto = textInput.value;

	var resultDescripto = texto.replace(/Elena/g, "e").replace(/Ignis/g, "i").replace(/Aerith/g, "a").replace(/Lightning/g, "l").replace(/Kaine/g, "k");
	document.getElementById('output').innerHTML = '<textarea readonly id"input-text">' + resultDescripto + 
	'</textarea>' + '<button class="bt-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar(){
	var textoCop = document.getElementById('input-text');

	textoCop.select();
	document.execCommand('copy');
	alert("Done!");
}