// quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item ckicado e remova dos
// demais intes caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefaul();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
}


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicado


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumenta todo o texto do site.
