const mainEl = document.querySelector('main');
const successfulUiEl = document.getElementById('formSubmitted');

const formEl = document.querySelector('form');




const submitForm = (e) => {
    e.preventDefault()

    const formDate = new FormData(formEl);
    const recordObj = Object.fromEntries(formDate)

    createRecord(recordObj);

    // updated ul logic
    updateUi();

}

const updateUi = () => {
    // update ui
    mainEl.classList.add('hidden');
    successfulUiEl.classList.remove('hidden')

}

formEl.addEventListener('submit', submitForm);