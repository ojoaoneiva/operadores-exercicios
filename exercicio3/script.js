console.log (`5 é maior que 20 e também é menor que 2: `,(5>20 && 5<2))
console.log (`5 é igual a 5 ou é igual a “5”: `, (5===5 || 5==="5"))
console.log (`negação de (vinte é maior que cinquenta): `,(!(20>50)))
console.log (`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta): `,(!(20>50 || 50>60)))

//Exercício Salário:

const salario = 2000
const filhos = 2
const creche = 45.50

//1
console.log(`O salário fixo mais o auxílio creche é: R$`, (salario + (creche*filhos)).toFixed(2))


//2
const jan = 5784.50
const fev = 3418.41
const mar = 4124.10
const abr = 1874.00
const mai = 7000.00
const jun = 9450.00

console.log (`Comissão em janeiro:`, (jan*0.1).toFixed(2))

//3
console.log(`Quanto Fulano de Silva será descontado em janeiro pelo INSS (levando em consideração o salário + porcentagem de vendas)`, (0.05*(salario + jan*0.1)).toFixed(2))

//4
const totalJan = (0.95*(salario + jan*0.1))+(creche*filhos)
const totalFev = (0.95*(salario + fev*0.1))+(creche*filhos)
const totalMar = (0.95*(salario + mar*0.1))+(creche*filhos)
const totalAbr = (0.95*(salario + abr*0.1))+(creche*filhos)
const totalMai = (0.95*(salario + mai*0.1))+(creche*filhos)
const totalJun = (0.95*(salario + jun*0.1))+(creche*filhos)

console.log(`salário Janeiro: ${(totalJan).toFixed(2)}`)
console.log(`salário Fevereiro: ${(totalFev).toFixed(2)}`)
console.log(`salário Março: ${(totalMar).toFixed(2)}`)
console.log(`salário Abril: ${(totalAbr).toFixed(2)}`)
console.log(`salário Maio: ${(totalMai).toFixed(2)}`)
console.log(`salário Junho: ${(totalJun).toFixed(2)}`)


//5
const media = (totalJan+totalFev+totalMar+totalAbr+totalMai+totalJun)/6

console.log (`A média do salário em seis meses (de janeiro a junho), levando em consideração as comissões e auxílio:`, (media).toFixed(2))