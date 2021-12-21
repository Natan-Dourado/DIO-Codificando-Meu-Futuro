// ctrl + K + C - Atalho de comentários.

ax + b = 0 //funçao de primeiro grau.

2x+3 //Variável e Constante. Variável, "x". Constante, "2" e ""4".


//var preco = 2;
var preco = 2;
var desconto = 0.2;

preco = preco - desconto 

//const preco  = 2;
var desconto = 0.2;
const PRECO = 2;

//Na const o valor não pode ser manipulado.
// Isso não poderá ser feito:
PRECO = PRECO - desconto
//Perceba. O valor "PRECO" não pode ser uma variavél e uma constante ao mesmo tempo. Se uma constante é um valor que não pode ser manipulado, como o "PRECO" poderia ser uma constante se o valor muda ao final da operação? Ou seja, "PRECO - desconto" não pode ser igual a "PRECO", salvo se desconto for igual a zero. Logo, "PRECO - desconto" é igual a um valor difente. Valor que podemos poderiamso demominar. 

//Exemplo do uso correto de um valor constante.
var desconto =  0.2;
const PRECO = 2;
var total = PRECO - desconto;

//Sitaxe básica de uma função. 

function soma(a, b){
    return a + b;// 8
}
//Chamamento uma função.
soma(3,5);

//O espaço em parenteses serve para declararmos parâmetros ou não.


