const array = [1, 40, -5, 10, 0];

const sotr = (array, sort) => {
  if (sort !== "positiv" && sort !== "negativ") {
    return 'Выберите один из вариантов: "positiv" или "negativ"';
  }

  const variant = sort === "positiv" ? (a, b) => a > b : (a, b) => a < b;

  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (variant(array[j], array[j + 1])) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};

console.log(sotr(array, "positiv"));
console.log(sotr(array, "negativ"));
console.log(sotr(array, "other"));
