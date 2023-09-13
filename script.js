// console.log('Bora entender melhor a linguagem js');

// console
// console.error('Este é um erro');
// console.warn('Este é um aviso');
// console.log('Testando');

// variáveis 
// var x = 10;

// maneiras mais modernas de se declarar variáveis
// let y = 15; // escopo global
// const z = 20;

// if(1) {
//   let y = 55; // escopo local
   // console.log(y);
// }

// console.log(x);
// console.log(y);
// console.log(z);

// y = 25;
// console.log(y);

// tipos de dados
const nome = 'Cleverson Augusto';
console.log(nome);
console.log(typeof nome);

const numero = 4;
console.log(numero);
console.log(typeof numero);

const isApproved = false; // true ou false
console.log(isApproved);
console.log(typeof isApproved);

let seuNome = null;
console.log(seuNome);
console.log(typeof seuNome);

seuNome = 'Augusto';
console.log(seuNome);
console.log(typeof seuNome);

let idade 
console.log(idade);
console.log(typeof idade);

idade = 40;
console.log(idade);
console.log(typeof idade);

const linguagensDeProgramacao = ['JavaScript', 'Java', 'Python'];
console.log(linguagensDeProgramacao);
console.log(typeof linguagensDeProgramacao);

const user = { email: 'cleverson@test.com', password: 'test123', idade: 40 }; // object literals
console.log(user);
console.log(typeof user);

// métodos de manipulação de string
const nomeCompleto = 'Cleverson Augusto';

console.log(nomeCompleto.length);

const stringToArray = nomeCompleto.split(' ');

console.log(stringToArray);

console.log(nomeCompleto.toLowerCase());

console.log(nomeCompleto.toUpperCase());

console.log(nomeCompleto.indexOf('Augusto'));

console.log(nomeCompleto.slice(0, 9));

// métodos de manipulação de array
const lista = ['a', 'b', 'c', 'd', 'e'];

console.log(lista.length); // verifica o tamanho da lista

console.log(lista[1]);

lista[5] = 'f';

console.log(lista);

console.log(lista[lista.length - 1]); // mostra o último item da lista

lista.push('g'); // adiciona um elemento ao fim da lista

console.log(lista.length);

console.log(lista[lista.length - 1]);

console.log(lista);

lista.pop(); // remove o último elemento da lista

console.log(lista);

lista.shift(); // remove o primeiro elemento da lista

console.log(lista);

lista.unshift('a'); // adiciona o primeiro elemento da lista

console.log(lista);

// objetos
const produtos = {
    nome: 'Camisa',
    valor: 15.99,
    estoque: true,
    tamanhos: ['P', 'M', 'G'],
    'Cor Principal': 'Azul',
}

console.log(produtos.nome);
console.log(produtos['nome']);

console.log(produtos.valor);
console.log(produtos['valor']);

console.log(produtos.estoque);
console.log(produtos['estoque']);

console.log(produtos.tamanhos);
console.log(produtos['tamanhos']);

console.log(produtos['Cor Principal']);

// destructuring
const { valor, estoque } = produtos

console.log(valor);
console.log(estoque);

const [n1, n2] = lista;

console.log(n1);
console.log(n2);

// JSON - JavaScript Object Notation
const cachorro = {
    raça: 'Pitt Bull',
    idade: 6,
}

const json = JSON.stringify(cachorro);

console.log(json);

const obj = JSON.parse(json);

console.log(obj);

const jsonErrado = '{"nome":"teste", "sobrenome":"testando"}';

const obj2 = JSON.parse(jsonErrado);

console.log(obj2);

// Estruturas condicionais 
const a = 10;
if(a > 8) {
    console.log('A é maior que 8');
} else {
    console.log('A é menor que 8');
}

const b = 'Cleverson'

if(b === 'João') {
    console.log('O nome é João');
} else if(b === 'Pedro') {
    console.log('O nome é Pedro');
} else {
    console.log('Não encontramos o nome do usuário');
}

const umNumeroQualquer = 19

