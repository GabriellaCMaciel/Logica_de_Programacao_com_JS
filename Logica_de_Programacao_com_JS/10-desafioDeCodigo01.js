// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.
const posicaoInicial = parseInt(gets(17));
const totalPassos = parseInt(gets(8));

//TODO: Calcule a posição final do herói:
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
console.log("Posicao final do heroi: " + posicaoFinal);
