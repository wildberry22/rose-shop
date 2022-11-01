export default function counter() {
  window.addEventListener('click', e => {
    if(e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus' || e.target.closest('[data-action="plus"]') || e.target.closest('[data-action="minus"]')) {
      const counterWrapper = e.target.closest('[data-counter-wrapper]');
      const counter = counterWrapper.querySelector('[data-counter]');
      
      if(e.target.dataset.action === 'plus' || e.target.closest('[data-action="plus"]')) {
        counter.innerText = ++counter.innerText;
      }
      
      if(e.target.dataset.action === 'minus' || e.target.closest('[data-action="minus"]')) {
        if (+counter.innerText > 1) {
          counter.innerText = --counter.innerText;
        }
      }
    }
  });
}
