export default function toTop() {
  const btn = document.querySelector('.to-top');

  window.addEventListener('scroll', () => scrollFunction());

  function scrollFunction() {
    if(window.innerWidth >= 480) {
      if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    } else {
      if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
    
  }

}