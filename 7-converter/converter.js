/*
Создать функцию конвертации валют, принимающую три параметра:
- Сумма для конвертации
-	Исходная валюта
-	Целевая валюта

Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет
Ставки конвертации хранятся внутри функции
*/
const ALLOW_CURRENCY_LIST = ["RUB", "EUR", "USD"];
const USD = 91.33;
const RUB = 1;
const EUR = 112.33;

function convertSum(sum, from, to) {
  return ((sum * from) / to).toFixed(2);
}

const formatedCurrency = (toCurrency) => {
  switch (toCurrency) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "RUB":
      return "₽";
    default:
      return;
  }
};

function messageTemplate(value, icon) {
  return `${value} ${icon}`;
}

const conversionCurrency = (sumCurrency, fromCurrency, toCurrency) => {
  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();
  const icon = formatedCurrency(toCurrency);

  if (fromCurrency === toCurrency) {
    return messageTemplate(sumCurrency, icon);
  }
  if (!ALLOW_CURRENCY_LIST.includes(fromCurrency)) {
    console.log("Входящая валюта мне неизвестна");
    return null;
  }
  if (!ALLOW_CURRENCY_LIST.includes(toCurrency)) {
    console.log("Исходящая валюта мне неизвестна");
    return null;
  }

  let value = null;

  switch (fromCurrency) {
    case "USD":
      switch (toCurrency) {
        case "RUB":
          value = convertSum(sumCurrency, USD, RUB);
          break;
        case "EUR":
          value = convertSum(sumCurrency, USD, EUR);
          break;
      }
    case "RUB":
      switch (toCurrency) {
        case "USD":
          value = convertSum(sumCurrency, RUB, USD);
          break;
        case "EUR":
          value = convertSum(sumCurrency, RUB, EUR);
          break;
      }
      break;
    case "EUR":
      switch (toCurrency) {
        case "RUB":
          value = convertSum(sumCurrency, EUR, RUB);
          break;
        case "USD":
          value = convertSum(sumCurrency, EUR, USD);
          break;
      }
      break;
  }

  return messageTemplate(value, icon);
};

console.log(conversionCurrency(1000, "rub", "USD"));
console.log(conversionCurrency(100, "USD", "RUB"));
console.log(conversionCurrency(50, "EUR", "usd"));
conversionCurrency(1000, "RUB", "JPY");
