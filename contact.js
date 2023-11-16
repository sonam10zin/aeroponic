const button = document.getElementById('button-addon2');
const inputField = document.querySelector('.form-control');


button.addEventListener('click', function () {
    alert('submitted!')
    inputField.value = "";
}); 