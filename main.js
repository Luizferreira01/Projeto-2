const form = document.getElementById('form-adiciona');

let linhas = ' ';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarlinha();
    atualizartabela();

});

function adicionarlinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (Contatos.includes(inputNomeContato.value)){
        alert('o contato: ${inputNomeContato.value}ja foi adicionado');
    } else {
        contatos.push(inputNomeContato.value);
        numero.push(inputNumeroContato.value);

        let linha = '<tr>'
            linha +=
    }
}