function helloWorld() {
    document.write('olá mundo');
}
helloWorld();

function helloWorld(nome) {
    return document.write('<br> Olá Mundo, meu nome é' + nome);
}
helloWorldNome('Ruben');


function calcularAreaRetangulo(base, altura) {
    var area = base * altura;
    return document.write('<br> Area do retangulo é ' + area);
}
var retangulo = calcularAreaRetangulo(18, 28);
//funçao que retorna valor numerico
function calcularAreaTriangulo(base, altura) {
    var area = base * altura / 2;
    //exibir o resultado
    return document.write('<br> Area do triangulo é' + area);

}
//podemos chamar funçoes e atribuir valores
var triangulo = calcularAreaTriangulo(18, 28);

function calcularAreaVolume(altura, largura, profundidade) {
    var area = altura * largura;
    var volume = altura * largura * profundidade;
    var ResultadoAreaVolume = [area, volume];
    return ResultadoAreaVolume;
}
//Utilizando a funçao e armazenando a posiçao desejada do array
var calculoCaixaArea = calculoAreaVolume(10,20,30)[0];
var calculoCaixaVolume = calculoAreaVolume(10,20,30)[0];
//exibindo resultados 
document.write('<br> Area da Caixa é: ' + calculoCaixaArea);
document.write('<br> Volume da Caixa é: ' + calculoCaixaVolume);
/* Podemos chamar a funçao diretamente na declaraçao da variavel.
isso e uma funçao anônima.*/
var areaCaixa = (function(){
    var calculoarea = 10 * 20;
    return calculoarea;
}());
//exibindo o resultado
document.write('<br> Afunçao Anonima faz a mesma coisa: ' + areaCaixa);
