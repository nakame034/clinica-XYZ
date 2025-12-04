const { captureOwnerStack } = require("react")

console.log("ola mundo")
const nome = "Caua"
const idade = 18
const cidade = "limeira"

console.log(nome + " tem " + idade + " anos e mora em " + cidade)


//usando template string
console.log(`${nome} tem ${idade} anos e mora em ${cidade}`)

// javascript usa camelCase
//pascalCase MinhaVariavel C#, Java para nomes de classes e metodos
//camelCase  minhaVariavel Js e outras linguagens. geralmente em variaveis
//kebab-Case minha-variavel - HTML e CSS
//snake_Case minha_variavel  Python

const ListadeFrutas = ["Laranja", "Uva", "Limão", "Pera", "Maça", "Goiaba"]
console.log(ListadeFrutas[3])

//percorrer com uma array
ListadeFrutas.forEach(fruta => {
    console.log(fruta)
})

//objeto em JavaScript
const pessoa = {
    nome: "caua",
    idade: "18",
    cidade: "Limeira",
    salario: "30000",
    habilidades: ["HTML", "CSS", "JS", "C#"],
    endereco: {
        rua: "Rua Exemplo",
        numero: 123,
        bairro: "centro",
        cep: "99999-99"
    }
}

console.log(pessoa.nome)
console.log(pessoa.endereco.rua)
console.log(pessoa.habilidades[2])

//funcoes em JavaScript

function somar() {
    const numero1 = 50
    const numero2 = 60
    const resultado = numero1 + numero2
    return resultado
}

const multiplicar = function(n1, n2){
return n1*n2
}

console.log("o resultado da soma é: " + somar())
console.log("o resultado da multiplicação é: " + multiplicar(32,69))