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

    var imc_calc = calculaImc(peso, altura)


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
        imc.textContent = imc_calc
        paciente.style.background = ''
        imc.style.background = 'green'
        imc.style.color = 'white'
}
function calculaImc (peso, altura){
    var imc_calc = 0
    imc_calc = peso / (altura * altura)
    return imc_calc.toFixed(1)
}
