// quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais intes caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefaul();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicado
// const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
  event.currentTarget.remove();
}

// todosElementos.forEach((elemento) => {
// elemento.addEventListener('click', handleElemento);
//})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
  event.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})

// Se o usuário clicar na tecla (t), aumenta todo o texto do site.

function handleClickT(event) {
  console.log(event.key);
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleClickT);