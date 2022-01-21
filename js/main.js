var titulo = document.querySelector("#titulo");
titulo.textContent = "aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente")
for (var e = 0; e < pacientes.length; e++){
    var paciente= pacientes[e]

    var nome = paciente.querySelector(".info-nome")
    nome = nome.textContent
    var peso = paciente.querySelector(".info-peso")
    peso = peso.textContent
    var altura = paciente.querySelector(".info-altura")
    altura = altura.textContent
    var imc = paciente.querySelector(".info-imc")

    var imc_calc = peso / (altura * altura)


    if (peso <= 0 || peso >= 1000 ){
        imc.textContent = 'peso invalido'
        paciente.classList.add('paciente-ivalido')
        paciente.style.color = 'black'

    }
    else if (altura > 2.5 || altura <= 0){
        imc.textContent = 'altura invalida'
        paciente.classList.add('paciente-ivalido')
        paciente.style.color = 'black'
    }
    else 
        imc.textContent = imc_calc.toFixed(1)
        paciente.style.background = ''
        imc.style.background = 'green'
        imc.style.color = 'white'
}

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

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)

    console.log(pacienteTr)

})
console.log(botaoAdicionar)