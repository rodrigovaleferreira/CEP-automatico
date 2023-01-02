async function buscadorDeCEP(cep){
    
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";
    try {

    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPconvertida = await consultaCEP.json()
    if(consultaCEPconvertida.erro){
        throw Error ('CEP não existente!')
    }
    var cidade = document.getElementById('cidade')
    var logradoro = document.getElementById('endereco')
    var estado = document.getElementById('estado')
    var bairro = document.getElementById('bairro')

    cidade.value = consultaCEPconvertida.localidade
    logradoro.value = consultaCEPconvertida.logradouro
    estado.value = consultaCEPconvertida.uf
    bairro.value = consultaCEPconvertida.bairro
    
    console.log(consultaCEPconvertida)
    return consultaCEPconvertida

} catch(erro){
    mensagemErro.innerHTML = `<p>CEP invalido. Tente novamente!</p>`
    console.log(erro)
}
}

/*let ceps = ['36070650', '01001001'];
let conjuntoCeps = ceps.map(valores => buscadorDeCEP(valores))
Promise.all(conjuntoCeps).then(respostas =>console.log( respostas))**/

var cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscadorDeCEP(cep.value))
