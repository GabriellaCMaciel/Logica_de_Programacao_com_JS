// sem JSON

let name = "Robert"
let age = 24
let products = ["Mouse gamer", "Teclado mecânico", "Monitor ARX"]
let productsValues = [89.90, 159.99, 2.799]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age) {
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("-------------------------------------")
    console.log("O produto é " + products[0])
    console.log("O valor é " + productsValues[0])
}

// com JSON

let invoice = {
    name: "Robert",
    age: 24,
    products: {
        0: ["Mouse gamer", 89.90],
        1: ["Teclado mecânico", 159.99],
        2: ["Monitor ARX", 2.799],
        3: ["TV 92 polegadas", 9.999]
    }
}

console.log(invoice.name)

generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}` )
    console.log("-------------------------------------")
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index].products
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}