
const r = 5 /1200
const L = 300000
n = 144
const pagamentoMensal = (L * (r * Math.pow((1+r), n )))/  (Math.pow((1+r), n ) - 1)
console.log(pagamentoMensal)