const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency");


amount.oninput = () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
}


form.onsubmit = (event) => {
  
}





