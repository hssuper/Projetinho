var subtotal = (13+1)*5;
var frete = 0.5 * (13+1);
var total = subtotal + frete;
var real = 'R$: ';


var subResultado = document.getElementById('subtotalvalor');
subResultado.textContent += real + subtotal;

var freteResultado = document.getElementById( 'fretevalor');
freteResultado.textContent += real + frete;

var totalResultado = document.getElementById('totalvalor');
totalResultado.textContent += real + total;