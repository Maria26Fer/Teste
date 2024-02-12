const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const valorTotalMensal = Object.values(faturamentoEstados).reduce(
  (total, valor) => total + valor,
  0
);

const percentuais = {};
for (const estado in faturamentoEstados) {
  percentuais[estado] = (faturamentoEstados[estado] / valorTotalMensal) * 100;
}

console.log("Valor total mensal: R$" + valorTotalMensal.toFixed(2));
console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado].toFixed(2)}%`);
}
