let numero = "1"
console.log(numero === 1)

// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo

let marca = "Apple"
let resultado = marca !== "Samsung"
console.log(resultado)

// !== é diferente? 

let cpfBloqueado = "123.456.789-00"
let cpfUsuario = "111.222.333-44"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado
console.log("O usuário está barrado? " + ehCPFBloqueado)

let cpfPermitido = "222.333.444-55"
let cpfDoUsuario = "222.333.444-56"
let ehBloqueado = cpfDoUsuario !== cpfPermitido
console.log("É um usuário inválido? " + ehBloqueado)

let texto = "felipe"
console.log(texto === "Felipe")

// maior e menor

let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)

let idadeDeCorte = 50
let idadeDoUsuario = 50
let resultadoEhTerceiraIdade = idadeDeCorte <= idadeDoUsuario
console.log(resultadoEhTerceiraIdade)

