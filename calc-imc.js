// fórmula do imc
// peso / (altura*altura)

// selecionando botão e divResultado
const btn = document.getElementById("submit");
const resultado = document.getElementById("resultado");
const btnLimpar = document.getElementById("limpar");

// função que calcula o IMC do User
function calcularIMC(event) {
  // prevenindo comportamento padrão do botão submit
  event.preventDefault();

  // pegando valores de altura e peso e calculando imc
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const imc = peso / (altura * altura);

  //estrutura condicional
  if (isNaN(imc)) {
    resultado.textContent = `Por favor preencha os campos corretamente.`;
  } else if (imc <= 18.5) {
    resultado.textContent = `Seu IMC é: ${imc.toFixed(
      2
    )} e você está com Magreza.`;
  } else if (imc > 18.5 && imc < 25) {
    resultado.textContent = `Seu IMC é: ${imc.toFixed(
      2
    )} e você está com peso Normal.`;
  } else if (imc >= 25 && imc < 29.9) {
    resultado.textContent = `Seu IMC é: ${imc.toFixed(
      2
    )} e você está com Sobrepeso.`;
  } else if (imc >= 29.9 && imc < 40) {
    resultado.textContent = `Seu IMC é: ${imc.toFixed(
      2
    )} e você está com Obesidade.`;
  } else if (imc >= 40) {
    resultado.textContent = `Seu IMC é: ${imc.toFixed(
      2
    )} e você está com Obesidade Grave.`;
  }
}
// função que limpa os campos
function limparCampo(event) {
  event.preventDefault();
  peso.value = "";
  altura.value = "";
  resultado.textContent = "";
}
// eventListener ao botões calcular e limpar
btn.addEventListener("click", calcularIMC);
btnLimpar.addEventListener("click", limparCampo);