// if ternário
let testandoUmNumeroQualquer = umNumeroQualquer < 20 ? 'Sim' : 'Não';
console.log(testandoUmNumeroQualquer);

// Estrutura de repetição
const minhaLista = [1, 2, 3, 4, 5];
let contador = 0;

while (contador < minhaLista.length) {
    console.log('Imprimindo: ',  minhaLista[contador]);
    contador++;
}

const minhaSegundaLista = ['a', 'b', 'c', 'd', 'e'];

for (let contador = 0; contador < minhaSegundaLista.length; contador++) {
    console.log(`Imprimindo: ${minhaSegundaLista[contador]}`);
}

// métodos de array -> repetição
const nomes = ['Cleverson', 'Thor', 'Thanos', 'Hulk'];

nomes.forEach(function(nome) {
    console.log(`O nome é: ${nome}`);
});

const modificaNome = nomes.map((nome) => {
    if (nome === 'Cleverson') {
      return (nome = 'Sr. Cleverson');
    } else {
      return nome;
    }
})

console.log(modificaNome[0]);


const numerosGrandes = [1, 2, 3, 4, 5, 10, 100, 150].filter((numero) => {
    return numero >= 5;
});

console.log(numerosGrandes);

const soma = [10, 20, 30, 40, 50].reduce((total, numero) => {
    return total + numero;
});

console.log(soma);

// Funções
function minhaFuncao() {
    console.log('testando');
}

minhaFuncao();



function fullName(name, surname) {
    return `O nome completo é: ${name} ${surname}`;
}

console.log(fullName('Cleverson', 'Augustto'));
console.log(fullName('João', 'José'));

const primeiroNome = 'Jéssica';
const segundoNome = 'Aparecida';

const meuNomeCompleto = fullName(primeiroNome, segundoNome);

console.log(meuNomeCompleto);

// arrow functions
const minhaArrowFunction = (a, b, c) => {
    return a + b + c 
}

console.log(minhaArrowFunction(2, 3, 4));

const mySimpleArrowFunction = (a, b) => a + b

console.log(mySimpleArrowFunction(5, 3));

// Classes
class Product {

    constructor(nome, preco) {
       this.nome = nome;
       this.preco = preco
    }

    productDetails() {
        return `O nome do produto é ${this.nome} e o preço é ${this.preco}`;
    }
}

const socks = new Product('Meia Branca', 10.99);
const shirt = new Product('Camisa Preta', 22.99);

console.log(socks.nome);
console.log(socks.preco);
console.log(shirt.nome);
console.log(shirt.productDetails());

// herança
class SuperProduct extends Product {
    constructor(nome, preco, tamanho) {
        super(nome, preco);
        this.tamanho = tamanho;
    }

    mostrarAdjetivo(adjetivo) {
        return `O ${this.nome} é muito ${adjetivo}`;
    }

    // static
    static sayHello() {
        console.log('Hello')
    }

}

const tenis = new SuperProduct('Tênis vermelho', 59.99, '41');

console.log(tenis.nome);
console.log(tenis.tamanho);

console.log(tenis.mostrarAdjetivo('Bom'));

SuperProduct.sayHello();

// DOM - Document Object Model
// Seleção de elementos
const titulo = document.querySelector('title'); // #title

console.log(titulo);

// query selector
const subTitulo = document.querySelector('#title');

console.log(subTitulo);

const texts = document.querySelectorAll('.text');

console.log(texts);
console.log(texts[0]);

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase());
});

// Manipulação de elementos
title.textContent = 'Mudei o texto';

texts[0].innerHTML = '<span>Alterado pelo JS</span>';
texts[3].innerHTML = '<span>Alterei o HTML deste elemento</span>';
texts[2].style.backgroundColor = 'blue'; // altera o backgroundcolor

texts[1].classList.add('my-class'); // adiciona classe
texts[1].classList.remove('text'); // remove classe

texts[3].remove();

// Eventos
const botao = document.querySelector('#btn');

botao.addEventListener('click', function() {
   texts[0].style.color = 'red';
    
});




