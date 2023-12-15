form.addEventListener('submit', function (e) {
    e.preventDefault();

    let validarform = registrado(nome.value, contato, value);
    if (validarform) {
        acerto.style.display = 'block';
        nome.value = '';
        numero.value = '';
    }
});
