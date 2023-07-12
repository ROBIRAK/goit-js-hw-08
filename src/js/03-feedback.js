const formEl = document.querySelector('form');
let objectForm = {};
formEl.addEventListener('input', (event) => {
    objectForm[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(objectForm))
    console.log(objectForm);
})
const formData = JSON.parse(localStorage.getItem("feedback-form-state"))

if (formData) {
    objectForm.email = formData.email || "";
    objectForm.message = formData.message || "";
    document.querySelector('input').value = objectForm.email;
    document.querySelector('textarea').value = objectForm.message;
}

formEl.addEventListener('submit', (event) => {
    formEl.reset();
    objectForm = {};
    localStorage.removeItem("feedback-form-state");
})