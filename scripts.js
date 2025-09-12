// cotacao da moeda do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

//Manupulando o input amount para somente numero
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//capturando evento de submit do formulario
form.onsubmit = (event) => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${price}`;
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("NAO FOI POSSIVEL COVERTER, TENTER NOVAMENTE MAIS TARDE");
  }
}
