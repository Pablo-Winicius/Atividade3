// 01- Crie um array que receba 5 itens e exiba no console.
let elemento = ["Trabalho", 60,"suco","Katharina", 45]
console.log(elemento)

//02- Utilize um método para adicionar um nome ao inicio do array.
let add = elemento.unshift('Pablo')
console.log(elemento)

//03- Utilize um método para remover o último nome do array.
let remo = elemento.pop()
console.log(elemento)

//04- Utilize um método para adicionar dois nomes ao fim do array.
let addelemento = elemento.push('Gel','Anel')
console.log(elemento)

//05- Utilize um método para remover o primeiro nome do array.
let removerinicio = elemento.shift()
console.log(elemento)

//06 Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]
let numero = [7,5,6,3,8,9,2,1,4]
numero.sort()
console.log(numero)


//07 Crie um objeto que receba ao menos três propriedades sobre você.
const propriedade = {
    nome :'Pablo',
    idade: 22,
    esporte:'handball'

}
console.log(propriedade)

//08 Adicione uma nova propriedade sem alterar seu objeto inicial.
propriedade.altura = '1.86'

//09 Remova uma propriedade desse objeto.
delete propriedade.idade

//10-Mostre no console todas as propriedades desse objeto.
console.log(propriedade)

//11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

const cadt = [
    {
        nome:'Pablo',
        idade:22,
        telefone:'49289489',
        amigos:['Pablo','Robertinho','Sidny', 'Lucas']
    },
    {
        nome:'Alba',
        idade:60,
        telefone:'759384758',
        amigos:['Leandro','Milena','Bete', 'Bia']
    },
    {
        nome:'Valmir',
        idade:80,
        telefone:'783382983',
        amigos:['Ariomar','Geraldo','Pedro','Zeca']
    },
    {
        nome:'Rafeal',
        idade:25,
        telefone:'4353-1341',
        amigos:['Robert', 'vitor','Judas','Duarte']
    },
    {
        nome:'Carlos',
        idade:43,
        telefone:'3232-1122',
        amigos:['Marcos','Monica','Gilmar','Danilo']
    }

]


//12- Mostre no console o nome de um amigo de cada lista.


for(i=0; i <5; i++){
    console.log(cadt[i].amigos[0])
}