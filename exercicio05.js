function inverterString(string) {
  let resultado = "";
  for (let i = string.length - 1; i >= 0; i--) {
    resultado += string[i];
  }
  return resultado;
}

const minhaString = "Target Sistemas";
const stringInvertida = inverterString(minhaString);

console.log(`String original: ${minhaString}`);
console.log(`String invertida: ${stringInvertida}`);
