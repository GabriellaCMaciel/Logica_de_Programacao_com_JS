// operadores matemáticos
// concatenando
let idade = 30
console.log("Valor da minha variável " + idade)

// '+' somando
idade = 30 + 6
console.log("Operação de adição " + idade)

// '-' subtraindo
idade = 30 - 6
console.log("Operação de subtração " + idade)

let codigoDoProduto = 1023
let codigoExato = codigoDoProduto - 1000
console.log(codigoExato)

let primeiroNumero = 1023
let segundoNumero = 23
console.log(primeiroNumero - segundoNumero)

// '*' multiplicando
let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("O resultado da multiplicação é " + produto)

multiplicador = 8
produto = multiplicador * multiplicando
console.log("O resultado da multiplicação é " + produto)

// '/' dividindo
let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("Operação de divisão: " + notaDoMercado / pessoasParaDividir)

// '%' resto de uma divisão
let calculo = 10 % 3
console.log("Operação de módulo " + calculo)

// '++' incremento
let contador = 1
contador++
contador++
// '--' decremento
contador--
contador--
contador--
console.log(contador)

// calcular e atribuir
let preco = 10
preco += 5 // preco = preco + 5
preco -= 5 // preco = preco - 5
console.log(preco)

// definindo escopos
let resultado = 2 * ((5 + 5) - 10)
console.log(resultado)