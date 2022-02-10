// Crie uma função para verificar se um valor é truthy
function isTruthy(dado) {
  return !!dado;
}
// Crie uma função matemática que retorne o perimetro de um quadrado
// lembrando: perimetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorna o seu completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(name, sobrenome) {
  return `${nome} ${sobrenome}`;
}


// Crie uma função que verifica se um número é par
function isEven(numero) {
  var modulo = numero % 2;
  if(modulo === 0) {
    return true;
  }
}


// Crie uma função que retorna a tipo de
// dado do argumento passado nela (typeof)
function tipoDedado(dado) {
  return typeof dado;
}


// addeventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function() {
  console.log('André Rafael');
});

// Corrija o erro abaixo
var totalPaises = 196;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados}países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `já visitei ${paisesVisitados} do total de ${totalPaises} paises`
}

precisoVisitar(20);