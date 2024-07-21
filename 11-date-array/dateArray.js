const data = [
  "10-02-2022",
  "10.02.22",
  "test",
  "11/12/2023",
  "00/13/2022",
  "41/12/2022",
  "12-qwe-2020",
  "qwe-12-2020",
  "30/02/2000",
];

//! Решение через разные функции
const containsDateSeparator = (item) =>
  item.includes("/") || item.includes("-") || item.includes(".");

const isValidLength = (item) => item.length === 10 || item.length === 8;

const replaceSeparators = (item) => {
  let newItem = item;

  if (item.includes("/")) {
    newItem = newItem.split("/").join("-");
  }

  if (item.includes(".")) {
    newItem = newItem.split(".").join("-");
  }

  return newItem;
};

const splitDate = (item) => item.split("-");

const isValidDateParts = (parts) => {
  if (parts.length !== 3) {
    return false;
  }

  const [day, month, year] = parts.map(Number);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  }

  return [day, month, year];
};

const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const isValidDate = ([day, month, year]) => {
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  if (month === 2) {
    if (isLeapYear(year)) {
      return day <= 29;
    }

    return day <= 28;
  }

  if ([4, 6, 9, 11].includes(month)) {
    return day <= 30;
  }

  return true;
};

const filterData2 = (arraData) => {
  return arraData
    .filter(containsDateSeparator)
    .filter(isValidLength)
    .map(replaceSeparators)
    .filter((item) => {
      const parts = splitDate(item);
      const dateParts = isValidDateParts(parts);

      return dateParts && isValidDate(dateParts);
    });
};

//! Решение все в одной функции
const filterData = (arraData) => {
  const filterFinish = arraData
    .filter(
      (item) => item.includes("/") || item.includes("-") || item.includes(".")
    )
    .filter((item) => item.length === 10 || item.length === 8)
    .map((item) => {
      let newItem = item;

      if (item.includes("/")) {
        newItem = newItem.split("/").join("-");
      }

      if (item.includes(".")) {
        newItem = newItem.split(".").join("-");
      }

      return newItem;
    })
    .filter((item) => {
      const parts = item.split("-");

      if (parts.length !== 3) {
        return false;
      }

      const day = Number(parts[0]);
      const month = Number(parts[1]);
      const year = Number(parts[2]);

      if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
      }

      if (month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
      }

      if (month === 2) {
        const vis = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        if (vis && day > 29) {
          return false;
        }
        if (!vis && day > 28) {
          return false;
        }
      }

      if ([4, 6, 9, 11].includes(month) && day > 30) {
        return false;
      }

      return true;
    });

  return filterFinish.map((value) => value.replace("/", "-"));
};

console.log(filterData(data));
console.log(filterData2(data));
