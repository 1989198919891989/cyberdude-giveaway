const mainEl = document.querySelector('main');
const successfulUiEl = document.getElementById('formSubmitted');

const formEl = document.querySelector('form');
import conditionList from "./conditions.data.js"; 
const conditionContainerEl = document.getElementById('conditions')

// console.log(conditionList);
; (function injectConditions() {
    const fragment = document.createDocumentFragment()

    // looping all condition list
    conditionList.forEach((condition) => {
        const liEl = document.createElement('li')

        liEl.textContent = condition

        fragment.appendChild(liEl);
    });
    conditionContainerEl.appendChild(fragment);

})()



const validateForm = () => {

    const formInputsEl = formEl.querySelectorAll('input, textarea, select');
    let isFormDirty = true

    formInputsEl.forEach((field) => {



        if (!field.hasAttribute('required')) {
            field.required = true
            isFormDirty = false;
        }


    });
    return isFormDirty;

}

const submitForm = (e) => {
    e.preventDefault()

    if (validateForm()) {
        console.log('validation Suceeds')


        const formDate = new FormData(formEl);
        const recordObj = Object.fromEntries(formDate)

        createRecord(recordObj);

        // updated ul logic
        // updateUi();

    }

}

const updateUi = () => {
    // update ui
    mainEl.classList.add('hidden');
    successfulUiEl.classList.remove('hidden')

}

formEl.addEventListener('submit', submitForm);