export default function forms (loadingMsg = "Завантаження...", successMsg = "Дякуємо за вашу заявку. Ми зв'яжемося з вами найближчим часом!", failureMsg = "Щось пішло не так...") {
  const form = document.querySelectorAll('form');
  const input = document.querySelectorAll('input');
  let valid = false;

  const message = {
    loading: loadingMsg,
    success: successMsg,
    failure: failureMsg
  };

  const postData = async (url, data) => {
    document.querySelector('.modal__text').classList.add('hide');
    document.querySelector('.status').textContent = message.loading;

    let res = await fetch(url, {
      method: 'POST',
      body: data
    });

    return await res.text();
  };

  const clearInputs = () => {
    input.forEach(item => {
        item.value = '';
    });
  };


  form.forEach(item => { 
    item.addEventListener('submit', e => {
      e.preventDefault();

      // validation check
      valid = false;
      if (document.querySelector('.modal__input--phone').value.length == 19) {
        valid = true;
        try {
          document.querySelector('.phone-error').remove();
        } catch (error) {}
      } else {
        if (!document.querySelector('.phone-error')) {
          const phoneErrMsg = document.createElement('div');
          phoneErrMsg.classList.add('phone-error');
          phoneErrMsg.innerText = 'Номер телефону введено неправильно!';
          document.querySelector('.modal__input--phone').after(phoneErrMsg);
        }
      }
      
      if (valid) {
        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.replaceWith(statusMessage);
  
        const formData = new FormData(item);
  
        postData('./server.php', formData)
          .then(res => {
            console.log(res);
            
            document.querySelector('.modal__text').classList.add('hide');
            statusMessage.textContent = message.success;  
            statusMessage.classList.add('ok');
          })
          .catch(() => {
            document.querySelector('.modal__text').classList.add('hide');
            statusMessage.textContent = message.failure;
            statusMessage.classList.add('error');
          })
          .finally(() => {
            clearInputs();
        });
      }

    });
  });
}