const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

const prices = {
  "USD" : 4.87,
  "EUR" : 5.30,
  "GBP" : 6.87
}


amount.oninput = () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
}


form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, prices.USD, "US$")
    break
    case "EUR":
      convertCurrency(amount.value, prices.EUR, "€$")
    break
    case "GBP":
      convertCurrency(amount.value, prices.GBP, "£$")
    break
  }
}


function convertCurrency(amount, price, symbol) {
  try{
    let formattedResult =  formatCurrencyBRL(amount * price)
    let formattedPrice = formatCurrencyBRL(price)

    description.textContent = `${symbol} 1 = ${formattedPrice}`
    result.textContent = `${formattedResult}`

    footer.classList.add("show-result")
  }catch(error){
    footer.classList.remove("show-result")
    console.log(error)
  }
}


function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}


