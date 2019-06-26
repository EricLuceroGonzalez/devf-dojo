var div = document.getElementById('js-prct2');
var btn = document.createElement('button');

document.getElementById('js-prct2').appendChild(btn);

btn.textContent = 'Print current window';
btn.style.fontSize = '1.5em';
btn.style.padding = '1em';
btn.style.borderRadius = '14px';

btn.onclick = function(){
    window.print();  // Manda a imprimir a la impresora.
}