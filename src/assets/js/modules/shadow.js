import calcScroll from "./calcScroll.js";

export default function shadow(activateOrDeactivate = 'deactivate') {
  const shadow = document.querySelector('.shadow');
  const scroll = calcScroll();

  if (activateOrDeactivate == 'activate') {
    shadow.classList.add('active');
    document.body.style.overflowY = 'hidden';
    document.body.style.marginRight = scroll + 'px';
  } else if (activateOrDeactivate == 'deactivate') {
    shadow.classList.remove('active');
    setTimeout(() => {
      document.body.style.overflowY = 'auto';
      document.body.style.marginRight = 0;
    }, 200);
  } else {
    return 0;
  }
}


