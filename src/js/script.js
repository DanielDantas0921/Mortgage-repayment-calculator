import { connectResultToInterface } from "./functions.js";

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
const divResults = document.querySelector(".divResults")
const divResultNotEmpty = document.querySelector(".DivResultNotEmpty")

function formatToGBP(amount) {
  return amount.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
}

btn.addEventListener("click", function () {
  if (repayment.checked == true) {
    const numberOfMonths = Number(inputMortageTerm.value) * 12;
    const monthlyInterest = Number(inputMortageRate.value) / (12 * 100);
    const loan = Number(inputMortgageAmount.value);
    const monthlyPayment = (
      (loan * (monthlyInterest * Math.pow(1 + monthlyInterest, numberOfMonths))) /
      (Math.pow(1 + monthlyInterest, numberOfMonths) - 1)
    ).toFixed(2);
    const resultPayment = (monthlyPayment * numberOfMonths).toFixed(2);
    if (isNaN(monthlyPayment || isNaN(resultPayment))) {
      result;
    }
    const monthlyPaymentFormated = formatToGBP(Number(monthlyPayment));
    const resultPaymentFormated = formatToGBP(Number(resultPayment));
    divResults.style.display = "none"
    divResultNotEmpty.innerHTML = ""
    connectResultToInterface(monthlyPaymentFormated,resultPaymentFormated)

  } else if (interestOnly.checked == true) {
    const numberOfMonths = Number(inputMortageTerm.value) * 12;
    const monthlyInterest = Number(inputMortageRate.value) / (12 * 100);
    const loan = Number(inputMortgageAmount.value);
    const monthlyPayment = (monthlyInterest * loan).toFixed(2);
    const resultPayment = (monthlyPayment * numberOfMonths + loan).toFixed(2);
    if (isNaN(Number(monthlyPayment) || isNaN(Number(resultPayment)))) {
      result;
    }
    const monthlyPaymentFormated = formatToGBP(Number(monthlyPayment));
    const resultPaymentFormated = formatToGBP(Number(resultPayment));
    divResults.style.display = "none"
    divResultNotEmpty.innerHTML = ""
    connectResultToInterface(monthlyPaymentFormated,resultPaymentFormated)
  } else {
    return;
  }
});

// função para conectar a interface



