const form = document.querySelector("form");
const email = form.querySelector("#email");
const in_email = email.querySelector(".in-email");
const password = form.querySelector('#password');
const passwordIn = password.querySelector('.password');
const cfpass = form.querySelector('#cfpassword');
const cfpassin = cfpass.querySelector('.cfpass');


// const con1=document.querySelector("contaner1");
// con1.addEventListener('click',()=>{)
// email
function checkemail() {
    const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (!in_email.value.match(pattern)) {
        return email.classList.add("invalid");

    }
    email.classList.remove("invalid");

}
// pass
function checkpass() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordIn.value.match(passwordPattern)) {
        return password.classList.add('invalid');
    }
    password.classList.remove('invalid');
}


// cfpass
function checkcfpass() {
    if (passwordIn.value !== cfpassin.value || cfpassin.value === '') {
        return cfpass.classList.add('invalid');
    }
    else {
        return cfpass.classList.remove('invalid');

    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkemail();
    checkpass();
    checkcfpass();
    in_email.addEventListener('keyup', checkemail);
    passwordIn.addEventListener('keyup', checkpass);
    cfpassin.addEventListener('keyup' , checkcfpass);
});

