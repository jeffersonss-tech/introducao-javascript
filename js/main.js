var titulo = document.querySelector('.titulo')
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector('#primeiro_paciente')

var tdaltura = paciente.querySelector('.info-altura')
var tdpeso = paciente.querySelector('.info-peso')
var tdnome = paciente.querySelector('.info-nome')
tdnome = tdnome.textContent = 'jeferson'
tdaltura = tdaltura.textContent = '1.65'
tdpeso = tdpeso.textContent = '60'
var imc = paciente.querySelector('.info-imc')
var  calculo = tdpeso / (tdaltura * tdaltura)

if (tdpeso <= 0 || tdaltura <= 0 || tdpeso > 400 || tdaltura > 2.00){
    imc.textContent = 'peso e/ou altura inválido(s)'
}
else {
    imc.textContent = calculo.toFixed(1)
    console.log('o imc de', tdnome, 'é',calculo)
}
