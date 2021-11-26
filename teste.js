function Person(name) {
    this.name = name
}
const raquel = new Person("Raquel")
console.log(raquel)

//----------------------------

let frase = "espaço de arrays"
let vetor = frase.split(" ")
let underline = vetor.join("_")
console.log(underline.toLocaleUpperCase())

//----------------------------

let nome = "nomes: Raquel, Diogo, Vanessa"
console.log(nome.includes("Raquel"))

//----------------------------

let frutas = new Array("maçã, banana, uva")
console.log(frutas)

//----------------------------

let palavra = "caracteres"
console.log(Array.from(palavra))

//----------------------------

let tecnologias = ["html", "css", "javascript"]
// adicionar um item no fim
tecnologias.push("nodeJS")
// adicionar no começo
tecnologias.unshift("sql")
// remover do fim
tecnologias.pop()
// remover do começo
tecnologias.shift()
// pegar somente alguns elementos
console.log(tecnologias.slice(2,3))
// remover 1 ou mais itens
tecnologias.splice(1, 1)
// encontrar a posição de um elemento
let index = tecnologias.indexOf('javascript')
tecnologias.splice(index,1)

console.log(tecnologias)

//----------------------------

let numero = 2
console.log(numero == 1 ? 'ok' : 'falso')

//----------------------------

const person = {
    name: 'raquel',
    idade: 18
}

delete person.idade
console.log(person)

//----------------------------

let agua = true
let leite_em_po = true
const leite = agua && leite_em_po ? 'certo' : 'errado'
console.log(leite)

//----------------------------

let idade = 19
const podeDirigir = idade >= 18 ? 'pode' : 'nao pode'

//----------------------------

console.log('-----FALSY-----')
console.log(0 ? 'verdadeiro' : 'falso')
console.log(-0 ? 'verdadeiro' : 'falso')
console.log("" ? 'verdadeiro' : 'falso')
console.log(null ? 'verdadeiro' : 'falso')
console.log(undefined ? 'verdadeiro' : 'falso')
console.log(NaN ? 'verdadeiro' : 'falso')

console.log('-----TRUTHY-----')
console.log(true ? 'verdadeiro' : 'falso')
console.log({} ? 'verdadeiro' : 'falso')
console.log([] ? 'verdadeiro' : 'falso')
console.log(1 ? 'verdadeiro' : 'falso')
console.log(3.23 ? 'verdadeiro' : 'falso')
console.log("0" ? 'verdadeiro' : 'falso')
console.log("false" ? 'verdadeiro' : 'falso')
console.log(-1 ? 'verdadeiro' : 'falso')
console.log(Infinity ? 'verdadeiro' : 'falso')
console.log(-Infinity ? 'verdadeiro' : 'falso')

//----------------------------

function calculadora(numero1, operador, numero2){
    let result

    switch (operador) {
        case '+':
            result = numero1 + numero2;
            break;
        case '-':
            result = numero1 - numero2;
            break;
        case '*':
            result = numero1 * numero2;
            break;
        case '/': 
            result = numero1 / numero2;
            break;
        default:
            console.log('Não existe nenhum operador com este valor: '+operador);
            break;
    }
    return result
}
console.log(calculadora(1,'+',4));

//----------------------------

let nome = 'Raquel'
let nomes = ['Natalia', 'Anderson', 'Gustavo']

for(let carac of nome){
    console.log(carac)
}

for(carac of nomes){
    console.log(carac)
}

//----------------------------

let pessoa = {
    name: "Raquel",
    age: 18,
    weight: 60.8
}

for(let propriedade in pessoa){
    console.log(propriedade)
    console.log(pessoa[propriedade])
}

//----------EXERCÍCIOS----------

function NotasEmCaracteres(nota){
    let resultado
   
    if(nota >= 90){
        resultado = 'A';
    } else if(nota >= 80 && nota <= 89){
        resultado = 'B'
    } else if(nota >= 70 && nota <= 79){
        resultado = 'C'
    } else if(nota >= 60 && nota <= 69){
        resultado = 'D'
    } else if(nota <= 60){
        resultado = 'F'
    }
    return resultado
}

console.log(NotasEmCaracteres(-4))

//----------------------------

let familia = {
    receitas: [1000, 1200, 300, 260.80],
    despesas: [4500, 220.30, 540, 220]
}

function soma(arr){
    let total = 0;

    for(let value of arr){
        total += value
    }

    return total
}

function CalcularGastos(){
    const calculoReceitas = soma(familia.receitas)
    const calculoDespesas = soma(familia.despesas)
    
    const calculoTotal = calculoReceitas - calculoDespesas;
   
    let ok = calculoTotal >= 0
    let mensagem = 'positivo'

    if(calculoTotal < 0){
        mensagem = 'negativo'
    }
    console.log('Seu saldo é de: '+calculoTotal.toFixed(2),', '+mensagem)
}

CalcularGastos()

//----------------------------

function graus(graus){

    if(unidade == 'C'){
        let calculo = graus* 9/5 + 32;
        console.log(`A temperatura de ${graus}C é de ${calculo.toFixed(2)} em F.`)
    } else if(unidade == 'F'){
        let calculo = (graus - 32) * 5/9
        console.log(`A temperatura de ${graus}F é de ${calculo.toFixed(2)} em C.`)
    }
}

graus(32,'C')

function transform(temperatura){
    const grausEmC = temperatura.toUpperCase().includes('C')
    const grausEmF = temperatura.toUpperCase().includes('F')

    //Erro
    if(!grausEmC && !grausEmF){
        throw new Error('Grau inválido')
    }

    //F -> C
    let NumeroTemperatura = Number(temperatura.toUpperCase().replace('F', ''));
    let formula = grausF => (grausF - 32) * 5/9
    let unidade = 'C'

    //C -> F
    if(grausEmC){
        NumeroTemperatura = Number(temperatura.toUpperCase().replace('C', ''));
        formula = grausC => grausC * 9/5 + 32;
        unidade = 'F'
    }

    return formula(NumeroTemperatura) + unidade
}
try{
    console.log(transform('50G'))
} catch(err){
    console.log(err.message)
}

//----------------------------

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv. Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augustu Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategorias = booksByCategory.length

for (category  of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function autores() {
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log('Total de autores: ',authors.length)
}

autores();

function livrosDoAutor(author) {
    let books= [];

    for(let category of booksByCategory){
        for(let book of category.books){
           if(book.author === author){
               books.push(book.title)
           }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

livrosDoAutor('Stephen R. Covey')