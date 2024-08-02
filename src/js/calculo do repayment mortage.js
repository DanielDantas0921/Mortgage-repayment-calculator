
const r = 0.05 /12
const L = 300000
n = 360
const pagamentoMensal = L * (r * Math.pow((1+r), n ))/  (Math.pow((1+r), n ) - 1)
console.log(pagamentoMensal)