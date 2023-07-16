const mainEl = document.querySelector('main');
const successfulUiEl = document.getElementById('formSubmitted');

const formEl = document.querySelector('form');




const submitForm = (e) => {
    e.preventDefault()
    console.log('Form has been sumited', e)


    const formDate = new FormData(formEl);

    console.log([...formDate.entries()]);
    console.log([...formDate.values()]);

    // updated ul logic
    updateUi();

}

const updateUi = () => {
    // update ui
    mainEl.classList.add('hidden');
    successfulUiEl.classList.remove('hidden')

}

formEl.addEventListener('submit', submitForm);