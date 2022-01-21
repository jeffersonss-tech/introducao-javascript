
var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()
    
    var form = document.querySelector('#form-adiciona')
    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement('tr')
    
    var nomeTd = document.createElement('td')
    var pesoTd = document.createElement('td')
    var alturaTd = document.createElement('td')
    var gorduraTd = document.createElement('td')
    var imcTd = document.createElement('td')

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura
    
    if (pesoTd <= 0 || pesoTd >= 1000 ){
        imc.textContent = 'peso invalido'
        pacienteTr.classList.add('paciente-ivalido')
        pacienteTr.style.color = 'black'

    }
    else if (alturaTd > 2.5 || alturaTd <= 0){
        imcTd.textContent = 'altura invalida'
        pacienteTr.classList.add('paciente-ivalido')
        pacienteTr.style.color = 'black'
    }
    else 
        imcTd.textContent = calculaImc(peso, altura)
        paciente.style.background = ''
        imcTd.style.background = 'green'
        imcTd.style.color = 'white'

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)

    console.log(pacienteTr)

})