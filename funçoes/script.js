function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}
var total = 5 * pi(); // 15.7

console.log(pi());

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

function mostraConsole() {
  console.log('oi')
}

addEventListener('cilck', mostraConsole);


function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc); }

  imc2(20, 1.8); // undefined
  console.log(imc2(1000, 1.80)); // retorna o imc e undefined


function terceiraIdade(idade) {
  if(idade >= 60) {
    console.log('É idoso');
  }
  console.log(idade);
}

terceiraIdade(60)
