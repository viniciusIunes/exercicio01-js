let numberOne = prompt('Digite o primeiro número:')
let numberTwo = prompt('Digite o segundo número:')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const som = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert(`Resultado da soma:  ${som}`)
alert(`Resultado da subtração:  ${sub}`)
alert(`Resultado da multiplicação:  ${multi}`)
alert(`Resultado da divisão:  ${div}`)
alert(`Resultado do resto da divisão: ${restDiv}`)


if (restDiv > 0) {
  alert(`A soma dos dois número é impar (${som})`)
} else {
  alert(`A soma dos dois número é par (${som})`)
}

