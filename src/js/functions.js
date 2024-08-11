


export function connectResultToInterface(monthlyPayment, resultPayment) {
    const divResultsNotEmpty = document.querySelector(".DivResultNotEmpty");
    divResultsNotEmpty.classList.add("DivResultNotEmpty");
  
    const h3yourResults = document.createElement("h3");
    h3yourResults.innerText = "Your results";
  
    const pDescription = document.createElement("p");
    pDescription.innerText = `Your results are shown below based on the information you provided. To adjust the results,
       edit the form and click “calculate repayments” again.";`;
  
    divResultsNotEmpty.append(h3yourResults, pDescription);
  
    const divResultValues = document.createElement("div");
    divResultValues.classList.add("DivResultValues");
  
    const firsth4DivResultValues = document.createElement("h4");
    firsth4DivResultValues.innerText = "Your monthly repayments";
    firsth4DivResultValues.classList.add("mb-05");
  
    const firstSpanDivResultValues = document.createElement("span");
    firstSpanDivResultValues.id = "monthlyPayment";
    firstSpanDivResultValues.classList.add("mb-1");
    firstSpanDivResultValues.style.display = "block";
    firstSpanDivResultValues.innerText = monthlyPayment;
  
    const lineDivResultValues = document.createElement("div");
    lineDivResultValues.classList.add("line", "mb-1");
  
    const secondh4DivResultValues = document.createElement("h4");
    secondh4DivResultValues.innerText = "Total you'll repay over the term";
    secondh4DivResultValues.classList.add("mb-05");
  
    const secondSpanDivResultValues = document.createElement("span");
    secondSpanDivResultValues.id = "totalPayment";
    secondSpanDivResultValues.style.display = "block";
    secondSpanDivResultValues.innerText = resultPayment;
  
    divResultValues.append(
      firsth4DivResultValues,
      firstSpanDivResultValues,
      lineDivResultValues,
      secondh4DivResultValues,
      secondSpanDivResultValues
    );
  
    divResultsNotEmpty.append(divResultValues)
  }
  