const convertButton = document.querySelector(".convert-button")

function convertValues() {
    const dolarToday = 5.2
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const convertedValue = inputCurrencyValue/dolarToday
    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)