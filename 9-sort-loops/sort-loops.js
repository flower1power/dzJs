const array = [1, 40, -5, 10, 0];
const orderTemplate = (firstNumber, secondNumber, desc) => {
  if (!desc) {
    return firstNumber > secondNumber;
  }

  return firstNumber < secondNumber;
};

const sort = (array, desc = false) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      const isExchange = orderTemplate(newArray[j], newArray[j + 1], desc);
      if (isExchange) {
        [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
      }
    }
  }

  return newArray;
};

console.log(array);
console.log("Отсортированный по возрастанию массив:", sort(array));
console.log("Отсортированный по убыванию массив:", sort(array, true));
