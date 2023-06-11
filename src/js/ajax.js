const formBtn = document.querySelector('.form__btn');
const formInput = document.querySelector('.form__input');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal__title');
const modalText = document.querySelector('.modal__text');
const closeBtns = document.querySelectorAll('[data-close-btn]')
const form = document.getElementById('form');

//функция проверки введенной почты
function verifyEmail(email) {
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return emailRegex.test(email);
}

//проверка введенной почты и отправка на "сервер"
//будет всегда выдавать ошибку, так как нет url сервера, принимающего запрос
form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const URL = 'url'
    let response = await fetch(URL, {
        method: 'POST',
        body: formData,
    });
    if (verifyEmail(formInput.value) && response.ok) {
        modalTitle.textContent = "SUCCESS!";
        modalText.textContent = "You have successfully subscribed to the email newsletter";
        modal.showModal();
    } else if(!response.ok) {
        modalTitle.textContent = "FAIL!";
        modalText.textContent = "Subscription failed. Server error";
        modal.showModal();
    } else {
        modalTitle.textContent = "FAIL!";
        modalText.textContent = "Subscription failed. PLease check your email";
        modal.showModal();
    }
    // console.log(formData.get('mail'))
    
}



// form.onsubmit = async (e) => {
//     e.preventDefault();
//     if (verifyEmail(formInput.value)) {
//         modalTitle.textContent = "SUCCESS!";
//         modalText.textContent = "You have successfully subscribed to the email newsletter";
//         const formData = new FormData(form);
//         let response = await fetch('url', {
//             method: 'POST',
//             body: formData,
//         });
//         modal.showModal();
//     } else {
//         modalTitle.textContent = "FAIL!";
//         modalText.textContent = "Subscription failed. PLease check your email";
//         modal.showModal();
//     }
// }




closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.close();
    })
});
