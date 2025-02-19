torrar()

function torrar() {
    console.log("torrando pão")
    injetarPao()
}

function injetarPao() {
    console.log("preparando para injetar o pão")
    console.log("finalizado")
}

// função que pega todos os dados
function getData() {
    console.log("pegando dados do usuário")
}

// função que checa os valores
function checkValues() {
    console.log("validando dados")
}

// função que manda para o banco de dados
function sendToDatabase() {
    console.log("cadastrando dados")
}

mainSaveData()

function mainSaveData() {
    getData()
    checkValues()
    sendToDatabase()
}

torrar("pão de forma", "Felipe")
torrar("pão integral", "Luana")

function torrar(pao, nome) {
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
}

torrar("pão integral")

function torrar(pao, nome = "Cliente") {
    console.log("torrada feita com " + pao)
    console.log("ela é um pedido de " + nome)
}

createDatabaseStringConnection("db_products", "Felipe", "1234")

function createDatabaseStringConnection(databaseName, user, pass) {
    console.log(`connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}


let resultado = soma(5, 10)
console.log("O Resultado dessa função é " + resultado)
function soma(numA, numB) {
    let somatorio = numA + numB
    return somatorio
}

let userName = getFirstName("Carlos Almeida Juanito Gargalo")
console.log("Seja bem vindo " + userName)
function getFirstName(name) {
    let firstName = name.split(" ")[0]
    return firstName
}


let userNames = getFirstName("Maria-Lucinda-do-Jordão", "-")
console.log("Seja bem vindo " + userName)
userName = getFirstName("Lucimara Han Solo", " ")
console.log("Seja bem vindo " + userName)
function getFirstName(name, splitChar = " ") {
    let firstName = name.split(splitChar)[0]
    return firstName
}