// ARRAYS SÃO COMO CAIXAS COM OUTRAS CAIXAS DENTRO, QUE PODEM SER ACESSADOS ATRAVES DO SEU INDICE ENTRE COLCHETES [].
// O PRIMEIRO INDICE SEMPRE CPMEÇA DO 0, PORTANTO UM ARRAY DE 4 POSIÇOES TERA O INDICE DE 0 A 3.

// O ARRAY É HETEROGENIO, OU SEJA, PODEMOS COLOCAR QUALQUER VALOR DENTRO DELE, 
//OU SEJA, TIPOS DE DADOS DIFERENTES. INT, STRING, DOUBLE, BOOLEAM...

//REALIZANDO A CRIAÇÃO DE UM ARRAY:

//  indice =   0             1         2     3
// const arr = [" girafa", "camaleão", 'zebra', 3]

// arr[10] = "Leão"

// console.log(
//     ´${arr.lenght}´
// )


// // arr.push ("qualquer coisa");

// arr.push ("Girafa")

//console.log(arr);

// ************************************* METODO 01 - PUSH *************************//

// PUSHARRAY ADICIONA NO FINAL DE CADA LISTA

// const pushArray = ['leão', 'tartaruga', 'papagaio']

// console.log(pushArray);

// // assim substitui a tartaruga, ella deixa de existir
// pushArray[1] = 'Borboleta'
// console.log(pushArray)

// pushArray.push('escorpião')
// console.log(pushArray);

// pushArray.push('Dragão')
// console.log(pushArray);

// // ADICIONA ELEMENTOS NO INICIO DO ARRAY
// pushArray.unshift('Coelho')
// console.log(pushArray);

// ************************************** METODO 02 - POP ****************************************

// POP REMOVE O ULTIMO VALOR DE UM DETERMINADO ARRAY

// const popArray = ['Fernando', 'Mara', 'Eric', 'Gabriel']
// console.log(popArray);

// // elimina o ultimo  valor de um array
// popArray.pop()

// // REMOVER O PRIMEIRO VALOR DE UM ARRAY
// popArray.shift()
// console.log(popArray)


// *********************************** METODO 3 -SPLICE ****************************

// METODO SPLICE PERMITE SELECIONAR UM INDICE E REMOVER E ADICIONAR VALORES (SUBSTITUIÇÃO)

// //      INDICE    =   0       1      2      3 
// const spliceArray = ['Jan', 'Fev', 'Abr', 'Jun']
// console.log(spliceArray);

// spliceArray.splice(2, 0, "Mar");
// spliceArray.splice(4, 0, "Mai");

// console.log(spliceArray);

// ****************************** METODO 04 - FILTER *********************************

// const filterArray = [1, 80, 2, 20, 30, 100, 93729]
// console.log(filterArray);

// const novoArray = filterArray.filter((qualquerCoisa) => {

//     return qualquerCoisa > 10
// })

// console.log(novoArray);

// const filterArray = ['Guilherme', 'amanda', 'Rogerio', 'gabriel', 'renata']
// console.log(filterArray);

// const novoArray = filterArray.filter((qualquerCoisa) => {

//     return qualquerCoisa == "amada"  || qualquerCoisa == "Guilherme"
// })

// console.log(novoArray);


// ****************************** METODO 05 - MAP *********************************

// MAP NÃO MODIFICA O ARRAY ORIGINAL, SOMENTE A FUNÇÃO DE CALBACK PODERA FAZER ISSO!!
// OU SEJA, ELA CRIARA UM NOVO ARRAY MODIFICADO

// //     INDICE  =  0  1  2  3  4
// const arrayMap = [1, 2, 3, 4, 5]

// const arrayModificado = arrayMap.map((arrayMap) => {
//     return arrayMap * arrayMap
// })

// console.log(arrayModificado);


// ****************************** METODO 06 - ForEach *********************************

const foreeachArray = ['carlos', 'andre','julia', 'akira']
console.log(foreeachArray);

foreeachArray.forEach( (nome) => {

    console.log(nome);
})

// *****************************************************************************