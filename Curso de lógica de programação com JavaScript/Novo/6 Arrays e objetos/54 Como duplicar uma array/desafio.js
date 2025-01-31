
const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const hoje = new Date();
const diaDeHoje = diasDaSemana[hoje.getDay()];
console.log(diaDeHoje);
