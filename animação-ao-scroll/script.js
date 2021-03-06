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

  function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrolltoSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    
    // forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    // top: topo,
    // behavior: 'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrolltoSection);
  });
  }
  initScrollSuave();

  function initAnimacaoScroll() {
  const section = document.querySelectorAll('.js-scroll');
  if(section.length) {
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    section.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if(isSectionVisible)
        section.classList.add('ativo');
      else
      section.classList.remove('ativo');
    })
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();

