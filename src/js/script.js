// selecionar divMortgage Type

const divRepaymentInputRadio = document.querySelector(".divRepaymentInputRadio");
const divInterestOnlyInputRadio = document.querySelector(".divInterestOnlyInputRadio");
const repayment = document.getElementById("repayment");
const interestOnly = document.getElementById("interestOnly");

function resetMortgageType() {
  divRepaymentInputRadio.classList.remove("colorMortgageInput");
  divInterestOnlyInputRadio.classList.remove("colorMortgageInput");
  repayment.checked = false;
  interestOnly.checked = false;
}

divRepaymentInputRadio.addEventListener("click", function (event) {
  resetMortgageType();
  if (divRepaymentInputRadio.classList.contains("colorMortageInput")) {
    divRepaymentInputRadio.classList.remove("colorMortgageInput");
  } else {
    divRepaymentInputRadio.classList.add("colorMortgageInput");
    repayment.checked = true;
  }
});

divInterestOnlyInputRadio.addEventListener("click", function (event) {
  resetMortgageType();
  if (divInterestOnlyInputRadio.classList.contains("colorMortageInput")) {
    divInterestOnlyInputRadio.classList.remove("colorMortgageInput");
  } else {
    divInterestOnlyInputRadio.classList.add("colorMortgageInput");
    interestOnly.checked = true;
  }
});

// mortgage calculation

const inputMortgageAmount = document.getElementById("inputMortgageAmount");
const inputMortageTerm = document.getElementById("inputMortageTerm");
const inputMortageRate = document.getElementById("inputMortageRate");
//  repayment e interestOnly
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (repayment.checked == true) {
    const numberOfMonths = inputMortageTerm.value * 12
    const monthlyInterest = inputMortageRate.value/(12 * 100)
    const loan = inputMortgageAmount.value
    const monthlyPayment = (loan * (monthlyInterest * Math.pow((1 + monthlyInterest), numberOfMonths))) / (Math.pow((1 + monthlyInterest), numberOfMonths) - 1)
    const resultPayment = monthlyPayment * numberOfMonths
    if(isNaN(monthlyPayment || isNaN(resultPayment))){
        result
    }
    console.log("o pagamento mensal é de: " + monthlyPayment)
    console.log("O pagamento total é: " + resultPayment)




    
    const r = 0.05 / 12;
    const L = 300000;
    n = 360;
    const pagamentoMensal = (loan * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    
  } else if (interestOnly.checked == true) {
  } else {
    return;
  }
});
