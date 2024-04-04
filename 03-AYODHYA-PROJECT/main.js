// change nav style on scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
})

// contact buttons (circular text buttons)
const textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');

    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style = "transform: rotate(${index * 12}deg)"> ${character}</span>`).join('')
})


//SWIPER JS(GALLERY SECTION)
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  const nav = document.querySelector(',nav_links');
  const openNavBtn = document.querySelector('#nav-toggle-open');
  const closeNavBtn = document.querySelector('#nav-toggle-close');
  const openNav = () =>{
    navstyle.display='flex';
    openNavBtn.computedStyleMap.display ='none';
    closeNavBtn.computedStyleMap.display='inline_block'
  
  }
  openNavBtn.addEventListener('click',openNav);
  const closeNav = () =>{
    navstyle.display='none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
  }

  closeNavBtn.addEventListener('click',closeNav);
  nav.querySelectorAll('li a') .forEach(navlink => {
    Navlink.addEventListener('click',closeNav)
})