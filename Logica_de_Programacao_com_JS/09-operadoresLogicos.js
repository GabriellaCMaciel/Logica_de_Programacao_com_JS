// AND (&&)
let idade = 17
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

// 100 moedas coletadas E 1 item estrela
let moedasColetadas = 100
let item = "estrela"
let resultadoFinal = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultadoFinal)

// OR (||) - Paypes - O boneco só pode sair se estiver sem chuva OU com guarda-chuva
let tempo = "chuva"
let itemEquipado = "guarda-chuva"
let podeSair = (tempo !== "chuva") || (itemEquipado === "guarda-chuva")
console.log("Nosso personagem pode sair? " + podeSair)

// NOT (!) - nega uma afirmação
let tempoAtual = "chuva"
let resultadoTemporal = tempoAtual !== "chuva"
console.log(resultadoTemporal)

// outra maneira que inverte um valor
let tempoDoDia = "chuva"
let resultadoTempo = tempoAtual === "chuva"
console.log(!resultadoTempo)

let tempoHoje = "chuva"
let horario = 8
let result = !((tempoHoje !== "chuva") && (horario > 6))
console.log(resultado)