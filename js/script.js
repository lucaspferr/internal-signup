const spanFullname = document.querySelector('.fullname-span');
const spanPassword = document.querySelector('.password-span');
const spanEmail = document.querySelector('.email-span');
const spanPhone = document.querySelector('.phone-span');
const spanBirthdate = document.querySelector('.birthdate-span');

const inputFullname = document.querySelector('#fullname');
const inputPassword = document.querySelector('#password');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const inputBirthdate = document.querySelector('#birthdate');

const regexFullname = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,}$/;
const regexPassword = /^[0-9]{6,8}$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexPhone = /^[0-9]{11,11}$/;


let phone;

window.onload = function () {
    let date = new Date();
    console.log(date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if(day < 10) {
        day = '0' + day;
    }
    if(month < 10) {
        month = '0' + month;
    }

    let minYear = year - 121;
    let min = minYear + '-' + month + '-' + day;
    console.log(min);
    inputBirthdate.setAttribute('min', min);
}


inputFullname.addEventListener('keyup', (event) => {
    if(!regexFullname.test(event.currentTarget.value)){
        spanFullname.style.display = 'block';
        inputFullname.style.marginBottom = '0px';
    }else{
        spanFullname.style.display = 'none';
        inputFullname.style.marginBottom = '18.4px';
    }});

inputPassword.addEventListener('keyup', (event) => {
    if(!regexPassword.test(event.currentTarget.value)){
        spanPassword.style.display = 'block';
        inputPassword.style.marginBottom = '0px';
    }else{
        spanPassword.style.display = 'none';
        inputPassword.style.marginBottom = '18.4px';
    }});

inputEmail.addEventListener('keyup', (event) => {
    if(!regexEmail.test(event.currentTarget.value)){
        spanEmail.style.display = 'block';
        inputEmail.style.marginBottom = '0px';
    }else{
        spanEmail.style.display = 'none';
        inputEmail.style.marginBottom = '18.4px';
    }});

inputPhone.addEventListener('keyup', (event) => {
    if(!regexPhone.test(event.currentTarget.value)){
        spanPhone.style.display = 'block';
        inputPhone.style.marginBottom = '0px';
    }else if(event.currentTarget.value.length === 11){
        inputPhone.value = '(' + event.currentTarget.value.substring(0, 2) + ') ' + event.currentTarget.value.substring(2, 7) 
        + '-' + event.currentTarget.value.substring(7, 11);
        spanPhone.style.display = 'none';
        inputPhone.style.marginBottom = '18.4px';
    }});

