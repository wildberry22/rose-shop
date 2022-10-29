import shadow from "./shadow.js";

export default function closeModal() {
  window.addEventListener('click', e => {
    if(e.target.dataset.modal === 'close' || e.target.closest('[data-modal="close"]') || e.target == document.querySelector('[data-modal=""]')) {
      shadow('deactivate');
      document.querySelector('[data-modal=""]').classList.remove('active');
      setTimeout(() => {
        document.querySelector('[data-modal=""]').remove();
      }, 600);
    }
  });
}
