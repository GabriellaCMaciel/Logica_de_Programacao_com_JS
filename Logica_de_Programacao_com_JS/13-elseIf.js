let nivelDeFome = 3

if (nivelDeFome === 1) {
  console.log("Pouca fome")
} else if (nivelDeFome === 2) {
  console.log("Muita fome")
} else {
  console.log("Você comeria mais que o Pica-pau")
}

// O nosso herói João chegou a uma encruzilhada na floresta misteriosa.
// Ele precisa decidir qual caminho seguir para continuar a sua jornada.

if (caminhoEsquerdo === 'obstaculo') {
  // Se o caminho da esquerda tiver um obstáculo, João vai tentar o caminho da direita.
  seguirCaminhoDireito();
} else if (caminhoEsquerdo === 'ponteQuebrada') {
  // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
  procurarOutroCaminho();
} else {
  // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
  seguirCaminhoEsquerdo();
}