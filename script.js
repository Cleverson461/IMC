/*

  Dada um lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o calculo de IMC


  peso / (altura * altura)

*/

const pacientes = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 1.9,
  },
  {
    name: "Vinicius",
    age: 24,
    weight: 100,
    height: 1.9,
  },
  {
    name: "Carlos",
    age: 32,
    weight: 90,
    height: 1.5,
  },
  {
    name: "Vini",
    age: 54,
    weight: 60,
    height: 1.7,
  },
];

function imc(paciente) {
  return `
  Paciente: ${paciente.name} possui o IMC de 
  ${(paciente.weight / (paciente.height * paciente.height)).toFixed(2)}`;
}

for (let paciente of pacientes) {
  let IMCmessage = imc(paciente);
  alert(IMCmessage);
}
