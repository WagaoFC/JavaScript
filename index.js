//calculo imc
const nome = 'wagner'
const peso = 98
const altura = 1.65
const sexo = 'M'
const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} você está acima do peso. Seu IMC é: ${imc}`)
} else {
    console.log(`${nome} você não está acima do peso. Seu IMC é: ${imc}`)
}

//calculo aposentadoria
const nome = 'wagner'
const sexo = 'F'
const idade = 26
const contribuicao = 100
const niceContribuicao = idade + contribuicao

if (contribuicao >= 35 && sexo === 'M' && niceContribuicao >= 95) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

if (contribuicao >= 30 && sexo === 'F' && niceContribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

//objetos e array
const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

const programador = {
    nome: 'wagner',
    idade: 26,
    tecnologias: [
        {nome: 'JavaScript', especialidade: 'Web'},
        {nome: 'CSS', especialidade: 'Web'},
        {nome: 'HTML', especialidade: 'Web'},
    ]
}
console.log(`O desenvolvedor ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)

//funcoes e for

const users = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
]

for (i = 0; i < users.length; i++) {
    console.log (`${users[i].nome} trabalha com ${users[i].tecnologias}`)
}

function checkUserCss(users) {
    for (i = 0; i < users.length; i++) {
        if (users[i].tecnologias == 'CSS') {
            return true
        } else {
            return false
        }
    }
}

const checkUser = checkUserCss (users)