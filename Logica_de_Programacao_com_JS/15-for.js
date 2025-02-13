for (let contador = 0; contador < 4; contador++) {
    console.log(contador)
    console.log("aumentando o contador")
}

let pontosDeVida = 0
for (let i = 1; i <= 10; i++) {
    // i de interador, forma mais preguiçosa de escrever a condição que faz sair do laço
    pontosDeVida += 1
    console.log("Tomou poção mágica " + i)
}
console.log(pontosDeVida + " Totais ")