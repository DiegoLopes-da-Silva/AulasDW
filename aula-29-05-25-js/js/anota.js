// https://github.com/DSM-Fatec-Jahu/aulas-dw/blob/main/aula-javascript.md

//VAR

var nomeAntigo = "Ana";
nomeAntigo = "Carlos"; // Pode ser reatribuído
var nomeAntigo = "Julia"; // Pode ser redeclarado (não recomendado)
console.log(nomeAntigo); // Saída: Julia

//LET

let idade = 30;
idade = 31; // Pode ser reatribuído
// let idade = 32; // Erro! Não pode ser redeclarado no mesmo escopo
console.log(idade); // Saída: 31

if (true) {
  let dentroDoBloco = "Visível aqui";
  console.log(dentroDoBloco); // Saída: Visível aqui
}
// console.log(dentroDoBloco); // Erro! fora de escopo

//CONST

const PI = 3.14159;
// PI = 3.14; // Erro! Não pode ser reatribuído
console.log(PI); // Saída: 3.14159

const pessoa = { nome: "Mariana" };
pessoa.nome = "Mariana Silva"; // Funciona! O objeto em si pode ser modificado
// pessoa = { nome: "João" }; // Erro! Não pode reatribuir a constante
console.log(pessoa.nome); // Saída: Mariana Silva

//STRING

let saudacao = "Olá, mundo!";
let nome = 'João';
let frase = `Bem-vindo, ${nome}!`; // Template literals, permite colocar variável.
console.log(frase); // Saída: Bem-vindo, João!

//NUMÉROS

let quantidade = 10;
let preco = 19.99;
let naoUmNumero = NaN; // Not a Number
let infinito = Infinity;
console.log(quantidade, preco); // Saída: 10 19.99

//BOOLEAN

let ativo = true;
let finalizado = false;
console.log(ativo); // Saída: true

//NULL

let usuario = null;
console.log(usuario); // Saída: null

//UNDEFINED

let descricao;
console.log(descricao); // Saída: undefined

//SYMBOL (ES6)

const idUnico = Symbol('descricaoUnica');
console.log(idUnico); // Saída: Symbol(descricaoUnica)

//BIGINT (ES2020)

const numeroMuitoGrande = 9007199254740991n; // 'n' no final indica BigInt
const outroGrande = BigInt("12345678901234567890");
console.log(numeroMuitoGrande + 1n); // Saída: 9007199254740992n

//OPERADORES
//Símbolos que realizam operações em valores (operandos).

//Aritméticos
//+ (adição)
//- (subtração)
//* (multiplicação)
/// (divisão)
//% (módulo/resto)
//** (exponenciação - ES7)
let soma = 10 + 5; // 15
let produto = 4 * 3; // 12
let resto = 10 % 3;  // 1
let potencia = 2 ** 3; // 8

//ATRIBUIÇÃO
// = (atribuição simples)
// +=, -=, *=, /=, %=
let x = 10;
x += 5; // equivalente a x = x + 5; (x agora é 15)

//COMPARAÇÃO
//== (igual a - compara valor, faz coerção de tipo)
//=== (estritamente igual a - compara valor e tipo)
//!= (diferente de)
//!== (estritamente diferente de)
//> (maior que)
//< (menor que)
//>= (maior ou igual a)
//<= (menor ou igual a)
console.log(5 == "5");    // true (coerção de tipo)
console.log(5 === "5");   // false (tipos diferentes)
console.log(10 > 5);      // true

//LÓGICO
//&& (E lógico)
//|| (OU lógico)
//! (NÃO lógico)
let cond1 = true;
let cond2 = false;
console.log(cond1 && cond2); // false
console.log(cond1 || cond2); // true
console.log(!cond1);         // false

//TERNÁRIO
//Um atalho para a instrução if.

let idadeUsuario = 18;
let status = (idadeUsuario >= 18) ? "Adulto" : "Menor de idade";
console.log(status); // Saída: Adulto

//CONVERSÃO EXPLÍCITA
let strNumero = "123";
let numero = Number(strNumero); // Converte string para número
console.log(typeof numero); // Saída: number

let valor = 456;
let strValor = String(valor); // Converte número para string
console.log(typeof strValor); // Saída: string

let booleano = Boolean("texto"); // Qualquer string não vazia é true
console.log(booleano); // Saída: true
console.log(Boolean("")); // Saída: false
console.log(Boolean(0)); // Saída: false
console.log(Boolean(null)); // Saída: false

//CONVERSÃO IMPLÍCITA
console.log("5" + 3);   // "53" (concatenação de strings)
console.log("10" - 5);  // 5 (string convertida para número)
console.log("5" * "2"); // 10 (ambas convertidas para número)
console.log(5 + null);  // 5 (null é convertido para 0)
console.log("ola" + undefined); // "olaundefined"




//OBJETOS
//acho que esse é importante checar via o link para conferir a explicação
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2010,
    ligado: false,
    ligar: function() { // Método
      this.ligado = true;
      console.log("Carro ligado!");
    },
    desligar() { // Sintaxe de método mais curta (ES6)
      this.ligado = false;
      console.log("Carro desligado.");
    },
    "cor externa": "Vermelho" // Chaves com espaços precisam de aspas
  };