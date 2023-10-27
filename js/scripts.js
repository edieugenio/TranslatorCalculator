const basePrice = 0.05;

const translations = {
    en: basePrice,
    fr: basePrice,
    hy: 3*basePrice
}

const wordsInput = document.getElementById('words');
const languageSelector = document.getElementById('language');

let total = parseFloat(wordsInput.value * translations[languageSelector.value]).toFixed(2);

document.querySelector("#js-calculate-total").innerHTML = total;

console.log(total);
console.log(languageSelector.value);
console.log(translations[languageSelector.value]);