function formatToGBP(amount) {
    return amount.toLocaleString('en-GB', {
        style: 'currency',
        currency: 'GBP'
    });
  }

  const number = 2000.50
  const numberFormated = formatToGBP(number)
  console.log(numberFormated)
