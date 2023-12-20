import entradaDados from "readline-sync";

const listaSalarioAnual = [
  { salario: 510.00, ano: 2010},
  { salario: 545.00, ano: 2011},
  { salario: 622.00, ano: 2012},
  { salario: 678.00, ano: 2013},
  { salario: 724.00, ano: 2014},
  { salario: 788.00, ano: 2015},
  { salario: 880.00, ano: 2016},
  { salario: 937.00, ano: 2017},
  { salario: 954.00, ano: 2018},
  { salario: 998.00, ano: 2019},
  { salario: 1045.00, ano: 2020}
];

const listaIpcaAnual = [
  { ipca: 5.91, ano: 2010},
  { ipca: 6.50, ano: 2011},
  { ipca: 5.84, ano: 2012},
  { ipca: 5.91, ano: 2013},
  { ipca: 6.41, ano: 2014},
  { ipca: 10.67, ano: 2015},
  { ipca: 6.29, ano: 2016},
  { ipca: 2.95, ano: 2017},
  { ipca: 3.75, ano: 2018},
  { ipca: 4.31, ano: 2019},
  { ipca: 4.52, ano: 2020}
];

// escolhe a opção desejada.
console.log("\n----- Escolha uma das alternativas -----\n");
console.log("1 - Listar histórico de salário mínimo");
console.log("2 - Listar histórico de taxa IPCA (inflação)");
console.log(
  "3 - Comparar e listar a porcentagem de crescimento salarial com a inflação(IPCA)",
);
console.log("\n");

let escolha = entradaDados.question("Digite o número da sua escolha: ");
escolha = Number(escolha);

// Aqui prepara as variáveis para retornar as mensagens resposta.
let labelAno = 'Ano:';
let labelSalario = 'Salário:';
let labelIpca = 'Inflação IPCA:';
let labelCrescimento = 'Crescimento salarial:';

labelAno = labelAno.padEnd(30, '.');
labelSalario = labelSalario.padEnd(30, '.');
labelIpca = labelIpca.padEnd(30, '.');
labelCrescimento = labelCrescimento.padEnd(30, '.');


// Aqui percorre as condicões para retornar as respostas.
switch (escolha) {
  case 1:
    for(let lista of listaSalarioAnual) {
      let ano = lista.ano;
      let salario = lista.salario;
      let salarioFormatado = salario.toFixed(2).replace('.', ',');
      
      console.log('\n')
      console.log(labelAno + ano);
      console.log(`${labelSalario}R$ ${salarioFormatado}`);
    }
    break;
  case 2:
    for(let lista of listaIpcaAnual) {
      let ano = lista.ano;
      let ipca = lista.ipca;
      let ipcaFormatado = ipca.toFixed(2).replace('.', ',');

      console.log('\n');
      console.log(labelAno + ano);
      console.log(`${labelIpca}${ipcaFormatado}%`);
    }
    break;
  case 3:
    for(let i = 0; i <= listaSalarioAnual.length - 1; i++) {
      let ano = listaSalarioAnual[i].ano;
      let salario = listaSalarioAnual[i].salario;
      let crescimento;
      let crescimentoFormatado;

      if (i > 0) {
        let salarioAnterior = listaSalarioAnual[i-1].salario;
        let diferenca = salario - salarioAnterior;

        crescimento = (diferenca / salarioAnterior) * 100;
        crescimentoFormatado = crescimento.toFixed(2).replace('.', ',') + '%';
      } else {
        crescimentoFormatado = '-';
      }

      let ipca = listaIpcaAnual[i].ipca;

      let salarioFormatado = salario.toFixed(2).replace('.', ',');
      let ipcaFormatado = ipca.toFixed(2).replace('.', ',') + '%';

      
      console.log('\n');
      console.log(labelAno + ano);
      console.log(labelSalario + 'R$ ' + salarioFormatado);
      console.log(labelCrescimento + crescimentoFormatado);
      console.log(labelIpca + ipcaFormatado);
    }
    break;
  default:
    console.log('Opção inválida!');
    break;
}
