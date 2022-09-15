// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);
const defValue = refs.span.textContent;
function onInputChange(event) {
    console.log(event.currentTarget.value.trim());
    event.currentTarget.value === "" ? refs.span.textContent = defValue
        : refs.span.textContent = event.currentTarget.value.trim();
    }