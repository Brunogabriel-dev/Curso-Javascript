function initTabNav() {
const tabmenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabmenu.length && tabContent.lenght) {
tabContent[0].classLista.add('ativo');

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.add('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabmenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click',() => {
    activeTab(index);
  });
});
}
}
initTabNav();

function initAccordion() {
const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo';
if(accordionList.length) {
accordionList[0].classList.add(activeClass);
accordionList[0].nextElementSibling.classList.add(activeClass);

function activeAccordion() {
  this.classList.toggle(activeClass);
  this.nextElementSibling.classList.toggle(activeClass);
  console.log(this);
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});
}
}
initAccordion();