// скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget.elements;
    console.dir(formElement);
    const mail = formElement.email.value;
    const pass = formElement.password.value; 
     if (mail === '' || pass === '' ) {alert('email or password not entered') 
    };
    const formData = {
        mail,
        pass,
    };
    console.log(formData);
    formEl.reset();

    // const formDataNew = new FormData(event.currentTarget);
    // console.log(formDataNew);
    // formDataNew.forEach((value, name) => {
    //     console.log('onformSubmit -> name', name);
    //     console.log('onformSubmit -> value', value);
    // });
}