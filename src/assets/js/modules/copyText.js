export default function copyText() {
  window.addEventListener('click', e => {
    if (e.target.getAttribute('data-copy') == 'btn' || e.target.closest('[data-copy="btn"]')) {
      let textToCopy;
      if(e.target.getAttribute('data-copy') == 'btn') {
        textToCopy = e.target.parentNode.querySelector('[data-copy="text"]').innerText;
      } else if (e.target.closest('[data-copy="btn"]')) {
        textToCopy = e.target.closest('[data-copy="btn"]').parentNode.querySelector('[data-copy="text"]').innerText;
      }
  
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();

      const wrapper = e.target.closest('[data-copy="wrapper"]');
      wrapper.classList.add('text-copied');
      setTimeout(() => {
        wrapper.classList.remove('text-copied');
      }, 2000);
    }
  });
}