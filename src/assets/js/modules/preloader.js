
export default function preloader() {
  const preloaderElem = document.querySelector('.preloader-bg');

  preloaderElem.style.opacity = '0';
  setTimeout(() => {
    preloaderElem.style.display='none';
  }, 500);
}