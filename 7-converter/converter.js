/*
Создать функцию конвертации валют, принимающую три параметра:
- Сумма для конвертации
-	Исходная валюта
-	Целевая валюта

Возвращает число в новой валюте, если конвертация поддерживается, или null, если нет
Ставки конвертации хранятся внутри функции
*/

const getExchangeRate = (fromCurrency, toCurrency) => {
  let rate = 0;

  switch (`${fromCurrency.toUpperCase()}_${toCurrency.toUpperCase()}`) {
    case "RUB_USD":
      rate = 0.03;
      break;
    case "RUB_EUR":
      rate = 0.025;
      break;
    case "USD_RUB":
      rate = 85;
      break;
    case "USD_EUR":
      rate = 0.85;
      break;
    case "EUR_RUB":
      rate = 100;
      break;
    case "EUR_USD":
      rate = 1.18;
      break;
    default:
      return null;
  }

  return rate;
};

const formatedCurrency = (toCurrency) => {
  switch (toCurrency.toUpperCase()) {
    case "USD":
      return "$";
      break;
    case "EUR":
      return "€";
      break;
    case "RUB":
      return "₽";
      break;
    default:
      return;
  }
};

const conversionCurrency = (sumCurrency, fromCurrency, toCurrency) => {
  const rate = getExchangeRate(fromCurrency, toCurrency);
  const currency = formatedCurrency(toCurrency);

  if (rate === null) {
    return null;
  }

  return currency === "₽"
    ? `${sumCurrency * rate}${currency}`
    : `${currency}${sumCurrency * rate}`;
};

console.log(conversionCurrency(1000, "rub", "USD"));
console.log(conversionCurrency(100, "USD", "RUB"));
console.log(conversionCurrency(50, "EUR", "usd"));
console.log(conversionCurrency(1000, "RUB", "JPY"));
