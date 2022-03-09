const tabmenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classLista.add('ativo');

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.add('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabmenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click',)
});