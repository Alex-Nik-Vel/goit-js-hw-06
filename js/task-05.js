const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value.trim());
    event.currentTarget.value === "" ? refs.span.textContent = 'Anonymous'
        : refs.span.textContent = event.currentTarget.value.trim();
    }