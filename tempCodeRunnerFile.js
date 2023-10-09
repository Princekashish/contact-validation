function checkcfpass() {
    if (passwordIn.value !== cfpassin.value || cfpassin.value === '') {
        return cfpass.classList.add('invalid');
    }
    else {
        return cfpass.classList.remove('invalid');

    }
}
