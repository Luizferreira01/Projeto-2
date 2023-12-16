const form = document.getElementById('form-adiciona');
const numero = document.getElementById('numerodetelefone');
const nome = document.getElementById('nomedocontato');
const regristro = document.getElementById('camporegistrado');
const erro = document.getElementById('campocomerro')

function registrarcampo(nome, numero){
    return nome = numero;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = registrarcampo(numero.valueAsNumber, nome.valueAsNumber)
    if(validarForm){
        acerto.style.display = 'block';
        numero.value='';
        nome.value='';
    }
})

numero.addEventListener('keyup', function(e){
    let validarForm = registrarcampo(numero.valueAsNumber, nome.valueAsNumber)
    if(!validarForm){
        erro.style.display = 'block';
        acerto.style.display = 'none';
    } else{
        erro.style.display = 'none';
    }

})

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
            linha += `<td>${inputNomeContato.value}</td>`;
            linha += `<td>${inputNumeroContato.value}<td>`;
            linha += '</tr>';

            linhas += linha;
    }
    inputNomeContato.value = ' ';
    inputNumeroContato.value = ' ';
    }

function atualizatabela() {
    const corpotabela = document.getElementById('tbody');
    corpotabela.innerHTML =linhas;
    
}

