// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const refs = {
    input: document.querySelector('#validation-input'),
    style: document.getElementById("validation-input"),
}

refs.input.addEventListener('blur', onInputBlur);
let dataLength;

function onInputBlur(event) {
    console.log('data-length:',Number(refs.input.dataset.length))
    dataLength = event.currentTarget.value.trim().length
    console.log("Disable focus - Blur:", 'dataLength =', dataLength);
        
    if (dataLength === Number(refs.input.dataset.length)) {
        refs.style.classList.remove("invalid");
        refs.style.classList.add("valid")
    }
    else {
        refs.style.classList.remove("valid");
        refs.style.classList.add("invalid")
    };
}
    




    